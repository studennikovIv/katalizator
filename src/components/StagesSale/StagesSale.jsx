import VectorRight from '../../assets/icons/VectorRight.svg';
import './style/StagesSale.css';
const StagesSale = () => {
  return (
    <>
      <section className="StagesSale">
        <h2>Етапи продажу деталі</h2>
        <div className="ConteinerStagesSale">
          <div className="LeftContainer">
            <div className="Box">
              <h3>Оцінювання та подання заявки</h3>
              <p>
                Першим кроком буде оцінка вашого автомобільного каталізатора.
                Ви заповнюєте заявку, надаючи інформацію про марку, модель і
                стан. Також ми можемо просити фотографії для більш точної оцінки
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
                характеристикам, Вам виплачується сума, запропонована компанією.
                Виплата може здійснюватися різними способами: через банк або
                інші доступні методи
              </p>
              <button>
                Вказати виплату <img src={VectorRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StagesSale;
