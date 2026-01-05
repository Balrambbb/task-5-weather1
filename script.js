async function getWeather() {
  const input = document.getElementById("locationInput").value.trim();

  if (input === "") {
    alert("Please enter a city name");
    return;
  }

  const city = encodeURIComponent(input);
  const apiKey = "9825315236794f56952150745252512";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
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
    console.error(error);
    alert("Unable to fetch weather. Please try again.");
  }
}
