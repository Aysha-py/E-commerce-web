import React,{useState} from 'react'
import {Modal,Button} from "react-bootstrap";
// import image1 from "../assets/img/image1.jpg"
// import image2 from "../assets/img/image2.jpg"
// import image3 from "../assets/img/image3.jpg"
// import image4 from "../assets/img/image4.jpg"

const ImageCarousel = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
    Launch demo modal
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
    
    </div>


  )
}

export default ImageCarousel