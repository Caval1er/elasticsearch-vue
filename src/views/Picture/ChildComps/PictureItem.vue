<template>
  <div class="picture-item">
  </div>
</template>

<script>
  export default {
  name: 'PictureItem',
  props:{
    picturesData:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.picture-img{
  height: 200px;
}
.picture-item{
  float: left;
}
</style>
