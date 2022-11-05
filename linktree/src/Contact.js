import Footer from "./Footer";
import {Link} from 'react-router-dom'

const name = "Victor"
const Contact = () => {
    const submitted = (e) => {
        e.preventDefault()
        if (!(document.querySelector("#first_name").value === "") && !(document.querySelector("#last_name").value === "") && !(document.querySelector("#email").value === "") && !(document.querySelector("#message").value === "")) {
            alert('Your information has been recieved, we will get back to you.')
            document.querySelector(".back-home").classList.add("display")
        }else {
            document.querySelector(".form").classList.add("submitted");
            alert('Your information is incomplete.')
        }
        
    }
    return ( 
        <div className="contact">
            <div><p className="contact-me">Contact Me</p></div>
            <div>
                <p className="contact-text">Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
            <form className="form">
                <fieldset className="name">
                    <div>
                        <label for="first_name">First name</label>
                        <input type="text" id="first_name" placeholder="Enter your first name" required></input>
                        <p id="error">Please type in your First Name</p>
                    </div>
                    <div>
                        <label for="last_name">Last Name</label>
                        <input type="text" id="last_name" placeholder="Enter your last name" required></input>
                        <p id="error">Please type in your Last Name</p>
                    </div>
                    
                </fieldset>
                <fieldset>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="yourname@gmail.com" required></input>
                    <p id="error">Please type in a correct email</p>
                </fieldset>
                <fieldset>
                    <label for="message">Message</label>
                    <textarea type="text" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." required/>
                    <p id="error">Please enter a message</p>
                </fieldset>
                <fieldset className="checkbox">
                    <input type="checkbox" id="check"></input>
                    <label for="check">You agree to providing your data to {name} who may contact you.</label>
                </fieldset>
                <button id="btn__submit" onClick={submitted}>Send message</button>

                <Link to="/"><p className="back-home">Click here to go back</p></Link>
            </form>
            <Footer />
        </div>
        
     );
}
 
export default Contact;
