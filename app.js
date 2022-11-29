const cityname = document.getElementById("cityname");
const search = document.getElementById("search");
const country = document.getElementById("country");
const desc = document.getElementById("descr");
const pressure = document.getElementById("pressure");
const temp = document.getElementById("temp");
const date = document.getElementById("date");
const delet = document.getElementById("delete");
const cityName = document.querySelector(".city");
const description = document.querySelector(".description");
const press = document.querySelector(".press");
const temperature = document.querySelector(".temperature");
const del = document.querySelector(".del")
const hours = document.querySelector(".hours")
const weather = document.getElementById("weather");
const angeles = document.getElementById("angeles");
const york = document.getElementById("york");
const vegas= document.getElementById("vegas");
let citi;
let count= 0;

weather.addEventListener("click", () => {
  count++;
  if(count == 1 && citi == "London") {
    london.style.background = "green";
  }
  else if(count == 2 && citi == "New York"){
    london.style.background = "none";
    york.style.background = "green";
  }
  else if(count == 3 && citi == "Los Angeles"){
    london.style.background = "none";
    york.style.background = "none";
    angeles.style.background = "green";
  }
  else if(count == 4 && citi == "Las Vegas"){
    london.style.background = "none";
    york.style.background = "none";
    angeles.style.background = "none";
    vegas.style.background = "green";
  }
  else {
    london.style.background = "none";
    york.style.background = "none";
    angeles.style.background = "none";
    vegas.style.background = "none";
  }
})

search.addEventListener("click", (e) => {
  // console.log(cityname.value)
citi = cityname.value;
  getWeather(cityname.value);
  e.preventDefault();
});


const getWeather = async (city) => {
  const url = `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`;
  let response = await fetch(url);
  let resData = await response.json();
  console.log(resData)
  // console.log(resData.weather[0].main)
  return showWeather(resData);
};

const showWeather = (data) => {
    // if (data.cod == "404") {
    //     weather.innerHTML = `<h2> City Not Found <h2>`
    //     return;
    // }
    cityName.innerHTML = `
    <h2 class="title">City</h2>
    <span id="country">${citi}</span>
    `
    description.innerHTML = `
    <h2 class="title">Description</h2>
    <input type="text" id="descr" placeholder="${data.description}"/>`

    press.innerHTML = `
    <h2 class="title">Pressure (hPa)</h2>
    <span id="pressure">${data.pressure_in_hPa}</span>
    `
    temperature.innerHTML = `
    <h2 class="title">Temperature (℃)</h2>
    <span id="temp">${data.temp_in_celsius}</span>
    `
    del.innerHTML = `
    <h2 class="title"></h2>
    <a id="delete">Delete</a>
    `
    hours.innerHTML = `
    <h2 class="title">Data age(hrs)</h2>
    <span id="date">${data.date_and_time}{</span>
    `

  //   country.innerText = `${citi}`
  // pressure.innerText = `${data.pressure_in_hPa}`,
  // desc.placeholder = `${data.description}`,
  // temp.innerText = `${data.temp_in_celsius}`
};


delet.addEventListener("click",() => {
  delet.parentNode.parentNode.remove();
})