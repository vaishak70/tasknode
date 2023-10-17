const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer"); // Import Multer
const path = require("path");
const mongoose = require("mongoose")

const conectDB = require("./DBconct");
const router = require("./Router");

const app = express();

conectDB();
dotenv.config();
app.use(express.json());

const Image = mongoose.model('Image', {
    filename: String,
    contentType: String,
    image: Buffer,
  });


  const Document = mongoose.model('Document', {
    filename: String,
    contentType: String,
    document: Buffer,
});

const Video = mongoose.model('Video', {
    filename: String,
    contentType: String,
    video: Buffer,
});


  const storage = multer.memoryStorage();
const upload = multer({ storage: storage });




app.post('/upload', upload.fields([{ name: 'image', maxCount: 5 }, { name: 'document', maxCount: 5 },{ name: 'video', maxCount: 5 }]), async (req, res) => {
    
    
    const imageFiles = req.files['image'] || [];

    const images = imageFiles.map(file => ({
        filename: file.originalname,
        contentType: file.mimetype,
        image: file.buffer,
    }))
    await Image.insertMany(images);

    const documentFiles = req.files['document'] || [];
    const documents = documentFiles.map(file => ({
        filename: file.originalname,
        contentType: file.mimetype,
        document: file.buffer,
    }))
    await Document.insertMany(documents);

    const videoFiles = req.files['video'] ;
    const videos = videoFiles.map(file => ({
        filename: file.originalname,
        contentType: file.mimetype,
        video: file.buffer,
    }));
    
    await Video.insertMany(videos);
    

    
    
    res.send('files uploaded successfully');
  
    

});

// app.get('/image', async (req, res) => {
//     // const id = req.params.id;
//     const image = await Image.find({});
  
//     if (!image) {
//       return res.status(404).send('Image not found');
//     }
  
//     const base64Image = image.image.toString('base64');
//     const dataUri = `data:${image.contentType};base64,${base64Image}`;
  
//     res.send(dataUri);
//   });

  

app.use("/", router);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
