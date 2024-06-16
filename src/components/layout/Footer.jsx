import Logo from "../common/Logo";
import rocket from "../../assets/img/rocket.svg";

function Footer() {
    return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__content">
                <Logo src={rocket} alt={'Rocket'} className="footer__logo"/>
                <div className="footer__text">Exciting space adventure!</div>
            </div>
        </div>
    </footer>);
}

export default Footer;
