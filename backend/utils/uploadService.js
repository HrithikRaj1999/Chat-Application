import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadsDir = path.join(__dirname, "../uploads/");
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniq = Date.now();
    cb(null, uniq + file.originalname);
  },
});

const upload = multer({ storage: storage });
export default upload;
