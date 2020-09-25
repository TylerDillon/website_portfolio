import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";


class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-4">
                                <Image xs={6} md={4} class="bubble" src="/profilepic1.jpg" fluid roundedCircle />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">About</h1>
                            <p>Hello!</p>
                            <p>
                            I'm Tyler Dillon, a soon-to-be graduate of the University of Washington. With a B.S. in Computer Science from one of the best programs in the country, I hope to join the tech industry as a software engineer in a full-time or intern position. I enjoy working on front-end web development (as you see with this website before you, made in React.js), but I'm strong in databases and back-end languages as well. 
                            </p>
                            <p>
                            When I'm not programming, you can find me gaming, playing tabletop RPGs, writing stories, and working out. I'm a lifelong Lord of the Rings and Star Wars fan, and a newbie meditation enthusiast. Before all the coding stuff, I was an Arabic linguist in the U.S. Marine Corps, and I deployed to Iraq and Kuwait. Now instead of talking to foreign locals, I talk to computers!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;