import React from 'react';
import './style/Footer.css';
import logo from '../../assets/img/logo.png';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="WrapMap"></div>
        <div className="WrapBottom">
          <div className="LeftWrapBottom">
            <img src={logo} alt="" />
            <ul>
              <li>
                <a href="/">Меню</a>
              </li>
              <li>
                <a href="/">Причини</a>
              </li>
              <li>
                <a href="/">Про нас</a>
              </li>
              <li>
                <a href="/">Відгуки</a>
              </li>
              <li>
                <a href="/">Допомога</a>
              </li>
            </ul>
          </div>
          <div className="RightWrapBottom">
            <p>Виникли питання?</p>
            <span>Пишіть Ваш номер телефону та ми Вам зателефонуємо</span>
            <input placeholder="Введіть Ваш номер телефону" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
