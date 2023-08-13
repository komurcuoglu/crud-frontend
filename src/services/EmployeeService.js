import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://localhost:8080/api/v1/emplooyes";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }    


}


export default new EmployeeService()

