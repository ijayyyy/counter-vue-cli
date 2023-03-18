<template>
  <center>
    <div class="counter">
      <h1>Count:</h1>
      <p class="counter-state">{{ counter }}</p>
      <input
        class="input"
        type="number"
        v-model="newCounterValue"
      />
      <button class="update" @click="updateCounterManually">UpdateCount</button>
      <div class="Inc-dec">
        <button class="increment" @click="increment">Increment</button>
      <button class="decrement" @click="decrement">Decrement</button>
      </div>
      
      <button class="reset" @click="reset">Reset</button>
      
      
      <div class="back">
        <router-link to="/">Back to Home Page</router-link>
      </div>
    </div>
  </center>
</template>

<script>
export default {
  data() {
   return {
    newCounterValue: 0
   }
  },
  computed: {
    counter() {
      return this.$store.getters.counter;
    },

  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    reset() {
      this.$store.commit("reset");
    },
    updateCounterManually() {
      this.$store.dispatch('updateCounter', this.newCounterValue)
      this.newCounterValue = 0
    }
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  margin: 25px;
  padding: 0;
  
}
.counter {
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
 
  
}
.counter-state {
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
}
button {
  border-color: #d5d5d5;
  color: #fff;
  background-color: #333;
  padding: 20px 25px;
  margin: 5px 0;
  margin-right: 7px;
  border-radius: 30px;
  border: 2px solid #e5e5e5;
  box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
}
.increment {
  font-size: 15px;
  padding: 15px;
  margin: 20px;
}
.decrement {
  font-size: 15px;
  padding: 14px;
  margin: 20px;
}
.reset {
  font-size: 15px;
  padding: 7px;
  margin: 10px;
}
.back {
  margin: 30px;
}
.input {
  padding: 10px;
  border-radius: 40px;
}
.update {
  padding: 10px;
  border-radius: 40px;
}
.Inc-dec {
  margin: 16px;
}
</style>
