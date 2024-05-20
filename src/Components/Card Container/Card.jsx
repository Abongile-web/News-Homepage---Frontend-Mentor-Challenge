import './Card.css'


const Card = (props) => {

    const number = props.number;
    const title = props.title;
    const text = props.text; 
    const image = props.image;

  return (
    <div className='card'>
        <img src={image}></img>
        <div className='text-block'>
            <h1>{number}</h1>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card