<template>
  <div>
    <dl>
      <dt @click="prevClick">prev</dt>
        <ul>
            <li v-for="(item,index) in showArr" :class="{active:index +1 == currentIndex}" @click="handleClick(item.name,index)">{{item.name}}</li>
        </ul>
      <dd @click="nextClick">next</dd>
    </dl> 
  </div>
</template>
<script>
export default {
    data() {
      return {
        currentIndex:1,// 控制背景
        startIndex:2,// 截取中间位置
        dataIndex:0,// 展示数据
        activeStyle:'你是',
        backgroundName:"你是",
        arr:[
          {name:'你是'},
          {name:'真的'},
          {name:'不会'},
          {name:'骗我'},
          {name:'你就'},
          {name:'死定'},
          {name:'了啊'},
          {name:'2啊'},
          {name:'3啊'},
          {name:'3啊'},
        ],
        showArr:[
          {name:'你是'},
          {name:'真的'},
          {name:'不会'},
          {name:'骗我'},
          {name:'你就'}
        ],
        BaoZiDaRenArr:[
          { 
            dataTime: "01.03", 
            FlowList: [
              {
                flowSourceStr:"海内免费",
                flow:"200"
              },  

              {
                flowSourceStr:"自主访问",
                flow:"100"
              },
              {
                flowSourceStr:"付费流量",
                flow:"230"
              },
              {
                flowSourceStr:"海外网站",
              flow:"230"
              }
            ] 
          },
          { 
            dataTime: "01.03", 
            FlowList: [
              {
                flowSourceStr:"海内免费",
                flow:"200"
              },
              {
                flowSourceStr:"自主访问",
                flow:"100"
              },
              {
                flowSourceStr:"付费流量",
                flow:"230"
              },
              {
                flowSourceStr:"海外网站",
                flow:"230"
              }
            ] 
          },
          { 
            dataTime: "01.03", 
            FlowList: [
              {
                flowSourceStr:"海内免费",
                flow:"100"
              },
              {
                flowSourceStr:"自主访问",
                flow:"110"
              },
              {
                flowSourceStr:"付费流量",
                flow:"240"
              },
              {
                flowSourceStr:"海外网站",
                flow:"160"
              }
            ] 
          },
          { 
            dataTime: "01.01", 
            FlowList: [
              {
                flowSourceStr:"海内免费",
                flow:"100"
              },
              {
                flowSourceStr:"自主访问",
                flow:"110"
              },
              {
                flowSourceStr:"付费流量",
                flow:"240"
              },
              {
                flowSourceStr:"海外网站",
                flow:"160"
              }
            ] 
          },
        ],
        mockData:'',
        arr:[
          {
            data:[
              {name:1},
              {name:1},
              {name:1},
              {name:1},
              {name:1},
              {name:1},
              {name:1},
            ]
          },
          {
            data:[
              {name:2},
              {name:2},
              {name:2},
              {name:2},
              {name:2},
              {name:2},
              {name:2},
            ]
          },
          {
            data:[
              {name:3},
              {name:3},
              {name:3},
              {name:3},
              {name:3},
              {name:3},
              {name:3},
            ]
          }
        ]
      }
    },
    methods:{
      nextClick() {
        if(this.currentIndex < this.showArr.length){
          this.currentIndex++  
        }
        if(this.startIndex < this.arr.length - 3){
          this.startIndex++
          this.currentIndex = this.currentIndex-1
          this.showArr = this.arr.slice(this.startIndex-2,this.startIndex+3)
        }
        if(this.dataIndex< this.arr.length) {
          this.dataIndex++
        }
        console.log(this.dataIndex)
      },
      prevClick() {
        if(this.currentIndex > 1){  
          this.currentIndex--  
        }
        if(this.startIndex > 2){
          this.startIndex--
          this.currentIndex = this.currentIndex+1
          this.showArr = this.arr.slice(this.startIndex-2,this.startIndex+3)
        }
        if(this.dataIndex > 0 ) {
          this.dataIndex--
        }
        console.log(this.dataIndex)
      },
      handleClick(name,idx) {
        this.currentIndex = idx+1
        this.arr.forEach((val,index) => {
          if(name == val.name){
            this.dataIndex = index
          }
        })
        console.log(this.dataIndex)
      },
    },
    mounted() {
      console.log('根据this.dataIndex 展示数据')
      let Bao = [],Zi = [], Da = [], Ren = []
      this.BaoZiDaRenArr.forEach((item,index) => {
        item.FlowList.forEach((val,idx) =>{
          if(val.flowSourceStr == '海内免费'){
            Bao.push(val)
          }else if(val.flowSourceStr == '自主访问') {
            Zi.push(val)
          }else if(val.flowSourceStr == '付费流量') {
            Da.push(val)
          }else if(val.flowSourceStr == '海外网站') {
            Ren.push(val)
          }  
        }) 
      })
      console.log(Bao,'包',Zi,'子',Da,'大',Ren,'人')
    }
}
</script>
<style lang="scss">
  dl {
    width: 300px;
    height: 30px;
    background: #fff;
    margin: 50px auto;
    display:flex;
    justify-content: space-between;
    dt,dd{
      background:#ccc;
      width: 30px;
      line-height:30px;
      text-align:center;
    }
    ul{
      flex:1;
      display:flex;
      justify-content: space-around;
      li{
        width:30px;
        box-sizing:border-box;
        height: 30px;
        border:1px solid red;
        text-align:center;
        line-height:30px;
      }
      .active{
        background:red;
      }
    }  
  }
</style>