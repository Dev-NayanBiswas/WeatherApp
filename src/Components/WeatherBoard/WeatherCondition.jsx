import maxIcon from "../../assets/icons/temp-max.svg"
import minIcon from "../../assets/icons/temp-min.svg"
import humidityIcon from "../../assets/icons/humidity.svg"
import cloudIcon from "../../assets/icons/cloud.svg"
import windIcon from "../../assets/icons/wind.svg"
import { useContext } from "react"
import { WeatherContext } from "../../Contexts"


function WeatherCondition() {
  const {weatherData} = useContext(WeatherContext);
  const {climate,
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    } = weatherData || {}
  return (
    <div>
      <p className='text-sm lg:text-lg font-bold capitalize mb-8'>
        The climate is {climate}
      </p>
      <ul className='space-y-6 lg:space-y-6'>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Temp max</span>
          <div className='inline-flex space-x-4'>
            <p>{Math.round(maxTemperature)}°</p>
            <img src={maxIcon} alt='temp-max' />
          </div>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Temp min</span>
          <div className='inline-flex space-x-4'>
            <p>{Math.round(minTemperature)}°</p>
            <img src={minIcon} alt='temp-min' />
          </div>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Humadity</span>
          <div className='inline-flex space-x-4'>
            <p>{humidity}%</p>
            <img src={humidityIcon} alt='humidity' />
          </div>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Cloudy</span>
          <div className='inline-flex space-x-4'>
            <p>{cloudPercentage}%</p>
            <img src={cloudIcon} alt='cloudy' />
          </div>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Wind</span>
          <div className='inline-flex space-x-4'>
            <p>{wind}km/h</p>
            <img src={windIcon} alt='wind' />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WeatherCondition;
