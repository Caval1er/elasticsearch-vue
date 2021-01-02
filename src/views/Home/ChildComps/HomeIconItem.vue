<template>
  <div class="icon">
    <a :href="data.url">
      <img :src="data.imgSrc" class="icon-img">
    </a>
    <p>{{data.text}}</p>
  </div>
</template>

<script>
  export default {
    props:{
      data:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    name: 'HomeIcon',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  /* icon的样式 */
  .icon{
    width:100px;
  }
  .icon-img{
    border-radius: 50%;
    max-width: 100px;
    transition: transform 0.3s;
  }

  .icon-img:hover{
    transform: translateY(-3%);
    box-shadow: 2px 2px 2px cornflowerblue;
  }
  .icon p{
    text-align: center;
  }
</style>
