// ===================
// YEAR + LAST MODIFIED
// ===================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===================
// WIND CHILL
// ===================
function calculateWindChill(tempC, windKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

if (temp <= 10 && wind > 4.8) {
    document.getElementById("windChill").textContent =
        calculateWindChill(temp, wind) + " °C";
} else {
    document.getElementById("windChill").textContent = "N/A";
}
