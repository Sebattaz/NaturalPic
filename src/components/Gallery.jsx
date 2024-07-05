import { useContext } from "react";
import { PicContext } from "../context/PicContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos } = useContext(PicContext);

  return (
  <div className="gallery grid-columns-4 p-3">
    
      {
        
        photos.map(PD=>(
          <div key={PD.id}>
              <div className="container">
                <img src={PD.src.tiny} alt={PD.alt} />
                  <IconHeart filled={PD.liked}/>
                  <div className='photoTexto'>
                    <p className='photoAlt'>{PD.alt}</p>
                  </div>  
              </div>

          </div>
        ))
      }

  </div>
  )
};
export default Gallery;
