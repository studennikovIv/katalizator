import './style/WhyAreWe.css';
import EnvironmentalImpact from '../../assets/img/EnvironmentalImpact.png';
import FriendlyApproach from '../../assets/img/FriendlyApproach.png';
import HonestAssessment from '../../assets/img/HonestAssessment.png';
import Reliability from '../../assets/img/Reliability.png';
import SimpleProcedure from '../../assets/img/SimpleProcedure.png';
const WhyAreWe = () => {
  return (
    <>
      <section className="WhyAreWe">
        <h2>Чому варто звертатися до нас?</h2>
        <div className="WrapWhyAreWe">
          <div className="WhyBlock">
            <img src={HonestAssessment} alt="" />
            <h3>Чесна оцінка</h3>
            <p>
              Гарантуємо Вам чесну оцінку Вашого каталізатора. Ми враховуємо всі
              його характеристики, щоб запропонувати найкращу ціну
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
              Наш сайт надає швидку процедуру продажу. Ви можете відправити нам
              інформацію про свій каталізатор і отримати оцінку всього за кілька
              хвилин
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
    </>
  );
};

export default WhyAreWe;
