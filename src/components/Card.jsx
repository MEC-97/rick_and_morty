import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/action";
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, addFavorite, removeFavorite, myFavorites}) {

  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    if(isFav){
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({id, name, status, species, gender, origin, image, onClose, addFavorite, removeFavorite, })
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className={style.card}>
      <div className={style.head_card}>
      {isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}
      <button onClick={() => onClose(id)}>X</button>
      </div>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        </Link>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
        <img src={image} alt={name} />
      
    </div>
  );
}

const mapDispatchToProp = (dispatch) => {
  return {
    addFavorite: (character) => {dispatch(addFavorite(character))},
    removeFavorite: (id) => {dispatch(removeFavorite(id))},
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Card)