
import '../styles/App.css';
import Container from 'react-bootstrap/Container';

// Import custom componenets.
import Navigation from '../components/navigation/Navigation';
import About from '../components/about/About';
import Projects from '../components/projects/Project';
import Blogs from '../components/blogs/Blogs';
import Contact from '../components/contact/Contact';

function HomePage() {

  return (
    <Container className="container">

        <Navigation/>
        <About/>
        <hr/>
        <Projects/>
        <hr/>
        <Blogs />
        <hr />
        <Contact />

    </Container>
  )
}

export default HomePage;
