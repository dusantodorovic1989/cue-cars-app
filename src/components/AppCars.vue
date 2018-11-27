<template>
  <div>
      <table class="table table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Max speed</th>
              <th>Automatic</th>
              <th>Enigine</th>
              <th>Number of doors</th>
            </tr> 
          </thead>

          <tbody v-for ="(car,index) in cars" :key="index">
            <tr>
              <td>{{car.id}}</td>
              <td>{{car.brand}}</td>
              <td>{{car.model}}</td>
              <td>{{car.maxSpeed}}</td>
              <td>{{car.isAutomatic}}</td>
              <td>{{car.engine}}</td>
              <td>{{car.numberOfDoors}}</td>
             </tr>

          </tbody>

      </table>
  </div>
</template>

<script>
import CarsServices from '../services/CarsServices'
export default {
    data(){
      return{
          cars:[],

      }
  },
  created(){
    //   CarsServices.getAll()
     CarsServices.getAll()
      .then(response =>{
                this.cars = response.data;
            }).catch(error => {
                console.log(error.response);
            })
  }
  
}
</script>