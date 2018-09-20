<template>
  <div>
    <div :class="{ipt_box:true,ipt_active:active}">
      <input type="text" v-model= 'iptValue' placeholder="搜索">
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        iptValue:'',
        active:false,
        arr:['ddd',34,3,4,4,4],
        arr1:[{name:1}]
      }
    },
    watch:{
      iptValue(n,o){
        if(!!n){
          this.active = true
        }else{
          this.active = false
        }
        console.log(n)
      }
    },
    methods:{
    },
    created(){
      this.arr.forEach((item,idx)=>{
        console.log(this.arr1,this.arr1[idx],'dd')
      })
    }
  }
</script>
<style lang="scss">
  .ipt_box{
    margin: 0 auto;
    width: 200px;
    height: 30px;
    border-radius:15px;
    border:1px solid #ccc; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::after{
        content:'';
        display: block;
        position: absolute;
        left:32%;
        top:25%;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border:1px solid #ccc;
        pointer-events: none;
    }
    input{
      width:180px;
      height: 30px;
      text-align: center; 
    }
  }
  .ipt_active{
    &::after{
      display: none;
    }
  }
</style>