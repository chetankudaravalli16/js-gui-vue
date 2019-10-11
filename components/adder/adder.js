const add = (x) => { return   Math.PI * x * x }

const adder = new Vue({
  el: '#adder',
  data: {
    
    firstNumber: 5,
  
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      
      return ` your area is ${add(i)}.`
    }
  }
})