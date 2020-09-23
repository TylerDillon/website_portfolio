import React from "react";
import { useState } from "react";
import {Button, Container, Row, Col, ToggleButtonGroup, ToggleButton, InputGroup, FormControl, Modal, Image, OverlayTrigger, Tooltip} from "react-bootstrap";

class DiceRoller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numDice: "", 
            die: "", 
            res: null,
            resArr: null,
            diceDict: {},
        };
        this.handleRoll = this.handleRoll.bind(this);
        this.setDie = this.setDie.bind(this);
        this.setNumDice = this.setNumDice.bind(this);
    }

    setDie(event) {
        this.setState({die: event.target.value});
    }

    setNumDice(event) {
        this.setState({numDice: event.target.value});
    }

    addDieToPool(event) {
        // this.
    }

    handleRoll() {
        var num = this.state.numDice;
        var die = this.state.die;
        var arr = [];

        // if unspecified, used default 1d20
        if (num === "") num = 1;
        if (die === "") die = 20;

        
        for (var i = 0; i < num; i++) {
            arr[i] = Math.floor(Math.random() * die) + 1;
        }
        this.setState({resArr: arr});
        var result = arr.reduce((a,b) => a + b);

        this.setState({res: result});
    }

    stringifyResults() {
        var output = "";
        var arr = this.state.resArr;
        
        if (arr === null) {
            return output;
        }

        for (var i = 0; i < arr.length - 1; i++) {
            output += "(" + arr[i] + ") + ";
        }
        output += "(" + arr[arr.length - 1] + ")";

        return output;
    }

    featureModal() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
            
            <OverlayTrigger
                placement="right"
                overlay={
                    <Tooltip id={'tooltip-right'}>
                        Show Changelog
                    </Tooltip>
                }>
            <Image src="info.png" width="20px" height="20px" onClick={handleShow} className="hover-cursor mx-2 "  ></Image>
            </OverlayTrigger>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Features & Changelog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <code>
                        <ul>
                            <li>Added this changelog, with modal popup display and tooltip on the 'info' icon.</li>
                            <li>Made things prettier! Worked on CSS and React-Bootstrap formatting.</li>
                            <li>Implemented an array of die results, so the result of each die roll is displayed in the result.</li>
                            <li>Added buttons for each main die type, d4 through d20. These buttons will quickly switch between dice</li>
                            <li>Implemented basic NdD functionality. User inputs number of dice N of type D, and Dice Roller outputs random number in that range for each die, and then sums them for the result.</li>
                        </ul>
                    </code>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }

    render() {
        
        return (
            <Container className="diceroller card my-4 mx-auto py-3 justify-items-center bg-light w-auto shadow">
                <Row className="sm-2">
                    <Col id="simpleView" className="">
                        <Row>
                        <this.featureModal className=""/>
                        <Row className="mx-auto ">
                            <h1 className="">Dice Roller</h1>

                        </Row>
                    
                        <Row className="mx-auto">
                            <ToggleButtonGroup type="radio" name="options" defaultValue="6" className="mx-3">
                                <ToggleButton variant="outline-primary" value={4} onChange={(e) => this.setDie(e)}>
                                    <Image src="d4.png" className="image-token mr-2" />
                                    d4
                                    </ToggleButton>
                                <ToggleButton variant="outline-primary" value={6} onChange={(e) => this.setDie(e)}>
                                    <Image src="d6.png" className="image-token mr-2" />
                                    d6
                                    </ToggleButton>
                                <ToggleButton variant="outline-primary" value={8} onChange={(e) => this.setDie(e)}>
                                    <Image src="d8.png" className="image-token mr-2" />
                                    d8
                                    </ToggleButton>
                                <ToggleButton variant="outline-primary" value={10} onChange={(e) => this.setDie(e)}>
                                    <Image src="d10.png" className="image-token mr-2" />
                                    d10</ToggleButton>
                                <ToggleButton variant="outline-primary" value={12} onChange={(e) => this.setDie(e)}>
                                    <Image src="d12.png" className="image-token mr-2" />
                                    d12
                                    </ToggleButton>
                                <ToggleButton variant="outline-primary" value={20} onChange={(e) => this.setDie(e)}>
                                    <Image src="d20.png" className="image-token mr-2" />
                                    d20
                                    </ToggleButton>

                            </ToggleButtonGroup>
                        </Row>
                        <Row className="my-2 mx-auto justify-content-center">
                            <Col className="col-5">
                                <InputGroup className="">
                                    <FormControl
                                    id="num" 
                                    placeholder="1"
                                    value={this.state.numDice}
                                    onChange={this.setNumDice}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text>d</InputGroup.Text>
                                    </InputGroup.Append>
                                    <FormControl
                                        id="die"
                                        placeholder="20"
                                        value={this.state.die}
                                        onChange={this.setDie}
                                    />
                                    <InputGroup.Append>
                                        <Button className="border-secondary" variant="primary" onClick={this.handleRoll}>
                                            Roll
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            
                        </Row>
                        <Row className="mx-0 justify-content-md-center">
                            <Col className="text-right fluid">
                                <h4>{this.stringifyResults()}</h4>
                            </Col>
                            <Col className="text-left">
                                {this.state.res !== null && 
                                    <h3 className="">
                                        = {this.state.res}    
                                    </h3>
                                }
                            </Col>
                            
                        </Row>
                        
                        {/* <Row className="justify-content-center">
                            <p>Debug | numDice: {this.state.numDice}  Die: {this.state.die}</p>
                        </Row> */}
                        </Row>
                    </Col>
                    
                    <Col id="poolbox" className="">
                        <h6>Dice Pool</h6>
                        <Col className="border h-75 bg-white">
                        </Col>
                    </Col>
                </Row>
                
                
            </Container>
        );
    }
}

export default DiceRoller;