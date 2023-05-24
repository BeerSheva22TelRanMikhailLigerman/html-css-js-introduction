// async function getTemperatures(lat, long) {
//     const response = 
//     await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&timezone=IST`)
//     return response.json();
// }
//  getTemperatures(31.89, 34.81).then((data) => console.log(data.hourly
//     .temperature_2m[20]))
//  .catch(error => console.log("kuku"))
async function getTemperatures(lat, long, startDate, days, hourFrom, hourTo) {
    //Parameters: lat - latitude, long - longitude, startDate - ISO date of forecast,
    // days - forecast days, hourFrom, hourTo - closed range of the hours for each day
    //returns:
    //array of objects {date: <string containing date YYYY-MM-YY with no time>,
    // time: <hour number from the given range>, temperature: <number>,
    // apperantTemperature: <number> }
    const endDate = getEndDate(startDate, days);
    

}
function getEndDate(startDateStr, days) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(startDate.setDate(startDate.getDate() + days));
    return endDate.toISOString().substring(0, 10);
}
function getUrl(lat, long, startDate, endDate) {
    return `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&timezone=IST&start_date=${startDate}&end_date=${endDate}`
}
function getDataForHours(array, hourFrom, hourTo) {
    return array.filter((__, index) => {
        const rem = index % 24;
        return rem >= hourFrom && rem <= hourTo
    })
}