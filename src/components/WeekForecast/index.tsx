import { DayForecast } from "@/model";

interface WeekForecastProps {
  forecast?: DayForecast[];
}

const WeekForecast = ({ forecast }: WeekForecastProps) => {
  return (
    <div
      className="grid gird-cols-2 sm:grid-cols-2 
  md:grid-cols-3 lg:grid-cols-7 gap-8 w-full"
    >
      {forecast?.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2
      text-center rounded-lg flex flex-col items-center"
        >
          <p>
            {new Date(day.date ?? "").toLocaleString("en-US", {
              weekday: "short",
            })}
          </p>
          <img src={day.day?.condition?.icon} alt={day.day?.condition?.text} />
          <div>
            <p>H {day.day?.maxtemp_c?.toFixed()}°</p>
            <p>L {day.day?.mintemp_c?.toFixed()}°</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
