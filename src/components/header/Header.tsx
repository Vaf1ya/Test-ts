import './header.css';
import Logo from '../../assets/logo.svg';
import UserLogo from '../../assets/user-logo.svg';
const Header = () => {
    return (
        <header className="header flex">
            <a href="../../" className="header__logo flex">
                <img src={Logo} alt="" />
                <h1>Wrench CRM</h1>
            </a>

            <div className="header__user-logo flex">
                <img src={UserLogo} alt="" />
                <span>Имя Фамилия</span>
            </div>
        </header>
    );
};

export default Header;
