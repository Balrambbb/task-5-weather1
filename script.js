function getWeather() {
    const city = document.getElementById("locationInput").value;

    if(city === ""){
        alert("Please enter a location");
        return;
    }

    const apiKey = "9825315236794f56952150745252512";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("city").innerText =
            `${data.location.name}, ${data.location.country}`;

        document.getElementById("temp").innerText =
            `🌡 Temperature: ${data.current.temp_c} °C`;

        document.getElementById("condition").innerText =
            `☁ Condition: ${data.current.condition.text}`;
    })
    .catch(error => {
        alert("Location not found");
        console.error(error);
    });
}
