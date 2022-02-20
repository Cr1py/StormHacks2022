import React, {useState} from 'react'
import './AddNotes.scss'
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";
import { storage } from '../firebase/firebase-config';

function AddNotes() {
    // progress bar
    const [progress, setProgress] = useState(0);

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
        };

    //sending to firebase
    const uploadFiles = (file) => {

        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
        "state_changed",
        (snapshot) => {
            const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
        },
        (error) => console.log(error),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);

                });
            });
        };

    // reading imgs for text

  return (
    <div>
      <form onSubmit={formHandler} className="addfile">
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <h2 className='progressbar'>Uploading done {progress}%</h2>
      <form action='/newnotes' className="addfile">
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default AddNotes