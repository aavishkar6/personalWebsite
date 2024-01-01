// import { Badge } from "react-bootstrap";

import '../../styles/about.css';
import picture from './picture3.jpeg';

function About() {
    return (

        <div className="maindiv">
            <div className="header">
                <h1>Hey, I am Aavishkar 👋 </h1>
            </div>

            <div className="about">
                <div className="description">

                    <p>I study computer science and mathematics at New York University. </p>
                        
                    <p>I am an aspiring software developer and machine
                        learning enthusiast with multiple experience in web-development, machine learning and data analytics.</p> 
                        
                    <p>I love to play football (or soccer if you are from that part of the world)
                        and watch classic movies when I 
                        am free.
                    </p>
                </div>

                <div className="image">

                    <img src={picture} alt="My photo" width="500" />
                </div>
            </div>

        </div>
    )
}

export default About;