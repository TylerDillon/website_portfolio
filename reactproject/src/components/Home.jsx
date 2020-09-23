import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Home() {
    return (
        <div className="home">
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                            />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Welcome</h1>
                        <p>
                        I'm Tyler, and this is my portfolio site, rendered entirely in React.js. I'm a software engineer and web designer, and I love working in front-end technologies and with visual mediums. Keep reading to see why I love React, and why I use this powerful tool in my web programming.
                        </p>
                        <h1 className="font-weight-light">What is React?</h1>
                        <p>
                            React is a JavaScript library/framework created by Facebook engineers. It uses the building blocks of the internet (HTML/XML) and creates a hierarchy of page elements that will redisplay data as it changes, making it smooth and easy to create responsive and visually interesting websites.
                        </p>
                    </div>
                </div>
            </div>
        <Container className="mb-5">
            <Carousel className="bg-dark rounded">
                <Carousel.Item>
                    <Image src="intern.jpg" style={{height:"40vh"}} height="40vh" rounded/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="at_desk.jpg" style={{height:"40vh"}} rounded fluid/>

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image src="FB_profilePic.jpg" style={{height:"40vh"}} rounded fluid/>
                    
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        </div>
    );
}

export default Home;