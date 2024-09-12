
  
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japanese-car"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById(
      "author name"
    ).textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(<[JSL09 Solution].png>)`;
    document.getElementById("author").textContent = `By: Dodi Achmad`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById(
      "crypto"
    ).innerHTML = `<img src = ${data.image.small}/>
    <span>${data.name}</span>`;
    document.getElementById("crypto").innerHTML += `
    <p>🏆: R${data.market_data.current_price.zar}</p>
    <p>⬆️: R${data.market_data.high_24h.zar}</p>
    <p>⬇️: R${data.market_data.low_24h.zar}</p>
`;
  })
  .catch((err) => console.error(err));

function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-us",
    {
      timeStyle: "short",
    }
  );
}
setInterval(getCurrentTime, 1000);
// `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid={e9cb18007d14ff1ec5215a3baaafa545}`
navigator.geolocation.getCurrentPosition(async (position) => {
  try {
    const res = await fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
    );
    if (!res.ok) {
      throw Error("Weather data not available");
    }
    const data = await res.json();
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather").innerHTML = `
          <img src=${iconUrl} />
          <p class="weather-temp">${Math.round(data.main.temp)}º</p>
          <p class="weather-city">${data.name}</p>
      `;
  } catch (err) {
    console.error(err);
  }

  
});



