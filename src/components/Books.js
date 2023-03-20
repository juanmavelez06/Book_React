import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "./firebase/Configfirebase";
import { v4 } from "uuid";

function Books() {
  // const [documentUpload, setdocumentUpload] = useState("");
  const [documentURL, setdocumentURL] = useState([]);

  const documentListRef = ref(storage, "Books/");
  // const uploadFile = () => {
  //   if (documentUpload == null) return;
  //   const documentRef = ref(storage, `Books/${documentUpload.name + v4()}`);
  //   uploadBytes(documentRef, documentUpload).then((document) => {
  //     getDownloadURL(document.ref).then((url) => {
  //       setdocumentURL((prev) => [...prev, url]);
  //     });
  //   });
  // };

  useEffect(() => {
    listAll(documentListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setdocumentURL((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // return (
  //   <div className="App">
  //     <input
  //       type="file"
  //       onChange={(event) => {
  //         setdocumentUpload(event.target.files[0]);
  //       }}
  //     />
  //     <button onClick={uploadFile}>Subir archivo</button>
  //   </div>
  // );
}

export default Books;
