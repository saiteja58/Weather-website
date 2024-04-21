const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'f05ffc54b2mshcf1345aa55d9cc5p15a064jsn0f48c96f4c6e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let cityfind;
function clicking(){
	const b=document.querySelector('#input-city').value;
	console.log(b);
	weatherfind(b);
	
}
function enterclick(event){
	const b=document.querySelector('#input-city').value;
	if(event.key=="Enter"){
		weatherfind(b)
	}
}

async function weatherfind(city){
	
	
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
	const response = await fetch(url, options);
	const result = await response.text();
	
	console.log(result);
	let data=JSON.parse(result);
	let display_temp=document.querySelector('.temperature-div');
	let display_humidity=document.querySelector('.humidity-div');
	let display_wind_speed=document.querySelector('.wind-speed');
	let display_cityname=document.querySelector(".city-name");
	display_cityname.innerHTML=`<h1 id="city-name" >City = ${city}</h1>`;
	if(data.temp<=15){
		display_temp.innerHTML=`<img id="temp-img" src="media\\17316997-cold-winter-sun-removebg-preview.png" alt="">
		<p class="parameters" id="temp" >temp = ${data.temp}<sup>0</sup>C</p>`;
		
	}
	else if(data.temp>15 && data.temp<30){
		display_temp.innerHTML=`<img id="temp-img" src="media\\pngtree-summer-sun-art-clipart-png-image_1003476-removebg-preview.png" alt="">
		<p class="parameters" id="temp" >temp = ${data.temp}<sup>0</sup>C</p>`;
		
	}
	else{
		display_temp.innerHTML=`<img id="temp-img" src="media\\6968.png_1200-removebg-preview.png" alt="">
		<p class="parameters" id="temp" >temp = ${data.temp}<sup>0</sup>C</p>`;
		
	}
	display_humidity.innerHTML=`<img src="media/istockphoto-955716900-612x612-removebg-preview.png" alt="" class="humidity-img"><p class="parameters" id="humid" >humidity = ${data.humidity}%</p>`
	display_wind_speed.innerHTML=`<img src="media/pngtree-wind-vector-icon-design-template-png-image_1722865-removebg-preview.png" alt="" class="wind-img"><p class="parameters" id="wind" >wind-speed = ${(data.wind_speed).toPrecision(3)}km/h</p>`

let styling=document.querySelector()

}
   

