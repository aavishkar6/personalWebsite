
import linkedin from '../../assets/linkedIn.svg';
import github from '../../assets/github-mark.svg';
import email from '../../assets/email.svg';
import '../../styles/contact.css';

function Contact () {

    return (

        <div id="contacts">

            <h1>Contacts 📇</h1>

            <ul>
                <li><a href="https://www.linkedin.com/in/aavishkar-gautam-299773260/">LinkedIn <img src={linkedin} alt="linkedIn"/></a></li>
                <li><a href="https://github.com/aavishkar6">GitHub <img src ={github} alt="github"/></a></li>
                <li><a href="mailto:ag8298@nyu.edu">Email <img src={email} alt="email"/></a></li>
            </ul>
        </div>
    )
}

export default Contact;