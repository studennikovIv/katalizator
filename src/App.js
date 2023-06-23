import logo from './assets/img/logo.png';
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
              <li>UA</li>
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
              <div className="Box">
                <h3>10+ років досвіду</h3>
                <p>
                  За стільки часу ми накопичили великі знання навички, що дає
                  нам змогу ефективно розв'язувати складні завдання
                </p>
              </div>
              <div className="Box">
                <h3>5+ спеціалістів</h3>
                <p>
                  Наші люди володіють глибокими знаннями в галузі інженерії, і
                  застосовують свої навички для розробки оптимізації процесів.
                </p>
              </div>
              <div className="Box">
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
    </>
  );
}

export default App;
