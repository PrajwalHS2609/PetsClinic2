"use client";
import { useState } from "react";
import "./HomeFaq.css";

export default function HomeFaqAcc() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "What are your operating hours?",
      content:
        "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 3:00 PM. We are closed on Sundays and public holidays.",
    },
    {
      title: "Do you offer emergency services?",
      content:
        "we provide emergency services during our regular business hours. For after-hours emergencies, please contact our partner emergency clinic at (emergency clinic contact information).",
    },
    {
      title: "What types of pets do you treat?",
      content:
        "We treat a wide variety of pets including dogs, cats, rabbits, and small mammals such as guinea pigs and hamsters. Please contact us if you have a unique pet and we will let you know if we can accommodate their needs.",
    },
    {
      title: "Do you provide boarding services?",
      content:
        "we offer boarding services for both cats and dogs. Our facilities are equipped with comfortable kennels and exercise areas. Please call ahead to check availability, especially during peak holiday seasons.",
    },
    {
      title: "How can I prepare my pet for their visit?",
      content:
        "For routine visits, bring your pet's medical history and vaccination records. Make sure they are on a leash or in a carrier for their safety. For anxious pets, consider bringing a favorite toy or blanket to help them feel more at ease.",
    },
  ];

  return (
    <div className="accordion-container">
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-header ${
              openIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <h5 className="accordion-title">{faq.title}</h5>
            <span className="accordion-icon">
              {openIndex === index ? "-" : "+"}
            </span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{faq.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
