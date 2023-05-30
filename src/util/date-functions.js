export function getISODateStr(date) {
    return date.toISOString().substring(0, 10)
}
export function getEndDate(startDateStr, days) {
    const date = new Date(startDateStr);
    const endDate = new Date(date.setDate(date.getDate() + days));
    return getISODateStr(endDate);
}
export function getDaysBetweenDates(fromDate, toDate) {
    const difference = toDate.getTime() - fromDate.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
}

export function getYearBack(years) {
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const targetYear = currentYear - years;
const targetDate = new Date(targetYear, currentDate.getMonth(), currentDate.getDate());
return targetDate
}
export function getRandomDate(startDate, endDate) {  
startDate = new Date(startDate); 
endDate = new Date(endDate);
const timeRange = endDate.getTime() - startDate.getTime();
const randomMilliseconds = Math.floor(Math.random() * timeRange);
const randomDate = new Date(startDate.getTime() + randomMilliseconds);
return getISODateStr(randomDate) 
}



