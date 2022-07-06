const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'Uploads/',
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({ storage: storage });

module.exports = upload;