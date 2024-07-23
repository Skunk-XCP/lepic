import React from "react";

const SenseiProfile = ({ name, image, story }) => {
   return (
      <div className="senseiProfile">
         <h3>{name}</h3>
         <img src={image} alt={name} />
         {story.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
         ))}
      </div>
   );
};

export default SenseiProfile;
