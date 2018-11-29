import axios from 'axios'

class CarsServices {
    constructor(){
        axios.defaults.baseURL='http://localhost:3000/api/'
    }
    getAll(){
       return axios.get('cars')
            
    }
    add(newCar){
        return axios.post('cars',newCar)
    }
}

export const cars = new CarsServices();

export default cars;