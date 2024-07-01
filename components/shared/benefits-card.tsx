import Image from "next/image";
import React from "react";

interface BenefitsProps {
  id: number;
  title: string;
  img: string;
  description: string;
}

const BenefitsCard = ({ benefit }: { benefit: BenefitsProps }) => {

const {id, title, img, description} =benefit

  return (
    <div className="bg-white shadow-md p-5 w-[400px]">
        <Image 
        src={img}
        alt="icon"
        width={40}
        height={40}
        />
        <h3 className="my-3 capitalize text-lg text-textColor font-bold">{title}</h3>
        <p className="text-pColor">{description}</p>
    </div>
  )
  
};

export default BenefitsCard;
