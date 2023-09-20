import styles, {Position, Size} from "../../style.tsx";

const SliderComponent = () => {
  return (
      <div className={`${styles.ComponentBase} mt-0 laptop:mt-24`}>
        <div className={`${styles.SliderBase} ${styles.ComponentBg} ${Size.Slider}`}>
          <div className={"flex w-full"}>
            <div className={"flex-auto w-80 bg-green-500"}>
              <div className={`flex bg-amber-300 h-1/3 ${Position.center}`}>
                <p className="text-lg tablet:text-xl laptop:text-3xl">Name: </p>
              </div>
              <div className={`flex flex-col laptop:flex-row bg-black h-2/3`}>
                <div className={"flex-auto h-full w-full laptop:w-72 bg-blue-800"}>

                </div>
                <div className={`flex-auto h-full w-full laptop:w-28 bg-blue-400 self-center ${Position.center}`}>
                  <div className={`flex h-[100px] w-[100px] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 ${Position.center}`}>
                    <div className={`flex p-4 h-[80px] w-[80px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ${Position.center}`}>
                      <p className={`text-gradient-to-r from-cyan-500 to-blue-500`}>Read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex-auto w-20`}>
              <div className={`flex w-full h-full ${Position.centerRight}`}>
                <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    className="w-full tablet:w-2/3 h-full rounded-xl Position.center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SliderComponent;
