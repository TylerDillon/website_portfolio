import React from "react";
import {Container, Row} from "react-bootstrap";
import DiceRoller from "./DiceRoller";


class Projects extends React.Component {

    render() {
        return (
                <Container fluid>
                        <Row className="mb-5">
                                <DiceRoller />
                        </Row>
                </Container> 
        );
    }
}

export default Projects;
