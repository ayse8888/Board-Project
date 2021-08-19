import React from "react";
import ListForm from "./Lists/ListForm";
import AllLists from "./Lists/AllLists";
import { Container, Row } from "react-bootstrap";
import Slider from "./Slider";
const Home = () => {
    return (
        <div className="container-fluid">
        <Slider />
            <Row>
                <AllLists />
            </Row>
            </div>
    );
};

export default Home;
