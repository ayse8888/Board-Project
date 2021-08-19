import React, { useState } from "react";
import db from "../../firebaseConfig";
import { Col, Modal, Row, Button, Form } from "react-bootstrap";
import firebase from "firebase";
import { Heart, HeartFill, PencilSquare, Trash } from 'react-bootstrap-icons';


const EditForm = ({ item, itemId, docId, items, favorite }) => {
  const [songName, setSongName] = useState(item.songName);
  const [songUrl, setSongUrl] = useState(item.songUrl);
  const [imageUrl, setImageUrl] = useState(item.imageUrl);
  const [mood, setMood] = useState(item.mood);
  const [fav, setFav] = useState(item.fav);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("board").doc(docId).collection('items').doc(itemId).update({
      id: item.id,
      songName,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      songUrl,
      imageUrl,
      mood,
      fav,
    });
    handleClose()
  };
  console.log(docId)


  const handleFav = (e) => {
    setFav((fav) => !fav);
    e.preventDefault();
    db.collection("board").doc(docId).collection('items').doc(itemId).update({
      fav: item.fav ? false : true,
    })
  };


  const handleDelete = (e) => {
    e.preventDefault();
    db.collection("board").doc(docId).collection('items').doc(itemId).delete();
  };


  return (
    <Row className="align-items-center">
      <div>
      <span onClick={handleFav} style={{display:"block", marginBottom: "10px"}}>
        {fav
          ? <HeartFill color="#d92c45" size={50} style={{cursor:"pointer"}}/>
          : <Heart color="#d92c45" size={50} style={{cursor:"pointer"}}/>
        }
      </span>
      <span>{!favorite ? "Not in the Favorite List" : "Added to Favorite"}</span>
      </div>
      <Row xs={2} md={2} className="justify-content-center">
      <Col >
      <PencilSquare onClick={handleShow} color="#fff" size={30} style={{cursor:"pointer"}}/>
      </Col>
      <Col>
      <Trash onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(e) }} color="#fff" size={30} style={{cursor:"pointer"}}/>
      </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit List Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            name="songName"
            placeholder="Song Name"
            onChange={(e) => setSongName(e.target.value)}
            value={songName}
            required
          />
          <Form.Control
            type="url"
            name="songUrl"
            placeholder="Song Url"
            onChange={(e) => setSongUrl(e.target.value)}
            value={songUrl}
            required
          />
          <Form.Control
            type="url"
            name="imageUrl"
            placeholder="Image Url"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            required
          />

          <Form.Group>
            <Form.Label>Select a mood</Form.Label>
            <Form.Control as="select"
              onChange={(e) => setMood(e.target.value)}
              value={mood}
              required
            >
              <option>Select an option</option>
              <option>Calm</option>
              <option>Cheerful</option>
              <option>Lonely</option>
              <option>Melancholy</option>
              <option>Romantic</option>
              <option>Happy</option>
              <option>Energetic</option>
            </Form.Control>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="outlineButton" variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>

  )
};
export default EditForm;