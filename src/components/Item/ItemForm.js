import React from "react";
import { useState } from "react"
import db from "../../firebaseConfig";
import firebase from "firebase";
import { Modal, Row, Button, Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";

const ItemForm = ({ docId }) => {
    const [songName, setSongName] = useState("");
    const [songUrl, setSongUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [mood, setMood] = useState("");
    const [fav, setFav] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("board").doc(docId).collection('items').add({
            songName,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            songUrl,
            imageUrl,
            mood,
            fav,
        });
        setSongName('');
        setFav('')
        setMood('')
        setSongUrl('')
        setImageUrl('')
        handleClose()
    };


    return (
        <Row className="align-items-center">
            <Button variant="primary" onClick={handleShow}>
            <PlusCircle color="#fff" size={25} className="me-2"/>Add Song
            </Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit List Items</Modal.Title>
                </Modal.Header>
                <Modal.Body >
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
                        <Form.Label style={{color:"#000"}}>Select a mood:</Form.Label>
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
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
};

export default ItemForm;
