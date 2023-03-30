# ocr
# This Node js project will accepts a single jpg jpeg format image, per Api call. 
# on the fly using Multer, Axios, and 3rd party API https://api-ninjas.com/api/imagetotext endpoint returns the Array of text along with its bounding boxes from the image. .
# Postman tool collection is also inclued in the same repo...
# Thank you.

#example response
[
    {
        "text": "Health",
        "bounding_box": {
            "x1": 159,
            "y1": 285,
            "x2": 233,
            "y2": 304
        }
    },
    {
        "text": "Plan",
        "bounding_box": {
            "x1": 242,
            "y1": 285,
            "x2": 291,
            "y2": 304
        }
    },
    {
        "text": "(123-456)",
        "bounding_box": {
            "x1": 299,
            "y1": 285,
            "x2": 409,
            "y2": 307
        }
    },
    {
        "text": "123-4567-89",
        "bounding_box": {
            "x1": 424,
            "y1": 276,
            "x2": 641,
            "y2": 306
        }
    }
 }]
