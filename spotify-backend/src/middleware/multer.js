import multer from "multer";

//extract the file from the api request and provide the path
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

export default upload;
