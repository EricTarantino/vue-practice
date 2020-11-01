<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <h1>Dc Heros {{herosCount}}</h1>
  <h2>{{fullname}}</h2>
  <h2>{{fname}}{{lname}}</h2>
   <p> {{randC}} </p>
   <p> {{randC}} </p>
   <p> {{randC}} </p>
   <p> {{randM() }} </p>
   <p> {{randM() }} </p>
   <p> {{randM() }} </p>
   <ul>Something else
     <li v-for="(hero,index) in dcHeros" :key="hero.name">
       <div>{{hero.name}} {{index}} <button @click="removeHero(index)">X</button></div>
       <input/>
      </li>
   </ul>
   <form @submit.prevent="addHero">
    <input v-model.lazy="newHero" placeholder="Type hero name here"/>
    <textarea v-model="newHero"></textarea>
    <button type="submit">Add Hero</button>
   </form>
   <button @click="setFullName">Set full name</button>
</template>

<script>
export default {
  computed:{
    herosCount() {
      return this.dcHeros.length + " heros";
    },
    randC(){ //cached, change just when the dependency (property) changes
      return this.dcHeros.length + " " + Math.random();
    },
    fullname:{
      get (){
        return `Full name is ${this.fname} ${this.lname}`;
      },
      set(fullname){
        let values = fullname.split(" ");
        this.fname = values[0];
        this.lname = values[1];
      },
      
    }
  },
  methods:{
    addHero(){
      if(this.newHero !== ''){
        this.dcHeros.unshift({name:this.newHero}); 
        this.newHero = ''
      }
    },
    removeHero(index){
      this.dcHeros = this.dcHeros.filter((hero ,i) => i !== index);
    },
    randM(){
      return Math.random();
    },
    setFullName(){
      this.fullname = 'Bitfumes Tutorial';
    },
  },
  data() {
    return {
      isDisabled: false,
      newHero: "Aquamannn",
      fname: "Sarthak",
      lname: "Shrivastava",
      dcHeros : [{name:'Supergirl'}, {name:'Superman'}, {name:'Flash'}, {name:'Batman'}]
    }
  },
  mounted(){
    setInterval(()=> {this.count++}, 1000);
  }
}
</script>







