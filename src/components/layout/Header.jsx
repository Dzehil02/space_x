import Logo from '../common/Logo';
import logo from '../../assets/img/logo.svg';
import Link from '../common/Link';
import Basket from '../common/Basket';
function Header() {
    return (
        <header id="open" className="header">
            <div id="close" className="header__container container">
                <Logo src={logo} alt={'Logo'} className="header__logo"/>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link href="/" className="menu__link">
                                    Home
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link href="/" className="menu__link">
                                    Products
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link href="/" className="menu__link">
                                    <Basket className="menu__icon" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Link href="#open" className="icon-menu">
                    <span></span>
                </Link>
                <Link href="#close" className="close-icon-menu">
                    <span></span>
                </Link>
            </div>
        </header>
    );
}

export default Header;
