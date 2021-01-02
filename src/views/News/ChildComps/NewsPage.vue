<template>
  <div class="news-pagina" v-if="Show">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1]"
      :page-size="10"
      layout="prev, pager, next,jumper"
      :total="1000"
      :background="true"
      >
    </el-pagination>
  </div>
</template>

<script>
  export default {
  name: 'NewsPage',
  data () {
    return {
      currentPage:1,
      disabledPage:100
    }
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val;
        this.$store.dispatch('agetNewsData',{key:this.$store.state.keyword,page:(val-1)*10+1}).then(res=>{
        if(res.data.length===1){
          this.disabledPage=val;
          alert('没有数据啦');
        }
      });
      }
    },
  computed:{
    Show(){
      return this.$store.state.newsData.data
    }
  }
}
</script>

<style scoped>
.news-pagina{
  background-color: #F5F5F6;
  padding: 12px 0 30px 0;
}
/deep/ .el-pager li{
  width: 36px;
  height: 36px;
  line-height: 36px;
}

/deep/ .el-pagination button{
  width: 36px;
  height: 36px;
  line-height: 36px;
}
/deep/ .el-pagination{
  display: flex;
  justify-content: space-between;
}
</style>
