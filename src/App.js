import logo from './assets/img/logo.png';
import IconLinkToBottom from './assets/icons/LinkToBottom.svg';
import VectorRight from './assets/icons/VectorRight.svg';
import './App.css';
import EnvironmentalImpact from './assets/img/EnvironmentalImpact.png';
import FriendlyApproach from './assets/img/FriendlyApproach.png';
import HonestAssessment from './assets/img/HonestAssessment.png';
import Reliability from './assets/img/Reliability.png';
import SimpleProcedure from './assets/img/SimpleProcedure.png';
import ImgFotoAboutUs from './assets/img/FotoAboutUs.jpg';

function App() {
  return (
    <>
      <div className="HeroBg">
        <div className="Conteiner">
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
          <div className="Hero">
            <div className="TopTextConteiner">
              <h1>Перетворіть старий каталізатор у реальний кеш!</h1>
              <p>
                Отримайте замість старої деталі гроші вже зараз! Продайте нам
                свій каталізатор і отримайте гроші. Дійте і заробіть вигоду!
              </p>
              <div className="ButtonConteiner">
                <button>Продати каталізатор</button>
                <button>Задати питання</button>
              </div>
            </div>

            <div className="BottomTextConteiner">
              <div className="BoxOne">
                <h3>10+ років досвіду</h3>
                <p>
                  За стільки часу ми накопичили великі знання навички, що дає
                  нам змогу ефективно розв'язувати складні завдання
                </p>
              </div>
              <div className="BoxTwo">
                <h3>5+ спеціалістів</h3>
                <p>
                  Наші люди володіють глибокими знаннями в галузі інженерії, і
                  застосовують свої навички для розробки оптимізації процесів.
                </p>
              </div>
              <div className="BoxThree">
                <h3>100+ проектів</h3>
                <p>
                  Саме стільки роботи було зроблено для наших клієнтів. Відгуки
                  підтверджують нашу надійність та якість роботи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Conteiner">
        <section className="StagesSale">
          <h2>Етапи продажу деталі</h2>
          <div className="ConteinerStagesSale">
            <div className="LeftContainer">
              <div className="Box">
                <h3>Оцінювання та подання заявки</h3>
                <p>
                  Першим кроком буде оцінка вашого автомобільного каталізатора.
                  Ви заповнюєте заявку, надаючи інформацію про марку, модель і
                  стан. Також ми можемо просити фотографії для більш точної
                  оцінки
                </p>
                <button>
                  Заявка <img src={VectorRight} alt="" />
                </button>
              </div>
              <div className="Box">
                <h3>Відправлення каталізатора та перевірка</h3>
                <p>
                  Після згоди із ціною, Вам надають інструкції про відправлення
                  каталізатора. Зазвичай необхідно відправити поштою. Коли
                  отримуєте каталізатор - ми здійснюємо перевірку, щоб
                  переконатися до наданої інформації
                </p>
                <button>
                  Вказати пошту <img src={VectorRight} alt="" />
                </button>
              </div>
            </div>
            <div className="CenterConteiner">
              <ul>
                <li>01</li>
                <li></li>
                <li>02</li>
                <li></li>
                <li>03</li>
                <li></li>
                <li>04</li>
                <li></li>
              </ul>
            </div>
            <div className="RightConteiner">
              <div className="Box">
                <h3>Отримання пропозиції та згода</h3>
                <p>
                  Після розгляду заявки ви отримуєте пропозицію про ціну, за яку
                  компанія готова купити ваш каталізатор. Ви розглядаєте і
                  приймаєте рішення про її прийняття. Якщо ви згодні із ціною,
                  переходьте до наступного кроку
                </p>
                <button>
                  Отримати пропозицію <img src={VectorRight} alt="" />
                </button>
              </div>
              <div className="Box">
                <h3>Одержання виплати</h3>
                <p>
                  Після перевірки Вашої деталі та її відповідності заявленим
                  характеристикам, Вам виплачується сума, запропонована
                  компанією. Виплата може здійснюватися різними способами: через
                  банк або інші доступні методи
                </p>
                <button>
                  Вказати виплату <img src={VectorRight} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="PriseCatalizator">
          <h2>Ціна каталізатора</h2>
          <div className="ConteinerForm">
            <div className="DiscriptionForm">
              <h3>
                Зателефонуйте нам <br /> та чекайте нашого дзвінку
              </h3>
            </div>
            <form className="FormPriseCatalizator">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ім'я та прізвище"
                required
              />

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ваш номер телефону"
                required
              />
              <button>Надіслати</button>
            </form>
          </div>
        </section>
        <section className="WhyAreWe">
          <h2>Чому варто звертатися до нас?</h2>
          <div className="WrapWhyAreWe">
            <div className="WhyBlock">
              <img src={HonestAssessment} alt="" />
              <h3>Чесна оцінка</h3>
              <p>
                Гарантуємо Вам чесну оцінку Вашого каталізатора.
                Ми враховуємо всі його характеристики, щоб запропонувати
                найкращу ціну
              </p>
            </div>
            <div className="WhyBlock">
              <img src={Reliability} alt="" />
              <h3>Надійність</h3>
              <p>
                Ми є перевіреним партнером у цій сфері. Ми пропонуємо надійні
                транзакції, забезпечуючи безпеку ваших даних та професіоналізм
              </p>
            </div>
            <div className="WhyBlock">
              <img src={EnvironmentalImpact} alt="" />
              <h3>Екологічний вплив</h3>
              <p>
                Продаючи нам стару деталь, Ви берете участь у процесі утилізації
                та переробки матеріалів. Це сприяє збереженню природи та її
                захисту
              </p>
            </div>
            <div className="WhyBlock">
              <img src={SimpleProcedure} alt="" />
              <h3>Проста процедура</h3>
              <p>
                Наш сайт надає швидку процедуру продажу. Ви можете відправити
                нам інформацію про свій каталізатор і отримати оцінку всього
                за кілька хвилин
              </p>
            </div>
            <div className="WhyBlock">
              <img src={FriendlyApproach} alt="" />
              <h3>Дружній підхід</h3>
              <p>
                Ми складаємось з досвідчених людей, готових допомогти Вам
                на кожному кроці. Ми цінуємо клієнтів і намагаємося надати
                найкраще обслуговування
              </p>
            </div>
          </div>
        </section>
        <section className="AboutUs">
          <div className="Conteiner">
            <div className="ImgWrap">
              <img src={ImgFotoAboutUs} alt="" />
            </div>
            <div className="TextWrapAboutUs">
              <h3>Про нас</h3>
              <p>
                Наша команда складається з досвідчених і відданих професіоналів,
                які працюють з ентузіазмом і ефективністю. Ми пишаємося
                своїми досягненнями в цій галузі та прагнемо стати лідерами
                в галузі скупки та переробки каталізаторів. Ми встановили міцні
                партнерські відносини з автосервісами, автомобільними дилерами
                та іншими підприємствами, що дозволяє нам отримувати постійний
                потік каталізаторів Навколишнє середовище є одним із наших
                основних пріоритетів! Ми співпрацюємо з акредитованими
                переробними підприємствами, гарантуючи, що матеріали будуть
                оброблені та використані відповідно до екологічних стандартів.
              </p>
              <button>
                Читати більше <img src={VectorRight} alt="" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
