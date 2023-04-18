import React from "react";

const Basket = ({ closeBasket, cartFavorite, deleteFromBasket }) => {
    return (
        <div>
            <div className="btn-box">
                <button className='close' onClick={closeBasket}>
                    закрыть
                </button>
            </div>
            <div className="basket-box">





                {
                    cartFavorite.map((item) => (
                        <div className="card">
                            <img src={item} alt="dog" />
                            <button className="favorites" onClick={() => deleteFromBasket(item) }>Delete dog</button>
                        </div>
                    ))
                }




            </div>
        </div>
    );
}

export default Basket;