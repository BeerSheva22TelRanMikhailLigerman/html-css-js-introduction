import ApplicationBar from "./ui/ApplicationBar.js";
import DataGrid from "./ui/DataGrid.js";
import EmployeeForm from "./ui/EmployeeForm.js";
import { getRandomEmployee } from "./util/random.js";
import { addEmployees } from "./service/Company.js";
import Statistics from "./service/Statistics.js"
//employee model
//{id: number of 9 digits, name: string, birthYear: number,
// gender: female | male, salary: number, department: QA, Development, Audit, Accounting, Management}
const sections = [
    { title: "Empolyees", id: "employees-table-place" },
    { title: "Add Employee", id: "employees-form-place" },
    { title: "Statistics", id: "statistics-place" }
];
const employeeColumns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'birthYear', headerName: 'Birth Year' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'salary', headerName: 'Salary (ILS)' },
    { field: 'department', headerName: 'Department' }
]
const StatisticsColumns = [   
    { field: 'minAge', headerName: 'Age from' },
    { field: 'maxAge', headerName: 'Age to' },
    { field: 'count', headerName: 'Count' }
]
const menu = new ApplicationBar("menu-place", sections);

const employeeForm = new EmployeeForm("employees-form-place");
const employeeTable = new DataGrid("employees-table-place", employeeColumns);


const statisticsTable = new DataGrid("statistics-place", StatisticsColumns);

const statistics = new Statistics();

async function run() {
    while (true) {
        await employeeForm.buttonHasPressed();
        const employee = getRandomEmployee();
        addEmployees(employee);
        employeeTable.insertRow(employee);
        
        statisticsTable.clearSection();
        statistics.getStatistics().forEach(item => {
            statisticsTable.insertRow(item);
            console.log(item)
        });   
        
    }
}
run();