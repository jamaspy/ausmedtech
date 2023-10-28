import React from "react";
import OfferingItem from "../OfferingItem";

const data = [
  {
    title: "Community",
    description:
      "Join a network of forward-thinking individuals and organizations dedicated to making significant strides in medical technology. Engage in meaningful dialogues, share insights, and build lasting partnerships.",
    image: "/office.jpg",
  },
  {
    title: "Support",
    description:
      "Navigate the regulatory, policy, and market challenges with a supportive community by your side. Leverage collective knowledge and resources to overcome hurdles and accelerate your ventures.",
    image: "/office.jpg",
  },
  {
    title: "Specialized Industry Knowledge",
    description:
      " Stay updated with the latest industry trends, regulatory changes, and technological advancements through our curated resources, workshops, and expert-led sessions.",
    image: "/office.jpg",
  },
  {
    title: "Networking Events",
    description:
      "Our events are a cornerstone of building strong industry connections. Attend and engage in our networking events to interact with the crème de la crème of the medtech sector, fostering both personal and professional growth",
    image: "/office.jpg",
  },
];

const Offering = () => {
  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 py-36 md:py-24 bg-gradient-to-r from-mint to-navy"
      style={{ clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0% 92%)" }}
    >
      {data.map((item) => (
        <OfferingItem
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Offering;
