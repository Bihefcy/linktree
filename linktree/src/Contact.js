import Footer from "./Footer";

const Contact = () => {
    return ( 
        <div className="contact">
            <div><p className="contact-me">Contact Me</p></div>
            <div>
                <p className="contact-text">Hi there, contact me to ask about anything you have in mind.</p>
                </div>
            <form>
                <fieldset>
                    <label for="first_name">First name</label>
                    <input type="text" id="first_name" placeholder="Enter your first name"></input>
                    <label for="last_name">Last Name</label>
                    <input type="text" id="last_name" placeholder="Enter your last name"></input>
                </fieldset>
                <fieldset>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="yourname@gmail.com"></input>
                </fieldset>
                <fieldset>
                    <label for="message">Message</label>
                    <textarea type="text" id="message" placeholder="Send me a message and I'll reply you as soon as possible..."/>
                </fieldset>
                <fieldset>
                    <input type="checkbox" id="check"></input>
                    <label for="check">You agree to providing your data to Bihefcy who may contact you.</label>
                </fieldset>
                <button id="btn__submit">Send message</button>
            </form>
            <Footer />
        </div>
        
     );
}
 
export default Contact;
