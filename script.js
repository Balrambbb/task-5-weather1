async function getWeather() {
  const locationInput = document.getElementById("locationInput").value.trim();

  if (locationInput === "") {
    alert("Please enter a city name");
    return;
  }

  const city = encodeURIComponent(locationInput);
  const apiKey = "YOUR_API_KEY_HERE";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response failed");
    }

    const data = await response.json();

    if (data.error) {
      alert(data.error.message);
      return;
    }

    document.getElementById("city").innerText =
      `${data.location.name}, ${data.location.country}`;

    document.getElementById("temp").innerText =
      `🌡 Temperature: ${data.current.temp_c} °C`;

    document.getElementById("condition").innerText =
      `☁ Condition: ${data.current.condition.text}`;

  } catch (error) {
    alert("Unable to fetch weather. Check internet or API key.");
    console.error(error);
  }
}
