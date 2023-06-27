import './style/Footer.css';
import React from 'react';
import logo from '../../assets/img/logo.png';
import BtnWhiteVector from '../../assets/icons/ButtonVectorWhite.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="WrapMap">
          <iframe
            title="Мапа"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.381305377162!2d30.689682393270157!3d50.39673101796361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c48667c382db%3A0x656a07fe18f6e97c!2z0YPQuy4g0KHQstC10YLQu9Cw0Y8sIDMsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1687887141741!5m2!1sru!2sua"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
            <span>Пишіть </span>
            <div className="InputWrap">
              <input placeholder="Введіть Ваш номер телефону" />
              <button>
                <img src={BtnWhiteVector} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="TextBottomFooter">
          <p>© 2023 Усі права захищені</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
