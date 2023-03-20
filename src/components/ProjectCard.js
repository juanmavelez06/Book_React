import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase/Configfirebase";
import { v4 } from "uuid";
import leer from '../assets/img_q/leer.png'

export const ProjectCard = ({ title, imgUrl, pdf }) => {
  const [imageUrls, setImageUrls] = useState([]);

  const [documentUpload, setdocumentUpload] = useState("");
  const [documentURL, setdocumentURL] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const documentListRef = ref(storage, "Books/");

  const uploadFile = () => {
    if (documentUpload == null) return;
    const documentRef = ref(storage, `Books/${documentUpload.name + v4()}`);
    uploadBytes(documentRef, documentUpload).then((document) => {
      getDownloadURL(document.ref).then((url) => {
        setdocumentURL((prev) => [...prev, url]);
      });
    });
  };
  
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  useEffect(() => {
    listAll(documentListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setdocumentURL((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="imagenesF" />
        <div className="proj-txtx">
          <button>
          <a href={pdf}><img src={leer}></img></a>
          </button>
        </div>
      </div>
  
    </Col>
  );
};
