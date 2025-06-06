import Link from "next/link";
import Button from "../Button/Button";
import "./Service.css";
import grooming from "@/Images/ServiceImg/dogGrooming.png";
import care from "@/Images/ServiceImg/veterinaryCare.png";
import training from "@/Images/ServiceImg/training.png";
import food from "@/Images/ServiceImg/HealthFood.png";
import walk from "@/Images/ServiceImg/DogWalker.png";

import boarding from "@/Images/ServiceImg/boarding.png";
import Image from "next/image";

export default function ServiceCard() {
  const serviceCard = [
    {
      id: 1,
      title: "Dog's Grooming",
      description:
        "Pamper your pup with expert care! 🐾 From shiny coats to trimmed nails, our dog grooming services keep your furry friend looking and feeling their best.",
      link: "/pets-grooming-in-bangalore",
      img: grooming,
    },
    {
      id: 2,
      title: "Training",
      description:
        "Turn wagging tails into well-behaved companions! 🐾 Our pet training services build trust, obedience, and happy memories.",
      link: "/pets-training-in-bangalore",
      img: training,
    },
    {
      id: 3,
      title: "Boarding",
      description:
        "A home away from home for your furry friends! 🐾 Our pet boarding services ensure comfort, care, and companionship while you're away.",
      link: "/pets-boarding-in-bangalore",
      img: boarding,
    },
    {
      id: 4,
      title: "Veterinary Care",
      description:
        "Compassionate veterinary care for healthier, happier pets! 🐾 From check-ups to treatments, we’re here for your furry family.",
      link: "/pets-clinic-in-bangalore",
      img: care,
    },
    {
      id: 5,
      title: "Healthy Food",
      description:
        "Healthy food for happy pets! 🐾 Made with real ingredients to support energy, immunity, and a tail-wagging life",
      link: "/pets-food-in-bangalore",
      img: food,
    },
    {
      id: 6,
      title: "Dog Walker",
      description:
        "Happy paws, happy days! 🐕‍🦺 Trust us to give your dog the exercise, love, and adventure they need — one tail-wagging walk at a time.",
      link: "/dog-walkers-in-bangalore",
      img: walk,
    },
  ];
  return (
    <div className="serviceCard-container">
      {serviceCard.map((x) => (
        <div className="serviceCard-content" key={x.id}>
          <div className="serviceCard-wrapper">
            <div className="serviceCard-cover1"></div>
            <div className="serviceCard-cover2">
              <Button text="Read More" link={x.link} />
            </div>
            <Image src={x.img} alt={x.title} />
          </div>
          <div className="serviceCard-wrapper">
            <Link href="/">
              {" "}
              <h3>{x.title}</h3>
            </Link>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
