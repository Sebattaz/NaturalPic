import { useContext } from "react";
import { PicContext } from "../context/PicContext";

const Gallery = () => {
  const { photos } = useContext(PicContext);
  return (
  <div className="gallery grid-columns-5 p-3">
    {console.log({photos})}
  </div>
  )
};
export default Gallery;
