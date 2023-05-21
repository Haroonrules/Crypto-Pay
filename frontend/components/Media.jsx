import Image from "next/image";
import MediaImg from "../assets/media-img.jpg";
const Media = () => {
  return (
    <div className="">
      <h2 className="text-white ml-28 mb-10 text-2xl">Our Features</h2>
      <section className="flex mx-28 justify-around">
        <div className="border-t-2 border-l-2 border-b-2 border-white w-full flex flex-col justify-center pl-20 rounded-tl-lg rounded-bl-lg">
          <h2 className="text-white text-2xl mb-2">Our Features</h2>
          <p className="text-white max-w-[400px] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. In donec a rutrum laoreet
            dictumst. Sit purus sit congue dolor dictumst. Est quis ut nisl
            netus enim.
          </p>
        </div>
        <div className="">
          <Image src={MediaImg} alt="media-image" width={300} height={300} />
        </div>
      </section>
    </div>
  );
};

export default Media;
