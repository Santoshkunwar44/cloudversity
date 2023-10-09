const { registerUser, setUserdata, otpConfirmation } = require("../controllers/AuthController");
const { RtcTokenBuilder, RtcRole, RtmTokenBuilder } = require('agora-access-token');

const router = require("express").Router()


router.post("/sentOtp",registerUser)

router.post("/setupUser",setUserdata)

router.post("/otpCofirmation",otpConfirmation)
const generateAccessToken = (req, resp) => {
    // set response header
    resp.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    // get channel name
    const channelName = req.params.channel;
    if (!channelName) {
        return resp.status(400).json({ 'error': 'channel is required' });
    }
    // get uid
    let uid = req.params.uid;
    if (!uid || uid === '') {
        return resp.status(400).json({ 'error': 'uid is required' });
    }
    // get role
    let role;
    if (req.params.role === 'publisher') {
        role = RtcRole.PUBLISHER;
    } else if (req.params.role === 'audience') {
        role = RtcRole.SUBSCRIBER
    } else {
        return resp.status(400).json({ 'error': 'role is incorrect' });
    }
    // get the expire time
    let expireTime = req.query.expiry;
    if (!expireTime || expireTime === '') {
        expireTime = 3600;
    } else {
        expireTime = parseInt(expireTime, 10);
    }
    // calculate privilege expire time
    const currentTime = Math.floor(Date.now() / 1000);
    const privilegeExpireTime = currentTime + expireTime;
    // build the token
    const rtcToken = RtcTokenBuilder.buildTokenWithUid(process.env.AGORA_APP_ID, process.env.AGORA_APP_CERFICATE, channelName, uid, role, privilegeExpireTime);
    const rtmToken = RtmTokenBuilder.buildToken(process.env.AGORA_APP_ID, process.env.AGORA_APP_CERFICATE, uid, role, privilegeExpireTime);
    // return the token
    return resp.status(200).json({ rtmToken, rtcToken })
}

router.get("/rte/:channel/:role/:tokentype/:uid", generateAccessToken)
// passport 


module.exports = router;