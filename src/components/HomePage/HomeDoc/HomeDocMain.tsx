import React from "react";
import "./HomeDoc.css";

const HomeDocMain = () => {
  const doctors = [
    {
      id: 1,
      name: "Jen Doe",
      designation: "Care Taker",
      img: "https://wordpress.zozothemes.com/petzorg/wp-content/uploads/sites/30/2024/09/team-img-10.webp",
    },
    {
      id: 2,
      name: "Jolie",
      designation: "Care Taker",
      img: "https://wordpress.zozothemes.com/petzorg/wp-content/uploads/sites/30/2024/09/team-img-10.webp",
    },
    {
      id: 3,
      name: "Jenny",
      designation: "Care Taker",
      img: "https://wordpress.zozothemes.com/petzorg/wp-content/uploads/sites/30/2024/09/team-img-10.webp",
    },
  ];
  return (
    <div className="homeDocMain-container">
      {doctors.map((x) => (
        <div className="homeDocMain-content" key={x.id}>
          <img src={x.img} alt={x.name} />
          <div className="homeDocMain-item">
            <h3>{x.name}</h3>
            <strong>{x.designation}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeDocMain;
