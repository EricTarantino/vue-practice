<template>
    <div class="m-auto">
        <h1 class="text-2xl my-2 text-center">Dc Heros {{herosCount}}</h1>
        <ul>
            <li class="flex justify-between" v-for="(hero,index) in dcHeros" :key="hero.name">
                <div>
                  {{hero.name}}
                </div>
                <button @click="removeHero(index)">X</button>
            </li>
        </ul>
        <form class="mt-10" @submit.prevent="addHero">
            <input class="border rounded" v-model.lazy="newHero" placeholder="Type hero name here"/>
            <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
        </form>      
    </div>
</template>

<script>
export default {
    data(){
        return {
            dcHeros : [{name:'Supergirl'}, {name:'Superman'}, {name:'Flash'}, {name:'Batman'}],
            isDisabled: false,
            newHero: "",
        }
    },
    computed:{
        herosCount() {
        return "- " + this.dcHeros.length + " heros";
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
        this.fullname = 'Tutorial';
        },
    },
}
</script>

<style>

</style>