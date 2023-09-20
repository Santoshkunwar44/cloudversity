


class EmailHtmlService{


    
  


    getOtpHtml(code){
        
        
        return `<div>
          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/352850187_808709043911745_566344590095350869_n.jpg?stp=dst-jpg_p403x403&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Rqrey-x9sZ8AX9n27lg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTRKzT-KFPaeoRLfSDMnnD-2bSQylVJ8XczY2N3QVFdkQ&oe=64A91F73" width="200px" style="border-radius:4px"/> <br/>
           <h1 style="color:#0e0b3d" >Your Otp   </h1> </br>
           <h3 style="color:#0e0b3d"> Keep this otp safe .Dont share to anyone .  </h3> </br> <h4 style="color:#0e0b3d">Use this code to confirm your email  </h4> <br/> <h5>${code}</h5></h3> </br> <br> <br>  </div>`

    }
    
    
    
    
    }
    module.exports = new  EmailHtmlService()