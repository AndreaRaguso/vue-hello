const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Juan!' , 
        img: 'img/gatto.jpg'
    
      }
    }
  }).mount('#app')