import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherApp from './WeatherApp'
import WeatherProvider from './Providers/WeatherProvider'
import FavoriteProvider from './Providers/FavoriteProvider'
import LocationProvider from './Providers/LocationProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocationProvider>
    <WeatherProvider>
      <FavoriteProvider>
        <WeatherApp/>
      </FavoriteProvider>
    </WeatherProvider>
    </LocationProvider>
  </StrictMode>,
)
