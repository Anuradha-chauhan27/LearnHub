import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        if(file.mimtype.startswith('video')){
            cb(null,"uploads/videos")
        }else if(file.mimtype.startswith('image')){
            cb(null,"uploads/images")
        }
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({storage})