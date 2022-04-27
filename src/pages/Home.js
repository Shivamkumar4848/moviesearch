import { useState } from 'react'
import Styles from './Home.module.scss'
import Card from '../components/Card'

const Home = () => {

  const [inputText, setInputText] = useState('')
  const [items, setItems] = useState([])

  const handleInputChange = async (text) => {
    setInputText(text)
    const searchItems = await getItems(text)
    setItems(searchItems ? searchItems : [])
  }

  const getItems = async (text) => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f0ac7202&s=${text}`)
    const data = await response.json()
    return data.Search
  }


  return (
    <div className={Styles.container}>
      <input type="text" placeholder='Search for movie/webseries' value = {inputText} onChange={e => handleInputChange(e.target.value)} />
      { items && <section>
        { items.map(item => <Card movie={item} key={item.imdbID} />)}
      </section> }
    </div>
  )
}


export default Home