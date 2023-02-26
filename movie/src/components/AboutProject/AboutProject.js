import './AboutProject.css';
import '../scale/scale.css';
import TitleBlock from '../Title-block/TitleBlock';

function AboutProject(props) {
  return (
    <div className="AboutProject" itemID="AboutProject">
      <TitleBlock titleText="О проекте" />
      <ul className="AboutProject__text-box">
        <li className="AboutProject__text-box_item">
          <p className="AboutProject__text-box_item-title">Дипломный проект включал 5 этапов</p>
          <p className="AboutProject__text-box_item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="AboutProject__text-box_item">
          <p className="AboutProject__text-box_item-title">На выполнение диплома ушло 5 недель</p>
          <p className="AboutProject__text-box_item-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="scale">
        <div className="scale__part scale__part_back">
          <div className="scale__week scale__week_back">1 неделя</div>
          <div className="scale__signature scale__signature_back">Back-end</div>
        </div>
        <div className="scale__part scale__part_front">
          <div className="scale__week scale__week_front">4 неделя</div>
          <div className="scale__signature scale__signature_front">Front-end</div>
        </div>
      </div>
    </div>
  )
}

export default AboutProject;