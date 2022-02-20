
const detectText = async (fileName) => {
    const vision = require('@google-cloud/vision')

        const CREDENTIALS = JSON.parse(JSON.stringify({
            "type": "service_account",
            "project_id": "stormhacks2022-341900",
            "private_key_id": "98eaecb559af769403cdde713cdabe583308c362",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDfEOiRygxyGBuy\ntmihc7pcbIXseGNbxSrFVNlljqnarCS3DWC52YRR3ptJ8iBqdks77n2lOoPVs7H5\nJy9HS6WCNkQy1p5lB7fkg4psJTQP3I4/cSL+n/5B2hxcOO4Ghi2AEDYG8OpAGKOm\n1oJxKc4+kM/wbau8VayXERTZbiOmGTFcbW64CF8qi3ta31Z90ksuRtfKCzBTqb0H\nfBY9Ul8xZZWiOS61A2fkJlj8BvYpUOG118qjkaN7K5Jqq9XD8S5HEkTaUgBS/MYu\nF1ipSI2Xw1Eyvkw720aJLr3/hIbgm3pSrP6rtv+eQc6nFmD/RjQMMkIRLYbEFmdZ\nfQZY66WxAgMBAAECggEAJ4Tkmy2XYmBMie8gntf0sJqmaGRUwAWwo+i6IjCx/XSJ\nhae4VvzHIUUFsIZVwV7HSe0g8/SntiThl0Fesiwf/K92Cia1RbNmHDVEwQ+fR18d\nEXbPCxrXzh1g8GLCosPDTGCy3axxZ90lozF2Ryuvpyx7Nn6LkjCAhPwI/FNzu+F+\niBa6RIa3tbgRuLnlCboRSbpXdSXTfQSK5m9muVZ2T/WF+7iUhE5uRNcAPX21H6WB\nLg9ajZ3D6qRovOxzCUaii8Zf/hHSVTNEMrUkfSPv8lCS9KpJm0Usym4PTXEeTvYE\ncXF1mktGTJJ7x4Ba6CItNKycERN7k4Kj+cyDPLTkdQKBgQD0a3p5OKOkVRmfQSvT\n8YmBfZdhKLZjbqXO022tH8SRcRU+xT2SnT7BxgbkO5c6pUPSZAzXqMO8JPDIsKua\nhB+d7D7kH9Cyc52lzHxmpuLZOb4xz3XJvi+MsQXm6aS5TnfhrHELJHAQZRplSu4m\nTLziUIS3w5fImo+sNeOjQnax7QKBgQDpom8cpnVSV3bduE9ubQ+v9WLCCrvH0kSV\nh7fjfv5JWJRAA/rTyNBC5K+eXlUpVldxw8hu4Ge645eWX6tg6KKLNsXHbovmkbV+\nKk+g9U6+nqp1Zj5P0nUumwcbNyLdFfRcAuD2JB89UpHWbGMtlZRO+Y4/gTzwYic2\nKQG/WyKaVQKBgQCLHSU/G4qgPMNxjhFY90+xQP9JEHgGzfJXbqUs9TjXIwrZiD/M\nU+1lMsW3X2dqvKeGduWMVYTacBgP0eZJ8stgAhellaod94oR1Po1HuVch+4FwbOj\n2LiNli/qxq63vb6j1pccpWeXHURRxL0ZVXHoSbXQNeYNClOdy6o9wNV33QKBgCV6\nYhqVdUKFN1Mv6sYLBrYyRepcsGzIhSn7gHsk9wOrCvUN7mGk2AuzBZ0BAuZDrHla\nb7+hjeJD+iAsLqC4EMMGQUnRqO2OuC+J+AYY883ORAfbI+nIF/Ym9kfeW2Bd0jok\nWBQEDWLX6P8dmfdJBGZ6z9/OComBJUsh3t7kbrOVAoGAJUoatbx0Us2GtJfVJFon\nbx9BqNz/ratmsbOkm3DIMPb3iXiKqVCEWdjQhkfIVN9oBVP27OUblGm/vFwm9KRU\nWNunxKNPr5flGklxytw9W8WgMqMLdonjRDiAKqAEgdqAJQKSfZGrysOnGcANNRE2\nnaXiajnwXlc0okpAujdNk2E=\n-----END PRIVATE KEY-----\n",
            "client_email": "stormhacks-submition@stormhacks2022-341900.iam.gserviceaccount.com",
            "client_id": "114593239523610020858",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/stormhacks-submition%40stormhacks2022-341900.iam.gserviceaccount.com"
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

 