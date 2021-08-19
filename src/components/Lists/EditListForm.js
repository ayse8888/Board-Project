import React, { useState } from "react";
import db from "../../firebaseConfig";
import Modal from 'react-bootstrap/Modal'
import { Row, Button, Form } from "react-bootstrap";
import { PencilSquare, Trash } from "react-bootstrap-icons";


const EditListForm = ({ docId, list }) => {
    const [listName, setListName] = useState(list.listName)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("board").doc(docId).update({
            listName,
        });
        handleClose()
    };
    const handleDelete = (e) => {
        e.preventDefault();
        db.collection("board").doc(docId).delete();
    };

    return (
        <Row className="d-flex justify-content-between">
            <div className="d-flex justify-content-between p-0">
                <Button variant="primary" size="md" onClick={handleShow}>
                <PencilSquare onClick={handleShow} color="#fff" size={20} className="me-1" style={{ cursor: "pointer" }} /> Edit List Name
                </Button>
                <Button variant="primary" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(e) }}>
                <Trash onClick={(e) => { if (window.confirm('Are you sure you wish to delete this list?')) handleDelete(e) }} color="#fff" className="me-1" size={20} style={{ cursor: "pointer" }} />Delete List
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit List Items</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Control
                        type="text"
                        name="listname"
                        placeholder="Listname"
                        onChange={(e) => setListName(e.target.value)}
                        value={listName}
                        required
                    />
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
    );

}

export default EditListForm;