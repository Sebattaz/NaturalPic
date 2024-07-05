import { createContext, useState } from "react";
import dataJson from '/public/photos.json'
export const PicContext = createContext();

const url_photos = dataJson.photos

export const PicProvider = ({children})=>{

    const [photos, setPhotos] = useState(url_photos)

    

    return(
        <PicContext.Provider value={{photos}}>
            {children}
        </PicContext.Provider> 

    )

};
