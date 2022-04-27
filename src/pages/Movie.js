import { useParams } from 'react-router-dom'

const Movie = () => {

    const { id } = useParams()

  return (
    <div>Movie ID: {id}</div>
  )
}

export default Movie
