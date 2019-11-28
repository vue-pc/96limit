<template>
  <div class="comput">
       <van-stepper v-model="value" />
  </div>

</template>

<script>
export default {
  name:'Cardadd'
  ,
  data(){
    return {
        value: 1
    }
   
  },
 
  
}
</script>

<style lang ='stylus'>
.comput
   position absolute
   right 10px
   display flex
   top 20px
   
</style>