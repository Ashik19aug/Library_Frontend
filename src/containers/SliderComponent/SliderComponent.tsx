import styles, {Size} from "../../style.tsx";
import {Cover1} from "../../assets/ash.tsx";

const SliderComponent = () => {
  return (
      <div className={`${styles.ComponentBase} mt-0 laptop:mt-24`}>
        <div className={`${styles.SliderBase} ${styles.ComponentBg} ${Size.Slider}`}>
          {/*Image Section*/}
          <div className="flex static w-1/5 mr-10 rounded-lg ">
            <img className="h-auto w-full mt-10 rounded-lg shadow-xl dark:shadow-gray-800" src={Cover1} alt="cover1" />
            <div className="flex w-1/4 absolute justify-end rounded-lg pr-10">
              <img className="w-20 h-20 rounded-full shadow-xl dark:shadow-gray-800" src={Cover1} alt="cover1" />
            </div>
          </div>
          {/*Value Section*/}
          <div className="flex flex-col justify-center items-center w-1/5 h-full text-white">
            <p>Rating</p>
            <p>Read</p>
            <p>Like</p>
            <p>Date</p>
          </div>
          {/*Information Section*/}
          <div className="flex flex-col justify-center w-3/5 h-full text-white mx-4">
            <p className="text-5xl text-center mt-2">Banner Cover Title</p>
            <p className="text-lg text-center mt-2">Author Name</p>
            <p className="text-justify text-sm mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour,
              or randomised words which don't look even slightly believable.
              If you are going to use a passage of Lorem Ipsum,
              you need to be sure there isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
              making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
              combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
              The generated Lorem Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
          </div>
        </div>
      </div>
  );
};

export default SliderComponent;
