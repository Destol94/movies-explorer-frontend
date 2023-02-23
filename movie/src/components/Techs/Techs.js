import TitleBlock from '../Title-block/TitleBlock';
import './Techs.css';
import './__text/Techs__text.css';
import './__header/Techs__header.css';
import './__list/Techs__list.css';
import './__item/Techs__item.css';

function Techs() {
  return (
    <div className="Techs">
      <TitleBlock titleText="Технологии" />
      <h2 className="header-text Techs__header">7 технологий</h2>
      <p className="Techs__text text_size-small">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="Techs__list">
        <li className="Techs__item">HTML</li>
        <li className="Techs__item">CSS</li>
        <li className="Techs__item">JS</li>
        <li className="Techs__item">React</li>
        <li className="Techs__item">Git</li>
        <li className="Techs__item">Express.js</li>
        <li className="Techs__item">MongoDB</li>
      </ul>
    </div>

  )
}
export default Techs;