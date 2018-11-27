import axios from 'axios'

class Cars {
    constructor(){
        axios.defaults.baseURL='http://localhost:3000/'
    }
}

export const cars = new Cars();