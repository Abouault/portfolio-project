import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img
          src="https://randomuser.me/api/portraits/women/30.jpg"
          alt="Mary Kelly"
        />
        <div className="myCarousel">
          <h3>Mary Kelly</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deleniti ducimus accusamus excepturi cum et nisi sapiente quisquam
            tenetur ratione.
          </p>
        </div>
      </>
      <>
        <img
          src="https://randomuser.me/api/portraits/women/34.jpg"
          alt="Maureen Wagner"
        />
        <div className="myCarousel">
          <h3>Maureen Wagner</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deleniti ducimus accusamus excepturi cum et nisi sapiente quisquam
            tenetur ratione.
          </p>
        </div>
      </>
      <>
        <img
          src="https://randomuser.me/api/portraits/men/44.jpg"
          alt="Keith Kennedy"
        />
        <div className="myCarousel">
          <h3>Keith Kennedy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deleniti ducimus accusamus excepturi cum et nisi sapiente quisquam
            tenetur ratione.
          </p>
        </div>
      </>
      <>
        <img
          src="https://randomuser.me/api/portraits/women/80.jpg"
          alt="Myrtle Mcdonalid"
        />
        <div className="myCarousel">
          <h3>Myrtle Mcdonalid</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deleniti ducimus accusamus excepturi cum et nisi sapiente quisquam
            tenetur ratione.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
