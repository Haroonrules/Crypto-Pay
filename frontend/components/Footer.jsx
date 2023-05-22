import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-green-400 w-full h-56 flex  justify-center">
      <div className="flex justify-around items-center flex-grow">
        <div className="text-white">
          <h3 className="text-2xl">Download Now</h3>
          <p className="text-[15px] max-w-[400px] text-muted">
            Lorem ipsum dolor sit amet licitudin in dolor sit licitudin in l co
            Vitae sollicitudin in l convallis.
          </p>
        </div>
        <div className="border-2 border-white rounded-lg">
          <input
            type="email"
            name=""
            id=""
            className="outline-none bg-transparent text-white w-60  px-6 placeholder:text-white"
            placeholder="Send Us An Email"
          />
          <button className=" px-4 bg-white py-4 rounded-l-lg text-blue-500 to text-green-400">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
