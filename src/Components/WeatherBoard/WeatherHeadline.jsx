import { useContext } from "react";
import cloud from "../../assets/cloud.svg"
import haze from "../../assets/haze.svg"
import thunder from "../../assets/thunder.svg"
import sun from "../../assets/sun.svg"
import snow from "../../assets/icons/snow.svg"
import rainy from "../../assets/rainy.svg"
import pin from "../../assets/pin.svg"
import { WeatherContext } from "../../Contexts";
import { getFormattedDate } from "../../Utils/date-utils";

function WeatherHeadline() {
  const {weatherData} = useContext(WeatherContext);
	const {climate, temperature, time, location} = weatherData;

  function getWeatherIcons(climate){
      switch(climate){
        case "Rain":
          return rainy;
        case "Clouds":
          return cloud;
        case "Haze":
          return haze;
        case "Thunder":
          return thunder;
        case "Clear":
          return sun;
        case "Fog":
          return haze;
        case "Snow":
          return snow;
        case "Mist":
          return haze;
        default:
          return sun; 
      }
  }
  return (
    <div>
      <div className='max-md:flex items-center justify-between md:-mt-10'>
        <img src={getWeatherIcons(climate)} alt='cloud' />
        <div className='max-md:flex items-center max-md:space-x-4'>
          <h1 className='text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4'>
            {Math.round(temperature)}°
          </h1>
          <div className='flex items-center space-x-4 md:mb-4'>
            <img src={pin} />
            <h2 className='text-2xl lg:text-[50px]'>{location}</h2>
          </div>
        </div>
      </div>
      <p className='text-sm lg:text-lg'>{getFormattedDate(time,"time", false)} - {getFormattedDate(time, "date", false)}</p>
    </div>
  );
}

export default WeatherHeadline;
