import React from "react";
import rating from "@/Images/rating.png";
import Image from "next/image";
interface TestimonialProps {
  image: string;
  description: string;
  name: string;
  place: string;
}
const HomeTestimonialCard: React.FC<TestimonialProps> = (props) => {
  return (
    <div className="homeTestimonialCard-container">
      <div className="homeTestimonialCard-content">
        <Image src={props.image} alt="rating" width={450} height={450}/>
      </div>
      <div className="homeTestimonialCard-content">
        <div className="homeTestimonialCard-rating">
          <Image src={rating} alt="rating" />
        </div>
        <p>{props.description}</p>
        <h4>{props.name}</h4>
        <h6>{props.place}</h6>
      </div>
    </div>
  );
};
export default HomeTestimonialCard;
