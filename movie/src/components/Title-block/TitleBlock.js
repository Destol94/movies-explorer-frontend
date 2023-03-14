import './TitleBlock.css';

function TitleBlock(props) {
  return (
    <>
      <h3 className="title-text">{props.titleText}</h3>
      <div className="title-line"></div>
    </>
  )
}

export default TitleBlock;