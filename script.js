const submitBtn = document.querySelector(".btn");
const input = document.querySelector(".input");
const container = document.querySelector(".container");
// checkthefirstassigns
// console.log(input);

//*function;

const getWeather = async () => {
  const key = "5c0e4631bd743673fc15bd1bb375c495";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`;
  if (
    container.innerHTML
      .toLocaleLowerCase()
      .includes(input.value.toLocaleLowerCase())
  ) {
    alert(input.value + " is already exists!");
  } else {
    try {
      const response = await fetch(url);
      const weatherInfo = await response.json();
      console.log(weatherInfo);

      /**destructuring */
      const { weather, main, name } = weatherInfo;
      container.innerHTML += ` ${main.temp} <br> ${name} <br> ${weather[0].description} <br> <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"> <br>`;
      input.value = " ";
    } catch (error) {
      console.log(error);
    }
  }
};

submitBtn.addEventListener("click", getWeather);
