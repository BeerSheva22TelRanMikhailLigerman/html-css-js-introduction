import namesObj from '../config/names.json' assert {type: 'json'};
import settingsObj from '../config/settings.json' assert {type: 'json'};
import { getISODateStr, getYearBack } from "../util/date-functions.js";

export function getRandomInt(min, max) {
    if (min == max) {
        max++;
    } else if (min > max) {
        [min, max] = [max, min]
    }
    return Math.trunc(min + Math.random() * (max - min))
}
export function getRandomElement(array) {
    return array[getRandomInt(0, array.length)]
}


export function getRandomEmployee() {
    const human = getRandomElement(namesObj.names)
    return {
        id: getRandomInt(100000, 1000000),
        name: human.name,
        birthYear: getISODateStr(getYearBack(getRandomInt(settingsObj.staff.minAge, settingsObj.staff.maxAge))),
        gender: human.sex == "m" ? "male" : "female",
        salary: getRandomInt(settingsObj.staff.minSalary, settingsObj.staff.maxSalary),
        department: 'QA'
    }
}




