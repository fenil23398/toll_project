var db = require('../connection');
var userss = {

    getallusers: function (callback) {
        return db.query("select * from user", callback);
    },
    getUsersById:function(id,callback){
        return db.query("select * from user where user_id=?",[id],callback);
    },
    adduser: function (userss,otp,callback) {
        console.log("otp ",otp);
        console.log("Insert into user values(?,?,?,?,?,?,CURRENT_TIMESTAMP,?)", [userss.user_id, userss.user_name, userss.user_email, userss.user_password, userss.contact_no,otp,0]);
        return db.query("Insert into user values(?,?,?,?,?,?,CURRENT_TIMESTAMP,?)", [userss.user_id, userss.user_name, userss.user_email, userss.user_password, userss.contact_no,otp,0], callback);
    },
    userlogin: function (userss, callback) {
        console.log(userss);
        return db.query("select * from user where user_email=? and user_password=?", [userss.user_email, userss.user_password], callback);
    },
    user_verify: function (id, callback) {
        return db.query("update user set verify=1 where user_email=?", [id], callback);
        
    },
    getUsersByEmail: function (email, callback) {
        return db.query("select user_email from user where user_email=?", [email], callback);
    },
    updatepassword: function (mail, hashpassword, callback) {
        
        return db.query("update user set user_password=? where user_email=?", [hashpassword.user_password, mail], callback);
    },
    userEmailMatch:function(useremail,callback){
        return db.query("select user_email from user where user_email=?",[useremail],callback);
    },
    userlogin:function(userss,callback)
    {
   
        return db.query("select * from user where user_email=? and user_password=?",[userss.user_email,userss.user_password],callback);
    },
    updateUser:function(userss,callback){
        return db.query("update user set user_name=? ,contact_no=? where user_id=?",[userss.user_name,userss.contact_no,userss.user_id],callback);
    },
    changePassword:function(pass,id,callback){
        // console.log("dfjlsdf");
        return db.query("update user set user_password=? where user_id=?",[pass,id],callback);
    },
    verifyUser:function(email,otp,callback){  
        // console.log("select user_id from user where user_otp=? and MINUTE(CURRENT_TIMESTAMP-otp_timestamp)<16 and user_email=?",[otp,email])
        return db.query("select user_id from user where user_otp=? and MINUTE(CURRENT_TIMESTAMP-otp_timestamp)<16 and user_email=?",[otp,email],callback);
        // return db.query("select otp_timestamp from user where user_email=?",[email],callback);
    },
    getTimeOtp(otp,email,callback){
       
        return db.query('select * from user where user_otp=? and user_email=?',[otp,email],callback);
    },
    updateStatus(email,callback){
        return db.query("update user set verify=1 where user_email=?",[email],callback);
    },
    resendotp(otp,email,callback)
    {
        return db.query("update user set user_otp=? , otp_timestamp=CURRENT_TIMESTAMP where user_email=?",[otp,email],callback);
    }

}
module.exports = userss;