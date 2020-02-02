export default (item) => ({
    max: item.main.temp_max,
    min: item.main.temp_min,
    humidity: item.main.humidity,
    wind: item.wind.speed,
})