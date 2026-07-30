
import "./card.css"

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div className="card">
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident neque ratione numquam aperiam quod, magnam porro fugiat iusto repellendus.</p>
      </div>
    </div>
  )
}

export default Card