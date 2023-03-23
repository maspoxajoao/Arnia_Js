const apiKey = "5ILEQLOApbeoYD3KR22ZJIA8SK50XjIH";
const baseUrl = "http://dataservice.accuweather.com/";

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", async () => {
  const searchInput = document.getElementById("search-input").value;

  try {
    const searchResponse = await fetch(
      `${baseUrl}locations/v1/cities/search?apikey=${apiKey}&q=${searchInput}`
    );
    const searchData = await searchResponse.json();
    const locationKey = searchData[0].Key;

    const conditionsResponse = await fetch(
      `${baseUrl}currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
    );
    const conditionsData = await conditionsResponse.json();

    const temperature = conditionsData[0].Temperature.Metric.Value;
    const city = searchData[0].LocalizedName;
    const date = conditionsData[0].LocalObservationDateTime.split("T")[0];
    const weatherIcon = conditionsData[0].WeatherIcon;
    const weatherCondition = conditionsData[0].WeatherText;

    //update weather icon and condition
    const weatherIconElement = document.getElementById("weather-icon");
    const weatherConditionElement =
      document.getElementById("weather-condition");
    const iconUrl = `https://developer.accuweather.com/sites/default/files/${
      weatherIcon < 10 ? "0" + weatherIcon : weatherIcon
    }-s.png`;
    weatherIconElement.setAttribute("src", iconUrl);
    weatherIconElement.setAttribute("alt", weatherCondition);
    weatherConditionElement.innerHTML = weatherCondition;

    //update temperature, city, and date
    const temperatureElement = document.getElementById("temperature");
    const cityElement = document.getElementById("city");
    const dateElement = document.getElementById("date");

    temperatureElement.innerHTML = `${temperature}°C`;
    cityElement.innerHTML = city;
    console.log(city);
    const newtime = new Date(date).toLocaleDateString('pt-BR')
    dateElement.innerHTML = newtime;


    const boxx = document.getElementById('weather-info')
    boxx.className='box'


  } catch (error) {
    console.error(error);
  }
});
