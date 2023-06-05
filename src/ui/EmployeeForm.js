export default class EmployeeForm {
    #dataObj
    #formElement
    constructor(parentId) {
        const parentElement = document.getElementById(parentId);
        this.#dataObj = {}
        this.#fillForm(parentElement, parentId);
        this.#setElements(parentId)
        

    }
    #fillForm(parentElement, parentId) {
       parentElement.innerHTML =
         `<form class="form-control" id="${parentId}-form-id">
            <div class="radio-group">
                <div class="radio-control">
                    <input id="female-id" type="radio" name="gender" required value="female" unchecked>
                    <label for="female-id">female</label>
                </div>   
                <div class="radio-control">
                    <input id="male-id" type="radio" name="gender" required value="male" unchecked>
                    <label for="male-id">male</label>
                </div> 
                 
            </div>   
            <input type="number" name="salary" min="7000" max="50000" placeholder="enter salary"> 
            <button type="submit" >Submit</button>
           </form>   

            `
    }
    #setElements(parentId) {
        this.#formElement = document.getElementById(`${parentId}-form-id`);
    }
    addHandler(submitFn) {
        this.#formElement.onsubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(this.#formElement);
            this.#dataObj.gender = formData.get('gender');
            this.#dataObj.salary = formData.get('salary');
            await submitFn(this.#dataObj);
        }
    }
}