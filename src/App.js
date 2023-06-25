import logo from './assets/img/logo.png';
import IconLinkToBottom from './assets/icons/LinkToBottom.svg';
import VectorRight from './assets/icons/VectorRight.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="HeroBg">
        <div className="Conteiner">
          <header className="Header">
            <img src={logo} />
            <ul className="NavList">
              <li>
                <a href="#"> Меню</a>
              </li>
              <li>/</li>
              <li>
                <a href="#"> Причини </a>
              </li>
              <li>/</li>
              <li>
                <a href="#">Про Нас</a>
              </li>
              <li>/</li>
              <li>
                <a href="#">Відгуки</a>
              </li>
            </ul>
            <ul className="HeaderPhone">
              <li>
                <a href="tel:+38 099 765 4321">+38 099 765 4321</a>
              </li>
              <li>
                <p>Ua</p>
                <img className="UaIcon" src={IconLinkToBottom} alt="" s />
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
                  Заявка <img src={VectorRight} />
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
                  Заявка <img src={VectorRight} />
                </button>
              </div>
            </div>
            <div className="CenterConteiner"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
