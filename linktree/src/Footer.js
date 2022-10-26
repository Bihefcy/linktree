import i4g from './I4G.svg'
import logo from './logo.svg'
import slack from './slack.svg'
import icon from './Social icon.svg'


const Footer = () => {
    return ( 
        <div className="footer">
            <div className="sandg">
                <img src={slack} alt="slack icon" />
                <img src={icon} alt="github icon" />
            </div>

            <div className="footer-logo">
                <div>
                    <img src={logo} alt="zuri logo" />
                </div>
                <div>
                    <p>HNG Internship 9 Frontend Task</p>
                </div>
                <div>
                    <img src={i4g} alt="i4g logo" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;