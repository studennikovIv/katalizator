import Mers from '../../assets/img/Mercedes.png';
import Porsh from '../../assets/img/Porshe.png';
import Honda from '../../assets/img/Honda.png';
import Toyota from '../../assets/img/Toyota.png';
import Huydai from '../../assets/img/Hyundai.png';
import BMV from '../../assets/img/BMW.png';
import './style/AvtoImg.css';
const AvtoImg = () => {
  return (
    <>
      {' '}
      <section className="avtoImg">
        <ul>
          <li>
            <img src={Mers} alt="" />
          </li>
          <li>
            <img src={Porsh} alt="" />
          </li>
          <li>
            <img src={Honda} alt="" />
          </li>
          <li>
            <img src={Toyota} alt="" />
          </li>
          <li>
            <img src={Huydai} alt="" />
          </li>
          <li>
            <img src={BMV} alt="" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default AvtoImg;
