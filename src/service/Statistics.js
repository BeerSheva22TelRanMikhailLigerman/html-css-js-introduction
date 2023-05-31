import { getEmployees } from "../service/Company.js"
import { calculateAge } from "../util/date-functions.js"
import Settings from '../config/settings.json' assert {type: 'json'};




export default class Statistics {   
    #statistics = []
    #step
    #startAge
    #endAge

    constructor() {
        this.#step = Settings.statistics.step;
        this.#startAge = Settings.statistics.startAge;
        this.#endAge = Settings.statistics.endAge;
        this.#fillStatObj(this.#step, this.#startAge, this.#endAge)
    }
    getStatistics() {
        this.#clearStatistics()
        const employeesAge = getEmployees().map(item => calculateAge(item.birthYear));
        this.#fillStatistics(employeesAge);
        return this.#statistics

    }
    #fillStatObj(step, startAge, endAge) {
        const steps = (endAge - startAge) / step;
        for (let i = 0; i <= steps; i++) {
            let obj = { minAge: startAge + step * i, maxAge: startAge + step * (i + 1) - 1, count: 0 };
            this.#statistics.push(obj)
        }
    }

    #fillStatistics(employeesAge) {
        employeesAge.forEach(age => {this.#statistics.forEach(obj => (obj.minAge <= age && obj.maxAge >= age) ? obj.count++ : obj.count)})
    }
    #clearStatistics(){
        this.#statistics.forEach(item => item.count = 0)
    }
}



