import { useContext } from "react";
import { PicContext } from "../context/PicContext";


const Favorites = () => {
  const {idLike} = useContext(PicContext)

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">

        {
          idLike.map(fav=>(
            <div key={fav.id}>
              <div className="container position-relative">
                <img className=''src={fav.src} alt={fav.alt} />
                  <div className='photoTexto'>
                    <p className='photoAlt'>{fav.alt}</p>
                  </div>  
              </div>

          </div>
          ))
        }

      </div>
    </div>
  );
};
export default Favorites;
