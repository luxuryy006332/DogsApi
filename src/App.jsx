import React from 'react';
import { useEffect } from 'react';
import './App.css';
import './index.css';
import ImageDog from './components/ImageDog';
import Basket from './components/Basket';

function App() {


  const [items, setItems] = React.useState([]);
  const [favoriteItem, setFavoriveItem] = React.useState(false);

  const [cartFavorite, setCartFavorite] = React.useState([])

  const openBasket = () => {
    setFavoriveItem(true)
  }

  const closeBasket = () => {
    setFavoriveItem(false)
  }

  const addToFavorite = (url) => {
    setCartFavorite([...cartFavorite, url])
  }

  const deleteFromBasket = (url) => {
    setCartFavorite((prev) => prev.filter(urlImage => urlImage !== url ))
  }

  const deleteDog = (url) => {
    setItems((prev) => prev.filter(urlImage => urlImage !== url ))
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/15')
      .then(res => res.json())
      .then(json => setItems(json.message))
  }, [])


  return (
    <div className="App">

      {
        favoriteItem ? <Basket closeBasket={closeBasket} cartFavorite={cartFavorite} deleteFromBasket={deleteFromBasket} /> : <div >
        <div className='wrapper'>
          <h1>DOGS api</h1>

          <div>
            <div className="card-box">
              {
                items.map((item) => (
                  <ImageDog item={item} key={item} addToFavorite={addToFavorite} deleteDog={deleteDog} />
                ))

              }
              <button className='basket' onClick={openBasket}>
                Корзина
              </button>
            </div>

          </div>
        </div>
      </div>
      }

      

    </div>
  );
}

export default App;
