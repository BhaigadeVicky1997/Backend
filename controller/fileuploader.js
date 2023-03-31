const path=require('path');
const multer = require('multer');

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
       cb(null, './uploads');
     },
   filename: function (req, file, cb) {
       cb(null, file.originalname);
   }
});

const upload=multer({storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=="image/png" || file.mimetype=="image/jpeg"){
           cb(null,true)
        }
        else{
            cb(null,false);
             cb(new Error("Only png and jpg format allowed"))
        }
    }});
    
module.exports=upload;