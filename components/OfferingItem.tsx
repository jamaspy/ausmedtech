import React from "react";
import Image from "next/image";
interface OfferingItemProps {
  title: string;
  description: string;
  image: string;
}

const OfferingItem = ({ title, description, image }: OfferingItemProps) => {
  return (
    <div className="border shadow rounded-lg p-4 bg-white bg-opacity-90">
      <div className="rounded-full w-16 h-16 shadow relative mx-auto mb-2">
        <Image
          src={image}
          fill
          alt="rounded heading"
          className="rounded-full"
        />
      </div>

      <p className="font-semibold text-xl mb-2 text-center">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default OfferingItem;
