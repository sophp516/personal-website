import { useState, useEffect, useRef } from 'react';
import 'primeicons/primeicons.css';
import './Weather.css';

const Weather = () => {
    const [imagesrc, setImagesrc] = useState('');
    const lat = 43.70;
    const lon = -72.29;

    const audioRef = useRef(null);
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e472fd3279f99b31ff6bc89b67fc953d`);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const weatherData = await response.json();

                const weatherCode = weatherData.list[0].weather[0].id;

                if (weatherCode) {
                    // rain
                    if (200 <= weatherCode && weatherCode <= 531) {
                        setImagesrc('src/assets/rain.jpg');
                        audioRef.current = new Audio("src/assets/rain.mp3");
                    // snow
                    } else if (600 <= weatherCode && weatherCode <= 622) {
                        setImagesrc('src/assets/snow.jpg');
                        audioRef.current = new Audio("src/assets/snow.mp3");
                    // wind
                    } else if (700 <= weatherCode && weatherCode <= 781) {
                        setImagesrc('src/assets/wind.jpg');
                        audioRef.current = new Audio("src/assets/wind.mp3");
                    // default
                    } else {
                        setImagesrc('src/assets/default.jpeg');
                        audioRef.current = new Audio("src/assets/default.mp3");
                    }
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchWeatherData();
    }, []);

    const start = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
      }

    return (
        <div className="weather-container">
            <button onClick={start} className="play-button"><i className="pi pi-play"></i></button>
            <img src={imagesrc} alt="Weather" className="weather-image" />
        </div>
    )
}

export default Weather;