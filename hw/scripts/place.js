const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, speed) {
    return(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
}

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`;
