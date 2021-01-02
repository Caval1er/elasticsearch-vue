<template>
  <div class="back">
    <img @click="changeBack" src="~assets/img/更新.svg" alt="" class="back-img">
  </div>
</template>

<script>
  export default {
  name: 'HomeBack',
  props:{
    backgrounds:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  data () {
    return {
      index:0
    }
  },
  methods: {
    changeBack(){
      if(this.backgrounds!=null){
        if(this.index>=this.backgrounds.length){
          this.index=0;
        }else{
          document.body.style.backgroundImage=`url(${this.backgrounds[this.index]})`;
          this.index++;
        }
      }
    }
  },
}
</script>

<style scoped>
.back-img{
  width: 70px;
  cursor: pointer;
  transition: all 0.3s;
}
.back-img:hover{
  transform: translateY(-3%);
}
</style>
