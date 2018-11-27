import axios from 'axios'

class CarsServices {
    constructor(){
        axios.defaults.baseURL='http://localhost:3000/api/'
    }
    getAll(){
        axios.get('cars')
            .then(response =>{
                console.log(response.data);
            }).catch(error => {
                console.log(error.response);
            })
    }
}

export const cars = new CarsServices();

export default cars;