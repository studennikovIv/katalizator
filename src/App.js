// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="Conteiner">
        <div className="Hero">
          <header>
            <img />
            <ul>
              <li>Меню</li>
              <li>Причини</li>
              <li>Про Нас</li>
              <li>Відгуки</li>
            </ul>
            <div>
              <p>+38 099 765 4321</p>
              <p>UA</p>
            </div>
          </header>
          <div className="TopTextConteiner">
            <h1>Перетворіть старий каталізатор у реальний кеш!</h1>
            <p>
              Отримайте замість старої деталі гроші вже зараз! Продайте нам
              свій каталізатор і отримайте гроші. Дійте і заробіть вигоду!
            </p>
          </div>
          <div className="ButtonConteiner">
            <button>Продати каталізатор</button>
            <button>Задати питання</button>
          </div>
          <div className="BottomTextConteiner">
            <div className="Box">
              <h3>10+ років досвіду</h3>
              <p>
                За стільки часу ми накопичили великі знання навички, що дає нам
                змогу ефективно розв'язувати складні завдання
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
    </>
  );
}

export default App;
