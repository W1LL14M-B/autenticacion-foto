import { useState } from 'react';

import photo1 from "../assets/images/photo1.jpg"
import photo2 from "../assets/images/photo2.jpg"
import photo3 from "../assets/images/photo3.jpg"
import photo4 from "../assets/images/photo4.jpg"
import photo5 from "../assets/images/photo5.jpg"
import photo6 from "../assets/images/photo6.jpg"
import photo7 from "../assets/images/photo7.jpg"
import photo8 from "../assets/images/photo8.jpg"
import photo9 from "../assets/images/photo9.jpg"




export const Gallery = () => {


  const [photos, setPhotos] = useState([
    { id: 1, url: photo1, reactions: 0 },
    { id: 2, url: photo2, reactions: 0 },
    { id: 3, url: photo3, reactions: 0 },
    { id: 4, url: photo4, reactions: 0 },
    { id: 5, url: photo5, reactions: 0 },
    { id: 6, url: photo6, reactions: 0 },
    { id: 7, url: photo7, reactions: 0 },
    { id: 8, url: photo8, reactions: 0 },
    { id: 9, url: photo9, reactions: 0 },
  
  

  ]);



  const addReaction = (id) => {
    setPhotos(photos.map(photo => 
      photo.id === id ? { ...photo, reactions: photo.reactions + 1 } : photo
    ));
  };

  return (
    <div className="container">
      <div className="row">
        {photos.map((photo) => (
          <div key={photo.id} className="col-12 col-md-4 mb-4">
            <div className="card">
              <img src={photo.url} className="card-img-top" alt={`Photo ${photo.id}`} />
              <div className="card-body">
                <p className="card-text">Reactions: {photo.reactions}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => addReaction(photo.id)}
                >
                  React
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => navigator.clipboard.writeText(window.location.href + `#photo-${photo.id}`)}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

  
/*   return (
    <div className="container">
      <div className="row">
   
        {photos.map((photo) => (
          <div key={photo.id} className="col-12 col-md-4 mb-4">
            <div className="card">
              <img src={photo.url} className="card-img-top" alt={`Photo ${photo.id}`} />
              <div className="card-body">
                <p className="card-text">Reactions: {photo.reactions}</p>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}; */
