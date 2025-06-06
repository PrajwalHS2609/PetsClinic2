import React from "react";
import "./HomeService.css";
import Link from "next/link";
import Image from "next/image";
import dog from "@/Images/dog.png";
import cat from "@/Images/cat.png";
import bird from "@/Images/bird.png";
import service1 from "@/Images/HomeService/service1.png";
import service2 from "@/Images/HomeService/service2.png";
import service3 from "@/Images/HomeService/service3.png";

const HomeServiceMain = () => {
  const service = [
    {
      id: 1,
      title: "Dog's Grooming",
      img: dog,
      description:
        "Pamper your pup with expert care! 🐾 From shiny coats to trimmed nails, our dog grooming services keep your furry friend looking and feeling their best.",
      banner: service1,
      link: "/",
    },
    {
      id: 2,
      title: "Boarding",
      img: cat,
      description:
        "A home away from home for your furry friends! 🐾 Our pet boarding services ensure comfort, care, and companionship while you're away.",
      banner: service2,
      link: "",
    },
    {
      id: 3,
      title: "Training",
      img: bird,
      description:
        "Turn wagging tails into well-behaved companions! 🐾 Our pet training services build trust, obedience, and happy memories.",
      banner: service3,
      link: "",
    },
  ];
  return (
    <div className="homeServiceMain-container">
      {service.map((x) => (
        <Link href={x.link} key={x.id}>
          <div className="homeServiceMain-wrapper">
            <div className="homeServiceMain-content">
              <Image src={x.img} alt={x.title} />
              <h3>{x.title}</h3>
              <p>{x.description} </p>
            </div>
            <div className="homeServiceMain-content">
              <Image src={x.banner} alt={x.title} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeServiceMain;
