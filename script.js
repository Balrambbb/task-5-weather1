async function getWeather() {
  const input = document.getElementById("locationInput").value.trim();

  if (input === "") {
    alert("Please enter a city name");
    return;
  }

  const city = encodeURIComponent(input);
  const apiKey = "9825315236794f56952150745252512";

  // ✅ HTTPS is MUST for GitHub Pages
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    const data = await response.json();

    // ✅ API error handling
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
    console.error("Fetch error:", error);
    alert("Unable to fetch weather. Check internet or API key.");
  }
}
