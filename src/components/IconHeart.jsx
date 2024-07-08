import './IconHeart.css'
import { useContext, useState } from 'react';
import { PicContext } from '../context/PicContext';


const IconHeart = ({ filled, idL, srcL, altL }) => {

  const { idLike, setIdLike } = useContext(PicContext)
  const [like, setLike] = useState(filled)
   
    const clickLike=()=>{
        const newLike={
        id:idL,
        src:srcL,
        alt:altL
      }    
        setIdLike([...idLike, newLike])
      const click = !like;
      setLike(click)
    }
  return (
    <>
    
    <svg
      
      className="icon-heart"
      width="40px"
      viewBox="0 0 24 24"
      onClick={clickLike}
    >
      <path
        fill={like ? "red" : "white"}
        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
        
      />
      
    </svg>
    
    </>
  );
};
export default IconHeart;
