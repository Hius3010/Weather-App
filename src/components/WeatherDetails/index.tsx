import { WeatherItem } from "@/model";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { GiCompass, GiWindSlap } from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

interface WeatherDetailsProps {
  data: WeatherItem;
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Weather Details</h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 gap-4"
        >
          <div
            className="bg-white/50 flex p-4 items-center 
          justify-center rounded-xl"
          >
            <div className="text-2xl">
              <h3>Wind Speed</h3>
              <h3>{data?.current?.wind_mph} mph</h3>
            </div>
            <div className="text-5xl">
              <GiWindSlap fontSize={40} />
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center 
          justify-center rounded-xl"
          >
            <div className="text-2xl">
              <h3>Humidity</h3>
              <h3>{data?.current?.humidity ?? 0}%</h3>
            </div>
            <div className="text-5xl">
              <WiHumidity fontSize={40} />
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center 
          justify-center rounded-xl"
          >
            <div className="text-2xl">
              <h3>Wind Direction</h3>
              <h3>{data?.current?.wind_dir}</h3>
            </div>
            <div className="text-5xl">
              <GiCompass fontSize={40} />
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center 
          justify-center rounded-xl"
          >
            <div className="text-2xl">
              <h3>Sunrise</h3>
              <h3>{data?.forecast?.forecastday?.[0]?.astro?.sunrise}</h3>
            </div>
            <div className="text-5xl">
              <BsSunrise fontSize={40} />
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center 
          justify-center rounded-xl"
          >
            <div className="text-2xl">
              <h3>Sunset</h3>
              <h3>{data?.forecast?.forecastday?.[0]?.astro?.sunset}</h3>
            </div>
            <div className="text-5xl">
              <BsSunset fontSize={40} />
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center 
          justify-center rounded-xl"
          >
            <div className="text-2xl">
              <h3>Air Pressure</h3>
              <h3>{data?.current?.pressure_mb} hPa</h3>
            </div>
            <div className="text-5xl">
              <MdAir fontSize={40} />
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center 
          justify-center rounded-xl"
          >
            <div className="text-2xl">
              <h3>Feel Like</h3>
              <h3>{data?.current?.feelslike_c}°</h3>
            </div>
            <div className="text-5xl">
              <CiTempHigh fontSize={40} />
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center 
          justify-center rounded-xl"
          >
            <div className="text-2xl">
              <h3>Visibility</h3>
              <h3>{data?.current?.vis_km} km</h3>
            </div>
            <div className="text-5xl">
              <FaEye fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
