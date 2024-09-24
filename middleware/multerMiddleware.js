import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'client/public/uploads/study');
  },
  filename: (req, file, cb) => {
    // const newFileName = file.originalname;
    // cb(null, `${Date.now()}_${newFileName}`);
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + '-' + Date.now() + ext);
  }
});
const upload = multer({ storage });

export default upload;