import ImgFotoAboutUs from '../../assets/img/FotoAboutUs.jpg';
import VectorRightWhite from '../../assets/icons/VectorRightWhite.svg';
import Instagram from '../../assets/icons/Instagram.svg';
import Telegram from '../../assets/icons/Telegram.svg';
import Viber from '../../assets/icons/Viber.svg';
import VectorRight from '../../assets/icons/VectorRight.svg';
import './style/AboutUs.css';
const AboutUs = () => {
  return (
    <>
      <section className="AboutUs">
        <div className="ImgWrap">
          <img src={ImgFotoAboutUs} className="ImgAboutUs" alt="" />
          <div className="WrapButtonAboutUs">
            <p>
              Більше фото тут <img src={VectorRightWhite} alt="" />{' '}
            </p>
            <ul>
              <li className="Viber">
                <a href="/">
                  <img src={Viber} alt="" />
                </a>
              </li>
              <li className="Telegram">
                <a href="/">
                  <img src={Telegram} alt="" />
                </a>
              </li>
              <li className="Instagram">
                <a href="/">
                  <img src={Instagram} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="TextWrapAboutUs">
          <h3>Про нас</h3>
          <p>
            Наша команда складається з досвідчених і відданих професіоналів, які
            працюють з ентузіазмом і ефективністю. Ми пишаємося
            своїми досягненнями в цій галузі та прагнемо стати лідерами в галузі
            скупки та переробки каталізаторів. Ми встановили міцні партнерські
            відносини з автосервісами, автомобільними дилерами та іншими
            підприємствами, що дозволяє нам отримувати постійний
            потік каталізаторів Навколишнє середовище є одним із наших основних
            пріоритетів! Ми співпрацюємо з акредитованими переробними
            підприємствами, гарантуючи, що матеріали будуть оброблені
            та використані відповідно до екологічних стандартів.
          </p>
          <button>
            Читати більше <img src={VectorRight} alt="" />
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
