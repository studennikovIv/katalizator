import logo from '../../assets/img/logo.png';
import IconLinkToBottom from '../../assets/icons/LinkToBottom.svg';
import './style/Header.css';
const Header = () => {
  return (
    <>
      <header className="Header">
        <img src={logo} alt="" />
        <ul className="NavList">
          <li>
            <a href="/"> Меню</a>
          </li>
          <li>/</li>
          <li>
            <a href="/"> Причини </a>
          </li>
          <li>/</li>
          <li>
            <a href="/">Про Нас</a>
          </li>
          <li>/</li>
          <li>
            <a href="/">Відгуки</a>
          </li>
        </ul>
        <ul className="HeaderPhone">
          <li>
            <a href="tel:+38 099 765 4321">+38 099 765 4321</a>
          </li>
          <li>
            <p>Ua</p>
            <img className="UaIcon" src={IconLinkToBottom} alt="" />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
