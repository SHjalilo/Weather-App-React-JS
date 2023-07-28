import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


const Home = ()=>{

    const [data,setData] = useState({
        celcius : 10 ,
        name : 'London' ,
        humidity : 12 ,
        speed : 3 ,
        image : '/image/weather.png'
    })

    const [name,setName] = useState('');
    const [error, setError] = useState('');
    

    const handleClick = ()=>{
        
        if (name !== '') {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
            axios.get(apiUrl)
            .then(res =>{
                console.log(res.data);
                let imagePath = '';
                if (res.data.weather[0].main == 'Clouds') {
                    imagePath = '/image/cloud.png'
                } else if (res.data.weather[0].main == 'Clear') {
                    imagePath = '/image/sunny.png'
                } else if (res.data.weather[0].main == 'Rain') {
                    imagePath = '/image/rain.png'
                } else if (res.data.weather[0].main == 'Mist') {
                    imagePath = '/image/mist.png'
                } else {
                    imagePath = '/image/weather.png'
                }

                setData({...data , celcius:res.data.main.temp , name:res.data.name ,
                        humidity:res.data.main.humidity , speed:res.data.wind.speed , image : imagePath})

                setError('')
            })
            .catch(err => {
                if (err.response.status == 404) {
                        setError('Invalid City Name')
                } else{
                    setError('')
                }
                console.log(err)
            }); 
        }
    }

    return(
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder="Enter City Name"  onChange={e => setName(e.target.value)}/>
                    <button> <img src="/image/search.png" onClick={handleClick} /> </button>
                </div>
                <div className="error">
                    <p> {error} </p>
                </div>
                <div className="info">
                    <img src={data.image} alt="" className="icon" />
                    <h1> {Math.round(data.celcius)}°C</h1>
                    <h2> {data.name} </h2>
                    <div className="details">
                        <div className="col">
                            <img src="/image/humidity.png" alt="" />
                            <div className="humidity">
                                <p>{Math.round(data.humidity)}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                        <img src="/image/wind.png" alt="" />
                            <div className="wind">
                                <p>{Math.round(data.speed)} Km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Home;