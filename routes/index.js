const express = require('express');
const upload = require('../config/multer');
const router = express.Router();

const controller = require('../controllers/index');

//basic set up done
router.get('/',  (req, res)=>{
    res.json({Message: 'Setup Done...'})
});


//bounding boxes give the text along with its boundign boxes...
router.post('/imagetojson_bounding_boxes', upload.single('image'), controller.handleUploadv2);


module.exports = router;