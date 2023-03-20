import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img_q/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

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

export const Project = () => {
  const books1 = [
    {
      pdf: "https://firebasestorage.googleapis.com/v0/b/libreria-react-f1af2.appspot.com/o/Books%2F100%20cartas%20suicidas%20-%20Johana%20Quintero.pdf?alt=media&token=9990c0b8-b5d7-45b0-8e0b-576af0445b26",
      imgUrl: require("../assets/BooksFile/100CartasSuicidas.jpg"),
    },
    {
      pdf: "https://firebasestorage.googleapis.com/v0/b/libreria-react-f1af2.appspot.com/o/Books%2F100%20puertas%20-%20N.D.%20Wilson.pdf?alt=media&token=badfa0e2-c1d0-45ab-ae19-ce5578cc8712",
      imgUrl: require("../assets/BooksFile/100Puertas.jpg"),
    },
    {
      pdf: "https://firebasestorage.googleapis.com/v0/b/libreria-react-f1af2.appspot.com/o/Books%2F180%20segundos%20-%20Jessica%20Park.pdf?alt=media&token=37610972-61a5-43a3-b97a-f20e79be4b76",
      imgUrl: require("../assets/BooksFile/180Segundos.jpg"),
    },
    {
      pdf: "https://firebasestorage.googleapis.com/v0/b/libreria-react-f1af2.appspot.com/o/Books%2FA%20final%20mueren%20los%20dos%20-%20Adam%20Silvera.pdf?alt=media&token=0fec6abe-cbdc-4ef0-b1f4-032a0450c6cb",
      imgUrl: require("../assets/BooksFile/Alfinalmuerenlos2.webp"),
    },
    {
      pdf: "https://firebasestorage.googleapis.com/v0/b/libreria-react-f1af2.appspot.com/o/Books%2FA%20tu%20lado%20-%20Kasie%20West.pdf?alt=media&token=7e1916b1-4df0-481c-aad6-e1e0607e42d6",
      imgUrl: require("../assets/BooksFile/Atulado.webp"),
    },
    {
      pdf: "https://firebasestorage.googleapis.com/v0/b/libreria-react-f1af2.appspot.com/o/Books%2FAhora%20tu%20-%20Karla%20Trier.pdf?alt=media&token=93608c86-2d21-480d-90a4-8cacec3c4303",
      imgUrl: require("../assets/BooksFile/Ahoratu.jpg"),
    },

  ];

  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Libreria</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {books1.map((Books1, index) => {
                            return <ProjectCard key={index} {...Books1} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {books1.map((Books1, index) => {
                            return <ProjectCard key={index} {...Books1} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {books1.map((Books1, index) => {
                            return <ProjectCard key={index} {...Books1} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
