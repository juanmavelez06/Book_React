import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img_q/GatosL.png";
import Swal from 'sweetalert2';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [toRotate, setToRotate] = useState([localStorage.getItem('dato') || '']);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    const dato = localStorage.getItem('dato');
    if (dato) {
      setToRotate([dato]);
    }
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const [dato, setDato] = useState('');
  
  const guardarDato = () => {
    Swal.fire({
      title: 'Introduce tu Nombre:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (dato) => {
        setDato(dato);
        localStorage.setItem('dato', dato);
        setToRotate([dato]);
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {"Bienvenidos! Es todo un gusto "} <span className="wrap">{text}</span>
            </h1>
            <p>
              "La lectura de un buen libro es un diálogo incesante en que el libro habla y el alma contesta."{<strong style={{fontStyle:"italic", textTransform:"capitalize"}}>André Maurois</strong>}
            </p>
            <button onClick={guardarDato}>Ingresa Tu nombre
              ----- <ArrowRightCircle size={25} />
            </button>
        
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
