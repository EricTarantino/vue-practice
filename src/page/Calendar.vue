<template>
    <div class="m-auto">
        <h1 class="text-2xl my-2 text-center">Vue Calender</h1>        
        <section class="mx-2 flex justify-between">
            <h2 class="font-bold">{{currentMonthName}}</h2>
            <h2 class="font-bold">{{currentYear}}</h2>
        </section>
        <section class="flex">
            <p class="text-center my-2" style="width:14.28%" v-for="day in days" :key="day">{{day}}</p>
        </section>
        <section class="flex flex-wrap">
            <p 
                class="text-center"
                style="width:14.28%" 
                v-for="num in startDay()" 
                :key="num"
            >
            </p>
            <p 
                class="text-center" 
                style="width:14.28%" 
                v-for="num in daysInMonth()" 
                :key="num" 
                :class="currentDateClass(num)"
            >
                {{num}}
            </p>
        </section>
        <section class="flex justify-between my-4">
            <button class="p-2 border rounded" @click="prev">Previous</button>
            <button class="p-2 border rounded" @click="next">Next</button>
        </section>
    </div>
</template>

<script>
export default {
    data (){
        return {         
            currentDay: new Date().getDay(),   
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'T ue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    },
    methods:{
        daysInMonth(){
            return new Date(this.currentYear, this.currentMonth+1, 0).getDate(); // last day of that month
        },
        startDay(){
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        next() {
            if(this.currentMonth==11){
                this.currentYear++;                
                this.currentMonth = 0;
            } else {
                this.currentMonth++
            }            
        },
        prev(){
            if(this.currentMonth==0){                
                this.currentYear--;
                this.currentMonth = 11;
            } else {                
                this.currentMonth--
            }
        },
        currentDateClass(num){
            const calenderFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
            const currentFullDate = new Date().toDateString()
            return calenderFullDate === currentFullDate ? 'text-yellow-600 font-bold' : '';
        }
    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month:'long'} )
        }
    }
}
</script>

<style>

</style>