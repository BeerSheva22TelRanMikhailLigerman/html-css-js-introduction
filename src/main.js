import openMeteoConfig from './config/service-config.json' assert {type: 'json'};
import OpenMeteoService from './service/OpenMeteoService.js';
import DataGrid from './ui/DataGrid.js';
import WeatherForm from './ui/WeatherForm.js';
import {getISODateStr, getEndDate} from './util/date-functions.js'
//constants definition
const columns = [
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'temperature', headerName: 'Temperature' },
    { field: 'apparentTemperature', headerName: 'Fealt Temp' }
]
//functions


const fromFormData = {
    city: 'Rehovot',
    startDate: getISODateStr(new Date()),
    days: 0, hourFrom: 20, hourTo: 21
};
//objects
const form = new WeatherForm("form-place",
 Object.keys(openMeteoConfig.cities), openMeteoConfig.maxDays);
const openMeteoService = new OpenMeteoService(openMeteoConfig.baseUrl);
const table = new DataGrid("table-place", columns)
const latLong = openMeteoConfig.cities[fromFormData.city];
const { lat, long } = latLong;

const { startDate, days, hourFrom, hourTo } = fromFormData
openMeteoService.getTemperatures(lat, long, startDate, getEndDate(startDate, days),
    hourFrom, hourTo).then(data => table.fillData(data))