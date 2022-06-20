import React, { useState } from "react";
import data from "../components/data";
import cart from "../assets/images/icon-cart.svg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";

function Home() {
  const [img, setImg] = useState(data[0].image);

  const [images] = useState(data);

  function handleImgChange(e) {
    setImg(e.target.src);
  }

  const imgList = images.map((img) => {
    const { thumbnail, id } = img;
    return (
      <img
        onClick={handleImgChange}
        key={id}
        src={thumbnail}
        alt="product"
        className="w-16 h-16 rounded-lg focus:bg-pale-orange
        focus:opacity-60 focus:z-50 cursor-pointer"
      />
    );
  });
  return (
    <>
      <main className="flex flex-col md:flex-row justify-around items-center gap-5 my-10 mx-44">
        <div className="w-80% md:w-[45%]">
          <div>
            <img
              className=" w-120 h-200 md:w-80 md:h-80 rounded-lg"
              src={img}
              alt="product"
            />
          </div>
          <div>
            <div className="hidden md:flex md:flex-row gap-5 my-5 focus:bg-pale-orange ">
              {imgList}
            </div>
          </div>
        </div>
        <div className="w-80% md:w-[45%]">
          <h4 className="text-orange-400 uppercase text-xs font-bold mb-2">
            Sneaker Company
          </h4>
          <h1 className="text-very-dark-blue text-xl font-extrabold flex flex-col">
            Fall Limited Edition <span className="mb-5">Sneakers</span>
          </h1>
          <p className="text-dark-grayish-blue text-xs tracking-wide w-2/3 mb-3">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex gap-4 items-center">
            <h3 className="font-bold text-xl">$125.00</h3>
            <h3 className="text-xs font-bold text-center h-5 w-auto py-1 rounded-sm bg-pale-orange text-orange-400 px-1 text-">
              50%
            </h3>
          </div>
          <h5 className="text-grayish-blue text-xs line-through">$250.00</h5>
          <div className="mt-5 flex gap-2">
            <div className="flex items-center">
              <button className="text-orange-400 text-sm px-2 bg-light-grayish-blue w-7 h-7 rounded ">
                <img src={minus} alt="minusicon" />
              </button>
              <input
                className="bg-light-grayish-blue  w-7 h-7 rounded text-xs font-bold"
                type="text"
                value="0"
              />
              <button className="text-orange-400 px-2 bg-light-grayish-blue  w-7 h-7 rounded">
                <img src={plus} alt="plusicon" />
              </button>
            </div>
            <div className="bg-orange-500 w-auto text-white flex rounded-md px-10 py-1 gap-2 items-center">
              <img
                src={cart}
                alt="cart"
                className="w-3 h-3 text-white cursor-pointer"
              />
              <h3 className="text-xs">Add to cart</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
