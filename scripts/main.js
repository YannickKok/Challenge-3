
function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = document.getElementById("city").value;

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius	
	var degC = Math.floor(response.main.temp - 273.15);



	

	// get
	var windspeed = response.wind.speed;

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = "You are now viewing data for: " + document.getElementById("city").value + "<br>"
	 + degC + "&#176;C  with " + type + "<br>" + windspeed + " km/h windspeed <br>";
	//weatherBox.innerHTML = degC + "&#176;C <br>" + type;
	
	//render humidity in DOM

	
	
}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?'; 
}

// init data stream
document.getElementById("getWeather").onclick = function(){
	getAPIdata();
};


function getAPIdata2() {

	var url = "https://api.openweathermap.org/data/2.5/weather"; 
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = document.getElementById("city").value; // haalt de ingevulde stad binnen

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather - haal over het internet nieuwe data binnen - fetch werkt met then, waardoor je dingen achter elkaar kunt chainene zonder ;;;;.
	// het mooie aan fetch is dat de pagina niet opnieuw geladen hoeft te worden
	//
	fetch(request)
	
	// parse to JSON format
	// vorm het om naar JSON formaat zodat we er iets mee kunnen doen
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText); //als de response niet OK is dan gooien we de error met de statustext. hiermee wordt ook de keten gebroken.
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error - Als de error binnenkomt voeren we de functie onAPIError uit.
	.catch(function (error) {
		onAPIError(error);
	});
}

