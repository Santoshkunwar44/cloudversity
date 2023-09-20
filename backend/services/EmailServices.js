const nodemailer = require("nodemailer");




class EmailService {

    async sendEmail({ subject, text, html, email }) {



        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            
            auth: {
                pass: process.env.SMTP_PW,
                user: process.env.APP_EMAIL
            },
        }); 

        try {

            let info = await transporter.sendMail({
                from: process.env.APP_EMAIL,
                to: email,
                subject,
                text,
                html,
            });

            console.log("Message sent: %s", info.messageId);
            return info.messageId;

        } catch (error) {
            throw new Error(error)
        }
    }






}

module.exports = new EmailService()