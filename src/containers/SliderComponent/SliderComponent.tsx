import React from 'react';
import {Banner, NavLogo} from "../../assets/index";

const SliderComponent = () => {
  return (
    <div className="flex rounded-lg px-2 py-4 gap-4 text-white bg-gray-gradient">

      <div className="flex flex-col justify-center  space-y-8">
        <h1 className="text-4xl">Name Of The Book</h1>
        <div className="flex font-semisolid bg-blue-gradient text-gray-500 gap-2">
          <div className="flex gap-1">
            <div className="drop-shadow-md hover:drop-shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs">10</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <div>
              <p className="text-xs">10</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs">10</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div>
              <p className="text-xs">- 13 Aug 2023</p>
            </div>
          </div>
        </div>
        <div className="">
          <p>
            Gol D. Roger, aka the "Pirate King," was a notorious sailor who dominated the Grand Line. The World Government's
            capture and subsequent execution of him caused a paradigm shift, as his famous last words revealed the existence
            of the world's most valuable treasure – One Piece. This sparked the Grand Age of Pirates, with a new generation
            of seafarers seeking the treasure and the esteemed title of Pirate King.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center bg-blue-gradient md:base-1 basis-1/3">
        <img src={Banner} alt="Banner" className="justify-center w-full h-full drop-shadow-2xl rounded-lg"/>
      </div>

    </div>
  );
};

export default SliderComponent;
