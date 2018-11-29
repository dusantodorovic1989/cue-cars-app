<template>
   <div class="container">
       <div class="container mt-3 mt-sm-5">
           <div class="row justify-content-center">
               <div class="col-md-6">
                   <form @submit.prevent="addCars">
                       <div class="form-group">
                           <input type="text"  class="form-control" required minlength="2" placeholder="Brand" v-model="newCar.brand">
                       </div>
                       <div class="form-group">
                           <input type="text"  class="form-control" placeholder="Model" required minlength="2" v-model="newCar.model">
                       </div>
                       <div class="form-group">
                           <input type="number" class="form-control" placeholder="Max Speed" v-model="newCar.maxSpeed">
                       </div>
                       <div class="form-group">
                           <input type="number"  class="form-control" placeholder="Number Of Doors" required v-model="newCar.numberOfDoors">
                       </div>
                       <div class="select">
                           <select  aria-placeholder="Select Section" v-model="newCar.year" :value="years" required >
                               <option disabled value="">Select year</option>
                               <option v-for="(year, index) in years" :key="index">
                                   {{ year }}
                               </option>
                           </select>
                       </div>
                       <div class="custom-control ">
                           <input type="checkbox" v-model="newCar.isAutomatic" >
                           <label class="custom-controll">Automatic</label>
                       </div>
                       <div class="validate-radio">
                           <div class="engine-input">
                               <label>Disel</label>
                               <input type="radio" v-model="newCar.engine" value="Disel">
                               <label>Petrol</label>
                               <input type="radio" v-model="newCar.engine" value="Petrol">
                               <label>Electric</label>
                               <input type="radio" v-model="newCar.engine" value="Electric">
                               <label>Hybrid</label>
                               <input type="radio" v-model="newCar.engine" value="Hybrid">
                           </div>
                       </div>                        
                       <button type="submit" class="btn btn-primary">Submit</button>
                       <button  class="btn btn-info" @click.stop.prevent="previewCar">Preview</button>
                       <button  class="btn btn-danger" @click.stop.prevent="resetForm">Reset</button>
                   </form>
               </div>
           </div>
       </div>
   </div>
</template>


<script>
import CarsService from "../services/CarsServices";

export default {
    data (){
        return {
            years: Array(29).fill(1990).map((n,i) => n +i),
             newCar:{
                  isAutomatic: false
             }
        }
    },
    methods:{
        addCars(){
            console.log('FGDFGDFG');
            CarsService.add(this.newCar)
                .then(response =>{
                    this.newCar = {}
                    this.$router.push({path: '/cars'})
                }).catch(error =>{
                    console.log(error.response)
                })
        },
        resetForm(){
            this.newCar={}
        }
    }   
}  
</script>

