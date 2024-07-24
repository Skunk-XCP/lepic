import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import photo1 from "../../assets/images/image1.png";
import photo2 from "../../assets/images/image2.png";
import photo3 from "../../assets/images/image3.png";
import photo4 from "../../assets/images/image4.png";
import photo5 from "../../assets/images/image5.png";
import photo6 from "../../assets/images/image6.png";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const PhotoCarousel = () => {
   return (
      <Carousel
         showArrows={true}
         autoPlay={true}
         infiniteLoop={true}
         showThumbs={false}
         showStatus={false}
         renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
               <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                     position: "absolute",
                     top: "50%",
                     left: "0px",
                     transform: "translateY(-50%)",
                     zIndex: 2,
                     backgroundColor: "transparent",
                     border: "none",
                     color: "#bbd0ff",
                     fontSize: "30px",
                     cursor: "pointer",
                  }}
               >
                  &#10094;
               </button>
            )
         }
         renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
               <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                     position: "absolute",
                     top: "50%",
                     right: "0px",
                     transform: "translateY(-50%)",
                     zIndex: 2,
                     backgroundColor: "transparent",
                     border: "none",
                     color: "#bbd0ff",
                     fontSize: "24px",
                     cursor: "pointer",
                  }}
               >
                  &#10095;
               </button>
            )
         }
         renderIndicator={(onClickHandler, isSelected, index, label) => {
            const style = isSelected
               ? {
                    backgroundColor: "#979dac",
                    margin: "-13px 8px",
                    width: "12px",
                    height: "12px",
                    position: "relative",
                 }
               : {
                    backgroundColor: "#fff",
                    margin: "-13px 8px",
                    width: "12px",
                    height: "12px",
                 };
            return (
               <li
                  style={{
                     ...style,
                     display: "inline-block",
                     border: "1px solid #bbd0ff",
                     borderRadius: "50%",
                  }}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
               />
            );
         }}
      >
         {photos.map((photo, index) => (
            <div key={index} className="carouselSlide">
               <img src={photo} alt={`Slide ${index}`} />
            </div>
         ))}
      </Carousel>
   );
};

export default PhotoCarousel;
