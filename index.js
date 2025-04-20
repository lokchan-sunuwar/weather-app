let search = document.querySelector("input"); 
let city = document.querySelector(".name"); 
let temp = document.querySelector(".temp"); 
let desc = document.querySelector(".desc"); 
let cloud = document.querySelector("#cloud"); 
let humidity = document.querySelector("#humidity"); 
let pressure = document.querySelector("#pressure"); 
let wind = document.querySelector("#wind");
let form = document.querySelector("form");
let flag = document.querySelector("#flag");
let apiKey = '9505fd1df737e20152fbd78cdb289b6a'; 
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+apiKey// Replace with your actual API key
let main = document.querySelector("main");
form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    if(search.value != ''){
        searchWeather(); // Call the function to get weather data
    }


})

const searchWeather= ()=> {
    fetch(url + `&q=${search.value}`) // Fetch weather data from the API
    .then(response => response.json()) // Parse the JSON response
    .then(data =>{
        console.log(data); 


        if(data.cod == '200'){
            city.querySelector('figcaption').innerHTML = data.name;
            city.querySelector('img').src = 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png'; // Set flag image source
            temp.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            temp.querySelector('img').alt = data.weather[0].description; // Set alt text for the weather icon
            temp.querySelector('img').title = data.weather[0].description; // Set title for the weather icon
            temp.querySelector("figcaption span").innerText = Math.round(data.main.temp)  + "°C"; // Set alt text for the weather icon
            desc.innerText = data.weather[0].description; // Display weather description
            cloud.innerText = data.clouds.all + "%"; // Display cloudiness
            humidity.innerText = data.main.humidity + "%"; // Display humidity
            pressure.innerText = data.main.pressure + "hPa"; // Display pressure
            flag.alt = data.sys.country; // Set alt text for the flag image

        }
        else{
            main.classlist.add('error'); // Add error class to main element
        }
        
        search.value = '';

       
    })
}