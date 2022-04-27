import style from './Card.module.scss'
const Card = ({ movie }) => {
    const { Title, Year, Type, Poster } = movie
  return (
    <div className ={style.container}>
        <img src ={Poster} alt={Title} />
        <h2>{Title}<span>{Type}</span></h2>
        <p>{Year}</p>
    </div>
  )
}

export default Card