import './style/PriseCatalizator.css';

const PriseCatalizator = () => {
  return (
    <>
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
    </>
  );
};

export default PriseCatalizator;
