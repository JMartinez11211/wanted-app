

export default function Card(props){
  return(
    <div className="card">
  <a href={props.person.url}>
    <img src= {props.person.images[0].original} className="card-img-top"/>
  </a>
  <div className="card-body">
    <h4>{props.person.subjects[0]}</h4>
  <p>{props.person.title}</p>
  </div>
    </div>
  )
}

