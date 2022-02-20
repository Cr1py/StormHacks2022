
const detectText = async (fileName) => {
    const vision = require('@google-cloud/vision')

        const CREDENTIALS = JSON.parse(JSON.stringify({
            // add your api json file data here
            }))
                
        const CONFIG = {
            credentials: {
                private_key: CREDENTIALS.private_key,
                client_email: CREDENTIALS.client_email
            }
        };
                
        const client = new vision.ImageAnnotatorClient(CONFIG)
                
        const fileName = storageRef

        const [result] = await client.documentTextDetection(
        `gs://${fileName}`
        );
        const fullTextAnnotation = result.fullTextAnnotation
        console.log(fullTextAnnotation.text)
}

 
