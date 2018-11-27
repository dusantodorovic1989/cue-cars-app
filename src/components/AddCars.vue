<template >
<div class="container">
    <form submit="prevent">
    <div class="form-group">
    <input type="text" class="form-control" placeholder="Brand" v-model = "newCar.brand">
    </div>

    <div class="form-group">
    <input type="text" class="form-control" placeholder="Model" v-model = "newCar.model">
    </div>

    <div class="form-group">
    <input type="number" class="form-control" placeholder="Max Speed" v-model = "newCar.maxSpeed">
    </div>

    <div class="form-group">
    <input type="number" class="form-control" placeholder="Number of doors" v-model = "newCar.numberOfDoors">
    </div>

     <div>
    <select aria-placeholder="Select Section" v-model="newCar.year" :value="years">
        
        <option disabled value = ""> Select Year</option>
        <option v-for="(year, index) in years" :key="index"> 
            {{year}}
        </option>
    </select>
    </div>

 <div class="custom-control">
      <input type="checkbox" v-model="newCar.isAutomatic">
      <label class="custom-control">Automatic</label>
    </div>

  <!-- <div>
 <button type="submit" class="btn btn-primary" @click="addCar">Submit</button>
 </div> -->
    </form>
</div>
</template>

<script>
export default {
    data (){
        return {
            years: Array(29).fill(1990).map((n,i) => n +i),
             newCar:{
                  isAutomatic: false
             }
        }
    }   
}  
</script>

