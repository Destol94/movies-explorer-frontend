import TitleBlock from '../Title-block/TitleBlock';
import MyPhoto from '../../images/myPhoto.jpg';
import './AboutMe.css';
import { Link } from 'react-router-dom';

function AboutMe(props) {
  return (
    <div className="AboutMe">
      <TitleBlock titleText="Студент" />
      <div className="AboutMe__content">
        <div className="AboutMe__info">
          <div className="AboutMe__text">
            <h2 className="AboutMe__header header-text">Денис</h2>
            <p className="AboutMe__short-information">Фронтенд-разработчик, 28 лет</p>
            <p className="AboutMe__description">Я живу в Красноярске, учусь на курсах Яндекс Практикума. У меня есть жена
              и сын. Я люблю слушать музыку, стремлюсь становиться лучше. Недавно начал кодить. После того, как пройду курс
               по веб-разработке, начну искать работу по новой специальности.
            </p>
          </div>
          <Link to="https://github.com/Destol94" target={'_blank'} className="AboutMe__link link" >Github</Link>
        </div>
        <img src={MyPhoto} alt="Фото автора сайта" className="AboutMe__photo" />
      </div>

    </div>
  )
}
export default AboutMe;