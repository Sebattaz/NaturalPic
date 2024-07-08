import { createContext, useEffect, useState } from "react";
import dataJson from '/public/photos.json'
export const PicContext = createContext();

const url_photos = dataJson.photos

export const PicProvider = ({children})=>{

    
    const [photos, setPhotos] = useState(url_photos)
    const [idLike, setIdLike] = useState([])
    
    
    
    useEffect(() => {
      //setFavoritos(idLike)
      console.log(idLike)
      console.log(photos)
      
       //console.log(favoritos)
    }, [idLike])
    
   
    
    

    return(
        <PicContext.Provider value={{photos, idLike, setIdLike}}>
            {children}
        </PicContext.Provider> 

    )

};
