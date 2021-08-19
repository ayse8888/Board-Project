import React from "react";
import { Row, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";



const About = () => {
    return (
        <div className="container">
        <Row className="about-row">
            <Card className="col-sm-6 about-cards">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/65858467?v=4" className="about-img"/>
                <Card.Body className="about-card-body">
                    <Card.Title>Ayşe Çimen Başar</Card.Title>
                    <Card.Text>
                    Jr Frontend Developer
                    </Card.Text>
                </Card.Body>
                <Card.Body className="about-card-body">
                    <Card.Link href="https://github.com/ayse8888" target="_blank">
                        <Github color="#0f939d" size={35}/>
                    </Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/aysecimenbasar/" target="_blank">
                        <Linkedin color="#0f939d" size={35}/>
                    </Card.Link>
                </Card.Body>
            </Card>
            <Card className="col-sm-6 about-cards">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81487180?v=4" className="about-img"/>
                <Card.Body className="about-card-body">
                    <Card.Title>Moumen Hallak</Card.Title>
                    <Card.Text>
                    Jr Frontend Developer
                    </Card.Text>
                </Card.Body>
                <Card.Body className="about-card-body">
                    <Card.Link href="https://github.com/moumenha" target="_blank">
                        <Github color="#0f939d" size={35}/>
                    </Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/moumen-hallak/" target="_blank">
                        <Linkedin color="#0f939d" size={35}/>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Row>
        </div>
    );
};

export default About;
