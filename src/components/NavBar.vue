<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    
        <router-link class="nav-link" to="/cars">Cars</router-link>

        <router-link class="nav-link" to="/add">Add Cars</router-link>
      
        <a class="nav-link" href="#">Features</a>
        
        <a class="nav-link" href="#">Pricing</a>
      
        <a class="nav-link" href="#">Disabled</a>
    
  </div>
</nav>
</template>

