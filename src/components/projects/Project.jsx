import Card from 'react-bootstrap/Card';

import '../../styles/projects.css'

function Project () {
    return (


        <div className="project-list" id="projects">
        
            <header>
                <h1>Personal Projects 💻</h1>
            </header>

            <div className="project-div">

                <Card className = "card" style={{ width: '35rem', height : '20rem' }}>
                    <Card.Body>
                        <Card.Title className="title">Recommendo</Card.Title>
                        <Card.Subtitle>Web App for finding your favorite movies and getting recommendations</Card.Subtitle>
                        <Card.Text>
                            Recommedo is a web-application for finding your favorite movies and a all in one
                            stop for your movie recommendations. Built using MERN stack.
                        </Card.Text>
                        <Card.Link href="https://github.com/aavishkar6/Recommendo/tree/master"> ↗️ GitHub</Card.Link>
                        <Card.Link href="http://linserv1.cims.nyu.edu:16909">↗️ Try it</Card.Link>
                    </Card.Body>
                </Card>

                <Card className = "card" style={{ width: '35rem', height : '20rem' }}>
                    <Card.Body>
                        <Card.Title className="title">whoWillWinOscar</Card.Title>
                        <Card.Subtitle>Web App for visualizing oscar movie dataset</Card.Subtitle>
                        <Card.Text>
                            whoWillWinOscar is a web-application for detail data visualization through the use of 
                            interactive charts.
                        </Card.Text>
                        <Card.Link href="https://github.com/aavishkar6/whoWillWinOscar"> ↗️ GitHub</Card.Link>
                        <Card.Link href="https://github.com/aavishkar6/whoWillWinOscar">↗️ Try it</Card.Link>
                    </Card.Body>
                </Card>

            </div>

            <div className="project-div">
                <Card className = "card" style={{ width: '34rem', height : '20rem' }}>
                    <Card.Body>
                        <Card.Title className="title">HandWritten Digit Recognizer</Card.Title>
                        <Card.Subtitle>Machine Learning model for recognizing hand written digits</Card.Subtitle>
                        <Card.Text>
                            Web App developed using streamlit and machine learning model trained on the 
                            Lenet Architecture for recognizing handwritten digits. 
                        </Card.Text>
                        <Card.Link href="https://github.com/aavishkar6/Handwriting-recognition"> ↗️ GitHub</Card.Link>
                        <Card.Link href="https://github.com/aavishkar6/Handwriting-recognition">↗️ Try it</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )

}

export default Project;