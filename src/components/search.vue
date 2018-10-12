<template>
  <div>
    <div :class="{ipt_box:true,ipt_active:active}">
      <input type="text" v-model= 'iptValue' placeholder="搜索">
    </div>
    <div class="baozidaren" id="daren" style="margin:50px auto;width: 800px;height: 450px;background: #fff"></div>
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
      getBaoZiData() {
        this.$http.get('/baoziEcharts').then((res) => {
          console.log(res)
          this.baozidarenFun(res.data.data)
        })
      },
      baozidarenFun(baozidata) {
        console.log(baozidata)
        let baozi = echarts.init(document.getElementById('daren'))
        let option = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: "cross",
                    crossStyle: {
                      color: "#999"
                    }
                  }
              },
              legend: {
                 // data:['esprit官方旗舰店','veromoda官方旗舰店'],
                  icon: "rect",
                  left: 10,
                  top: 15,
                  itemWidth: 10,
                  itemHeight: 10
              },
              grid: {
                left: "0%",
                right: "4%",        
                bottom: "3%",
                containLabel: true
              },
              toolbox: {
                  feature: {
                      saveAsImage: {}
                  }
              },
              xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  axisPointer: {
                    type: "shadow"
                  },
                  data: []
              },
              yAxis: {
                type: "value",
                axisLabel: {
                  formatter: "{value}"
                }
              },
              series: []
        };
        let arrData = []
        let xAxisData = []
        baozidata.forEach((item,idnex) => {
          arrData  = []
          xAxisData = []
          item.dataList.forEach((val,idx) => {
            arrData.push(val.onSaleCount)
          })
          item.dataList.forEach((ite,ind) => {
              xAxisData.push(ite.dataTime)
          })
          option.xAxis.data = xAxisData
          option.series.push({
            name: item.shopName,
            type: "line",
            itemStyle: {
              normal: {
                color: 'pink'
              }
            },
             data:arrData
          })  
        })
        baozi.setOption(option)
      }
    },
    created() {
      this.arr.forEach((item,idx)=>{
        console.log(this.arr1,this.arr1[idx],'dd')
      })
    },
    mounted() {
      this.getBaoZiData()
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