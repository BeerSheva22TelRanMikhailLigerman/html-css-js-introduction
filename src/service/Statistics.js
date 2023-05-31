import { getEmployees } from "../service/Company.js"
import { calculateAge } from "../util/date-functions.js"
import AgeStatistics from '../config/AgeStatistics.json' assert {type: 'json'};


export function getStatistics() {
    const agesObj = AgeStatistics.ageRanges;
    const employeesAge = getEmployees().map(item => calculateAge(item.birthYear));
   
    employeesAge.forEach(age => {
        agesObj.forEach(obj => (obj.min <= age && obj.max >= age) ? obj.count++ : obj.count)
    })   

    console.log(agesObj)
}