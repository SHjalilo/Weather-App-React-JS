

const Home = ()=>{

    return(
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder="Enter City Name" />
                    <button> <img src="/image/search.png"  /> </button>
                </div>
                <div className="info">
                    <img src="/image/weather.png" alt="" className="icon" />
                    <h1>22°C</h1>
                    <h2> London </h2>
                    <div className="details">
                        <div className="col">
                            <img src="/image/humidity.png" alt="" />
                            <div className="humidity">
                                <p>20%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                        <img src="/image/wind.png" alt="" />
                            <div className="wind">
                                <p>3 Km/h</p>
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