import React, { useState } from "react";
import db from "../../firebaseConfig";
import { Button, Form, Col } from "react-bootstrap";


const ListForm = () => {
    const [listName, setListName] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("board").add({
            listName,
        });
        setListName('');
    };

    return (
        <Form onSubmit={handleSubmit} className="form-container d-flex justify-content-between">
            <Col>
                <Form.Control type="text"
                    name="listname"
                    placeholder="ListName"
                    onChange={(e) => setListName(e.target.value)}
                    value={listName}
                    required
                    className="list-form-input"
                />
            </Col>
            <Button type="submit" className="list-button">Add list</Button>
        </Form>
    );
}

export default ListForm;

