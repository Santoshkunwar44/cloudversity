const bcrypt = require("bcrypt")

class UtilityServices{

    async hashPassword(password){
        try {
           const salt = await bcrypt.genSalt(10) 
           const hashed = await bcrypt.hash(password,salt)
           return hashed;
        } catch (error) {
            throw Error(error.message)
        }
    }


    async Password(password,hashPassword){
        try {
           const hashed = await bcrypt.compare(password,hashPassword)    
           return hashed;
        } catch (error) {
            throw Error(error.message)
        }
    }
    


}

module.exports = new UtilityServices()