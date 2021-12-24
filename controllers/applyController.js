const fs = require('fs');

// const candidatesModel = require(__pathSchemas + 'database').candidatesModel;
// kéo hàm để check validation
// const applyValidator = require(__pathValidations + 'applyValidator');
// lib send email
// const email = require(__pathServices + 'sendemail');
// const MD5 = require(__pathServices + 'md5');
// const systemConfig = require(__pathConfig + 'localVariable');
let apply = async(req,res, next)=>{

    let upload = require(__pathServices + "upload")('file', __pathUploads, 2, 'jpeg|jpg|png|gif');

    await upload(req, res, async(errUpload) => {
        console.log(errUpload);
        console.log(req.body);
        
        console.log(req.files);
        res.send("success");
    })
}
module.exports = {apply};