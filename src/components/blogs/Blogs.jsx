import '../../styles/blogs.css';

import ListGroup from 'react-bootstrap/ListGroup';

function Blogs () {

    return (

        <div className="main-div" id="blog">

            <header>
                <h1>Blogs and Articles ✍🏽 </h1>
            </header>

            <div className="blogs-div">
                <ListGroup variant="flush" className="division">

                    <ListGroup.Item className="blog-title">Getting Started with Web Development</ListGroup.Item>
                    <ListGroup.Item className="blog-title">What is NLP anyway ?</ListGroup.Item>
                    <ListGroup.Item className="blog-title">Learning Probability the Hard Way</ListGroup.Item>
                    <ListGroup.Item className="blog-title">Adversarial attacks in Machine Learning Models</ListGroup.Item>

                </ListGroup>
            </div>
        </div>
    )

}

export default Blogs;