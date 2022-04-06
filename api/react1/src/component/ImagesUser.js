import React, {useReducer} from "react";
import {FaThumbsDown, FaThumbsUp, FaAngleDoubleRight} from "react-icons/fa"
import {images} from "../static";
import {likesReducer} from "./Reducer";

const reducer = likesReducer; 

const initialState = images.map((image) => ({
  id: image.id,
  title: image.title,
  src: image.src,
  likes: image.likes,
  dislikes: image.dislikes,
  description: image.description,
  status: null,
}));

export default function UserImages () {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const { likes, dislikes, id, status } = state

  const handleClickLike = (imageId) => (
      dispatch({
        type: 'HANDLE_LIKE',
        payload:{ id: imageId },
      })
  );
      
  const handleClickDislike = (imageId) => (
    dispatch({
      type: 'HANDLE_DISLIKE',
      payload:{ id: imageId },
    })
);

  const getImageInfoStatus = (imageId) => {
    const imageState = state.find((s) => (s.id === imageId));
    return {
      imageStatus: imageState.status,
      imageLikes: imageState.likes,
      imageDislikes: imageState.dislikes,
    };
  };

  //crear funcion onClose que envie el Array actualizado con los likes y dislikes al backend
  //console.log(state);

  return (
    <ul>
      <div className="u-imagen">
        {initialState.map((img) => {
        const { imageStatus, imageLikes, imageDislikes } = getImageInfoStatus(img.id);
        return (
          <div key={img.id} className="img-container">
            <li>
              <div className="image-title"><FaAngleDoubleRight className="angleRight"/>{img.title}</div>
              <div>
                <img src={img.src} alt={img.title} className="images"/>
              </div>
              <div>
                <p className="description">{img.description}</p>
              </div>
              <div className="img-btn">
                <button 
                  key={id} 
                  type="button"
                  className={imageStatus ==='like'? 'btn active' : 'btn'} 
                  onClick={()=> handleClickLike(img.id, imageStatus)}
                >
                  <FaThumbsUp/>
                  <span className="btn-text">{imageLikes}</span>
                </button>
                <button 
                  key={id}
                  type="button"
                  className={imageStatus ==='dislike'? 'btn active' : 'btn'} 
                  onClick={()=> handleClickDislike(img.id, imageStatus)}
                >
                  <FaThumbsDown/>
                  <span className="btn-text">{imageDislikes}</span>
                </button>
              </div>                      
            </li>
          </div>      
        )})}  
      </div>
    </ul>
  );
}