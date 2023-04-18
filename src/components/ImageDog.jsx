import React from "react";

const ImageDog = (props) => {
    return (
        <div className="item_dog">
            <div className="card">
                <img src={props.item} alt="dog" />
                <button className="favorites" onClick={() => props.addToFavorite(props.item)}>Добавить в избранное</button>
                <button className="favoriteDelete" onClick={() => props.deleteDog(props.item)}>Delete</button>

            </div>
        </div>
    )
}

export default ImageDog;