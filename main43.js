document.getElementById("get-weather").addEventListener("click", function() {
    const city = document.getElementById("city-input").value;
    const apiKey = "a3df4ccc8d934db185d605a1f248be43";
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.data && data.data.length > 0) {
                const weather = data.data[0];
                const weatherInfo = `
                    <h1>${weather.city_name}</h1>
                    <p><strong>İstilik:</strong> ${weather.temp} °C</p>
                    <p><strong>Hava Şərtləri:</strong> ${weather.weather.description}</p>
                    <p><strong>Rütubət:</strong> ${weather.rh}%</p>
                    <p><strong>Rüzgar Sürəti:</strong> ${weather.wind_spd} m/s</p>`;
                document.getElementById('weather-info').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather-info').innerHTML = `<p>Şəhəri tapmaq mümkün olmadı. Zəhmət olmasa yenidən yoxlayın.</p>`;
            }
        })
        .catch(error => {
            console.error('Xəta:', error);
            document.getElementById('weather-info').innerHTML = `<p>Hava məlumatını alarkən xəta baş verdi. Zəhmət olmasa yenidən yoxlayın.</p>`;
        });
});