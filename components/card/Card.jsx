import Image from "next/image";


function Card({ image, title, name, company }) {
  return (
    <div className="para-card rounded-2xl shadow-xl lg:flex flex-wrap my-10 border-[1px] max-w-2xl mx-auto">
      <h4 className="text-medium font-lg text-gray-800 text-xl py-8">{title}</h4>
      <hr className="w-full"/>
      <div className="flex justify-between pt-8 pb-4 w-full items-center">
        <div>
          <h2 className="font- text-xl">{name}</h2>
          <p className="text-gray-500">{company}</p>
        </div>
        <Image src={image} width={50} height={50} className="rounded-full" />
      </div>
    </div>
  );
}

export default Card;
