var express = require('express');
var router = express.Router();
var Users = require('../models/user_model');

router.get('/:otp/:id', function (req, res) {

    //console.log("lkajsdlkajsdljasd    "+Users.verifyUser('parth.soni0210@gmail.com',1234));
    Users.verifyUser(req.params.id, req.params.otp, function (err, rows) {
        // console.log(rows[0]);

        if (err) {
            console.log("error in verify user");
            res.json(err);
        }
        else {

            if (rows.length<1) {
                console.log('Not Valid otp');
                var resu = { result: "false in otp " };
                return res.json(resu);
            } else {
                console.log('success');
                Users.updateStatus(req.params.id, function (err, row) {
                    if (err) {
                        var resu = { result: "false" };
                        return res.json(resu);
                    }
                    else {
                        var resu = { result: "true" };
                        return res.json(resu);
                    }
                });
            }


        }




    });

});
module.exports = router;
// console.log(" in else verify user");
// //res.json(rows);
// var dbtime = rows[0].otp_timestamp;
// var arrverify = dbtime.split(":");
// var time = new Date().toLocaleTimeString(); //current time
// var arr = time.split(":");
// var min = parseInt(arr[1]);
// if (min => 0 && min < 15) {
//     min = min - 0;
//     min = 60 - (15 - min);
//     if (arr[0] == 0)
//         arr[0] = 11;
//     else { arr[0] = arr[0] - 1; }
//     if (arrverify[1] >= 45 && arrverify[1] < 60)
//         arrverify[1] = arrverify[1] - 15;


// }
// if (arrverify[1] - min < 15 && arrverify[0] == arr[0]) {
//     console.log("before gettimeotp  ");
//     Users.getTimeOtp(req.params.otp, req.params.id, function (err, rows) {
//         if (err) {
//             console.log("err in gettimeotp  ");
//             res.json(err);
//         }
//         else {

//                 Users.updateStatus(req.params.id,function(err,rows){
//                        if(err)
//                        {
//                            res.json(err);
//                        }                 
//                        else
//                        {
//                            res.json(rows);
//                        }                                                 
//                 });
//                 //console.log("get time otp", rows);
//         }
//     });
// }
// else {
//      res.json({
//         success: true,
//         msg: 'OTP Time Out'
//     });

//     console.log("errr in get time otp");
// }

// }
