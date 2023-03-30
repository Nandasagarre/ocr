//nu7T/yr7BlqIzt0SBI+VPg==2a6jKvvABjFVtFZ1
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

//controller logic to extract the text along with its bounding boxes from image
module.exports.handleUploadv2 = function(req, res){
    if(req.file?.path === undefined) return res.json({message: 'please make sure the image is included in body, Image should be of type jpg, jpeg'})
    const formData = new FormData();
    formData.append('image', fs.createReadStream(req.file.path));

    axios({
        method: 'post',
        url: 'https://api.api-ninjas.com/v1/imagetotext',
        data: formData,
        headers: {...formData.getHeaders(),
            'X-Api-Key' : 'nu7T/yr7BlqIzt0SBI+VPg==2a6jKvvABjFVtFZ1'
        },
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false, 
      })
      .then((response) => {
        //console.log(response.data);
        const result = response.data.map((data)=>{
          return {text: data.text};
      }).filter((text)=>{
          return text.text !== undefined;
      })
        res.send(response.data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error');
      });
    

}