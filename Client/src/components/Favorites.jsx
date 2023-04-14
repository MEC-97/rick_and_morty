import { useSelector } from "react-redux"
import Card from "./Card";
import style from "../styles/Favorites.module.css";

const Favorites = () => {
   const favorites = useSelector((state)=>state.myFavorites);

    return (
      <div className={style.cards_container}>
        {favorites.map(({id,name,status,species,gender,origin,image}) => {
            return (
                <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin.name}
                image={image}
               
              />
            )
        })}
      
      </div>
    )
}

export default Favorites; 