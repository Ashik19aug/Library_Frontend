import styles, {Position, Size} from "../../style.tsx";

const SliderComponent = () => {
  return (
      <div className={`${styles.ComponentBase} mt-0 laptop:mt-24`}>
        <div className={`${styles.SliderBase} ${styles.ComponentBg} ${Size.Slider}`}>
          <div className={"flex w-full"}>
            <div className={"flex-auto w-72 laptop:w-80"}>
              <div className={`flex h-1/3 ${Position.center}`}>
                <p className="text-lg tablet:text-xl laptop:text-3xl">Name: </p>
              </div>
              <div className={`flex flex-col laptop:flex-row h-2/3`}>
                <div className={`flex flex-col h-full w-full laptop:w-72 laptop:flex-col`}>
                  <p>details</p>
                  <p>details</p>
                  <p>details</p>
                  <p>details</p>
                </div>
                <div className={`flex h-full w-full laptop:w-28 self-center ${Position.center}`}>
                  <div className={`flex h-[70px] w-[70px] laptop:w-[100px] laptop:h-[100px] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 ${Position.center}`}>
                    <div className={`flex p-4 h-[60px] w-[60px] laptop:w-[90px] laptop:h-[90px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ${Position.center}`}>
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
