import { WeatherItem } from "@/model";
import { getCurrentDate } from "@/ultis/currentDate";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface CurrentProps {
  data?: WeatherItem;
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data?.current?.condition?.icon;
  return (
    <div
      className="flex flex-col mb-8 md:mb-0
    items-start gap-2 w-1/2"
    >
      <div className="flex items-center ">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              src={weatherIcon}
              alt="data.current.condition.text"
              className="w-[100px] object-cover"
            />
          </div>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {data?.current?.temp_c?.toFixed()}
          <span>°</span>
        </p>
        <span className="text-white">{data?.current?.condition?.text}</span>
      </div>
      <div>
        <div
          className="flex items-center text-black
        bg-white/90 px-2 py-2 rounded-xl"
        >
          <HiOutlineLocationMarker />
          <span>
            {data?.location?.name}, {data?.location?.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Current;
