<template>
  <div id="dispense">
    <div class="mask"></div>
    <div class="sorroyCon">
      <span>抱歉!</span>
      <span>未找到相关车辆的停车信息</span>
    </div>
    <div class="content-car-number">
      <div class="car-content-title">
        <span>请输入车牌号</span>
          </label>
      </div>
      <div class="content-section">
        <span>最多可绑定3辆车牌号</span>
        <div class="content-section-flex flex-card">
          <div class="content-section-flex flex-card-border">
            <div class="provinceBtn">
              <button id="font" class="flex-btn" @click="btnClickYue" v-bind:class="{isClick: isYue }">
                {{areaName}}
              </button>
              <span class="blank-border blank-border-first"></span>
              <button id='letter' class="flex-btn" @click="btnClickA" v-bind:class="{isClick: isA}">
                {{areaLetter}}
              </button>
            </div>
            
            <div class="flex-mid"><span></span></div>
            <div class="flex-btns">
              <button id='numOne' @click="btnClickNum('one')" v-bind:class="{isNumClick: isNumOne }">{{numOne}}</button>
              <button id='numTwo' @click="btnClickNum('two')" v-bind:class="{isNumClick: isNumTwo }">{{numTwo}}</button>
              <button id='numThree' @click="btnClickNum('three')" v-bind:class="{isNumClick: isNumThree }">{{numThree}}
               </button>
              <button id='numFour' @click="btnClickNum('four')" v-bind:class="{isNumClick: isNumFour }">{{numFour}}
               </button>
              <button id='numFive' @click="btnClickNum('five')" v-bind:class="{isNumClick: isNumFive }">{{numFive}}
               </button>
              <button id='numSix' @click="btnClickNum('six')" v-bind:class="{isNumClick: isNumSix }" v-html="numSix">
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="searchPay-btn">
          <button @click="addCar">添加</button>
        </div>
    </div>
    <div class="carCon">
      <span>您绑定的车牌号</span>
      <div class="carList">
        <div class="firstCar">
          <li>
            <span>苏<span>A5NK01</span><i>默认</i></span>
            <img src="../assets/img/down_03.png" alt="" />
          </li>
          <li class="operation">
            <span>设为默认</span>
            <span>解除绑定</span>
            <span>开通自动支付</span>
          </li>
        </div>
        <div>
          <li>
            <span>苏<span>A5NK01</span></span>
            <img src="../assets/img/down_03.png" alt="" />
          </li>
        </div>
      </div>
    </div>
    <div class="keyboard" v-if="keyboardShow" :class='{animationDown:isDown,animationUp:isUp}'>
      <button class="btn-complete" @click="completeClick"><span>完成</span></button>
      <div v-if="keyboard == 'txt'">
        <div class="keyboard-row" v-for="(item,rows) in carTxt">
          <button class="keyboard-row-item" v-for="(i,index) in item.name" @click="btnWordClick(rows,index,i)">{{i}}
            </button>
        </div>
        <div class="keyboard-row">
          <!-- <div class="keyboard-row-items"> -->
          <button class="keyboard-row-item bottom" @click="btnBottomClick('新')">新</button>
          <button class="keyboard-row-item bottom" @click="btnBottomClick('临')">临</button>
          <button v-for="j in noneBottomtxt" class="none-botton">{{j}}</button>
          <div class="keyboard-row-item clear" @click="clearClick">
            <img src="../assets/img/icon_input_delete.png" alt="删除">
          </div>
        </div>
      </div>
      <div v-if="keyboard == 'num'">
        <div class="keyboard-row" v-for="(item,rows) in carNum">
          <button :disabled="!isSelectl?isDisable && i<10 :isDisable&& rows!=0 " class="keyboard-row-item" v-for="(i,index) in item.name" @click="btnWordClick(rows,index,i)">{{i}}
            </button>
        </div>
        <div class="keyboard-row">
          <!-- <div class="keyboard-row-bottom"> -->
          <button :disabled="isSelectl" v-for="item in carNumBottom" class="keyboard-row-item bottom" @click="btnBottomNumClick(item)">{{item}}
            </button>
          <button v-for="j in noneBottom" class="none-botton">{{j}}</button>
          <div class="keyboard-row-item clear" @click="clearClick">
            <img src="../assets/img/icon_input_delete.png" alt="删除">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'carManage',
    data() {
      return {
        isFeeHourClick: false,
        checkbox: false,
        isDown: false,
        isUp: false,
        selected: null,
        isSelectx: false,
        isSelectl: false,
        key: 1,
        areaName: '',
        areaLetter: '',
        numOne: '',
        numTwo: '',
        numThree: '',
        numFour: '',
        numFive: '',
        numSix: '<img src="./src/assets/img/newEnergy.png" alt="">',
        isYue: false,
        keyboardShow: false,
        keyboard: false,
        isA: false,
        isNumOne: false,
        isNumTwo: false,
        isNumThree: false,
        isNumFour: false,
        isNumFive: false,
        isNumSix: false,
        isDisable: false,
        isOne: false,
        isTwo: false,
        isThree: false,
        isFour: false,
        isFive: false,
        isSix: false,
        isSeven: false,
        isEight: false,
        isOther: false,
        carTxt: [{
            name: ['粤', '京', '冀', '沪', '津', '晋', '蒙', '辽', '吉', '黑']
          },
          {
            name: ['苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '桂']
          },
          {
            name: ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁']
          }
        ],
        carNumBottom: ['W', 'X', 'Y', 'Z'],
        noneBottom: ['', '', '', ''],
        noneBottomtxt: ['', '', '', '', '', ''],
        carNum: [{
            name: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
          },
          {
            name: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']
          },
          {
            name: ['L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']
          }
        ],
        addedCarNum: ''
      }
    },
    methods: {
      carTypeChange(val) {
        this.isNumOne = false
        this.isNumTwo = false
        this.isNumThree = false
        this.isNumFour = false
        this.isNumFive = false
        this.isNumSix = false
        if(!val) { // 切换到普通车牌
          if(this.numFour) {
            this.isNumFive = true
            this.key = 7
          }
        } else { // 切换到新能源车牌
          if(this.numFive) {
            this.isNumSix = true
            this.key = 8
          }
        }
      },
      btnClickYue() {
        this.isYue = true
        this.isA = false
        this.isUp = true
        this.isNumOne = false
        this.isNumTwo = false
        this.isNumThree = false
        this.isNumFour = false
        this.isNumFive = false
        this.isNumSix = false
        this.keyboardShow = true
        this.keyboard = 'txt'
        this.key = 1
      },
      btnWordClick(rows, index, i) {
        this.selected = i
        if(this.key === 1) {
          if(this.areaName === '临') {
            this.areaLetter = ''
            this.numOne = ''
            this.numTwo = ''
            this.numThree = ''
            this.numFour = ''
            this.numFive = ''
            this.numSix = ''
          }
          this.areaName = i
          this.isSelectl = false
          document.getElementById('letter').click()
        } else if(this.key === 2) {
          this.areaLetter = i
          document.getElementById('numOne').click()
        } else if(this.key === 3) {
          this.numOne = i
          document.getElementById('numTwo').click()
        } else if(this.key === 4) {
          this.numTwo = i
          document.getElementById('numThree').click()
        } else if(this.key === 5) {
          this.numThree = i
          document.getElementById('numFour').click()
        } else if(this.key === 6) {
          this.numFour = i
          document.getElementById('numFive').click()
        } else if(this.key === 7) {
          this.numFive = i
          if(this.checkbox) {
            document.getElementById('numSix').click()
          }
        } else if(this.key === 8) {
          this.numSix = i
        }
        if(this.key === 7 || this.key === 8) {
          this.carNumBottom = ['W', 'X', 'Y', 'Z', '港', '澳', '学']
          this.noneBottom = ['']
        } else if(this.key === 3 || this.key === 4 || this.key === 5 || this.key === 6) {
          this.carNumBottom = ['W', 'X', 'Y', 'Z']
          this.noneBottom = ['', '', '', '']
        }
      },
      btnBottomClick(val) {
        if(val === '新') {
          if(this.areaName === '临') {
            this.areaLetter = ''
            this.numOne = ''
            this.numTwo = ''
            this.numThree = ''
            this.numFour = ''
            this.numFive = ''
            this.numSix = ''
          }
          this.areaName = '新'
          this.isSelectx = true
          this.isSelectl = false
          document.getElementById('letter').click()
        } else if(val === '临') {
          this.areaName = '临'
          this.isSelectl = true
          this.isSelectx = false
          this.isDisable = true
          this.areaLetter = ''
          this.numOne = ''
          this.numTwo = ''
          this.numThree = ''
          this.numFour = ''
          this.numFive = ''
          this.numSix = ''
          document.getElementById('letter').click('isLin')
        }
      },
      btnBottomNumClick(i) {
        this.selected = i
        if(this.key === 2) {
          this.areaLetter = i
          document.getElementById('numOne').click()
        } else if(this.key === 3) {
          this.numOne = i
          document.getElementById('numTwo').click()
        } else if(this.key === 4) {
          this.numTwo = i
          document.getElementById('numThree').click()
        } else if(this.key === 5) {
          this.numThree = i
          document.getElementById('numFour').click()
        } else if(this.key === 6) {
          this.numFour = i
          document.getElementById('numFive').click()
        } else if(this.key === 7) {
          this.numFive = i
          if(this.checkbox) {
            document.getElementById('numSix').click()
          }
        } else if(this.key === 8) {
          this.numSix = i
        }
      },
      btnClickA() {
        this.isDisable = true
        this.isA = true
        this.isYue = false
        this.isUp = true
        this.isNumOne = false
        this.isNumTwo = false
        this.isNumThree = false
        this.isNumFour = false
        this.isNumFive = false
        this.isNumSix = false
        this.keyboardShow = true
        this.keyboard = 'num'
        this.key = 2
      },
      btnClickNum(name) {
        if(this.isSelectl) {
          this.isDisable = true
        } else {
          this.isDisable = false
        }
        this.keyboard = 'num'
        this.keyboardShow = true
        this.isYue = false
        this.isA = false
        this.isNumOne = false
        this.isNumTwo = false
        this.isNumThree = false
        this.isNumFour = false
        this.isNumFive = false
        this.isNumSix = false
        this.isUp = true
        if(name === 'one') {
          this.isNumOne = true
          this.key = 3
        } else if(name === 'two') {
          this.isNumTwo = true
          this.key = 4
        } else if(name === 'three') {
          this.isNumThree = true
          this.key = 5
        } else if(name === 'four') {
          this.isNumFour = true
          this.key = 6
        } else if(name === 'five') {
          this.isNumFive = true
          this.key = 7
        } else if(name === 'six') {
          this.isNumSix = true
          this.key = 8
        }
        if(name === 'five' || name === 'six') {
          this.carNumBottom = ['W', 'X', 'Y', 'Z', '港', '澳', '学']
          this.noneBottom = ['']
        } else {
          this.carNumBottom = ['W', 'X', 'Y', 'Z']
          this.noneBottom = ['', '', '', '']
        }
      },
      completeClick() {
        this.isYue = false
        this.isA = false
        this.isNumOne = false
        this.isNumTwo = false
        this.isNumThree = false
        this.isNumFour = false
        this.isNumFive = false
        this.isNumSix = false
        this.isUp = false
        this.isDown = true
        this.keyboardShow = false
      },
      clearClick() {
        if(this.key === 1) {
          this.areaName = ''
        } else if(this.key === 2) {
          document.getElementById('font').click()
          this.areaLetter = ''
        } else if(this.key === 3) {
          document.getElementById('letter').click()
          this.numOne = ''
        } else if(this.key === 4) {
          document.getElementById('numOne').click()
          this.numTwo = ''
        } else if(this.key === 5) {
          document.getElementById('numTwo').click()
          this.numThree = ''
        } else if(this.key === 6) {
          document.getElementById('numThree').click()
          this.numFour = ''
        } else if(this.key === 7) {
          document.getElementById('numFour').click()
          this.numFive = ''
        } else if(this.key === 8) {
          document.getElementById('numFive').click()
          this.numSix = ''
        }
      },
      addCar() {
        var num
        if(!this.numSix) {
          num = this.areaName + this.areaLetter + this.numOne + this.numTwo + this.numThree + this.numFour + this.numFive
        } else if(this.numSix) {
          num = this.areaName + this.areaLetter + this.numOne + this.numTwo + this.numThree + this.numFour + this.numFive + this.numSix
        }
        if(num === '') {
          this.$dialog.toast({
            mes: '请输入车牌',
            timeout: 1000
          })
        } else if(!this.checkbox && (this.areaName === '' || this.areaLetter === '' || this.numOne === '' || this.numTwo === '' || this.numThree === '' || this.numFour === '' || this.numFive === '')) {
          this.$dialog.toast({
            mes: '请输入完整车牌',
            timeout: 1000
          })
        } else if(this.checkbox && (this.areaName === '' || this.areaLetter === '' || this.numOne === '' || this.numTwo === '' || this.numThree === '' || this.numFour === '' || this.numFive === '' || this.numSix === '')) {
          this.$dialog.toast({
            mes: '请输入完整车牌',
            timeout: 1000
          })
        } else {
          // let data = {
          //     vehiclenum: num
          // }
          // this.$http.post(ADD_VEHICLE, data).then(res => {
          //   if (res.data.ret === 0) {
          //     this.addedCarNum = num
          //     this.$router.push({name: 'AddSuccess', params: {addedCarNum: this.addedCarNum}})
          //   } else {
          //     this.$dialog.toast({mes:res.data.message,timeout:1200})
          //   }
          // })
        }
      }
    },
    mounted() {
    var res = ( navigator.userAgent.toLowerCase().match(/qq/i) == 'qq') ? ( navigator.userAgent.toLowerCase().match(/mqqbrowser/i) == 'mqqbrowser' ? false : true ) : false
      alert(res)
      //alert( navigator.userAgent.toLowerCase().match(/mqqbrowser/i) == 'mqqbrowser' ? false : true )
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.areaName = ''
        vm.areaLetter = ''
        vm.numOne = ''
        vm.numTwo = ''
        vm.numThree = ''
        vm.numFour = ''
        vm.numFive = ''
        vm.numSix = ''
      })
    }
  }
</script>

<style lang="scss" scoped>
  body,html{
    background: #f2f2f2;
  }
  #dispense {
    .navbar {
      .right {
        a {
          font-size: 0.4rem;
          color: #ffc200;
        }
      }
    }
    .ze-checkbox>input[type=checkbox] {
      position: absolute;
      left: -9999em;
    }
    .ze-checkbox>input[type=checkbox]:checked+.ze-checkbox-icon {
      background-color: currentColor;
      border-color: #ffC400;
    }
    .ze-checkbox-icon {
      border: 1px solid #ccc;
      /*no*/
      border-radius: 2px;
      display: inline-block;
      position: relative;
      z-index: 10;
      vertical-align: bottom;
      pointer-events: none;
      >i {
        content: "";
        position: absolute;
        top: 45%;
        left: 50%;
        border: 3px solid #ffC400;
        /*no*/
        border-top: 0;
        border-left: 0;
        -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
        transform: translate(-50%, -50%) rotate(45deg) scale(0);
      }
    }
    .ze-checkbox>input[type=checkbox]:checked+.ze-checkbox-icon>i {
      -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(1);
      transform: translate(-50%, -50%) rotate(45deg) scale(1);
      -webkit-transition: all .2s ease-in-out;
      transition: all .2s ease-in-out;
    }
    .content-car-number {
      padding: 0.89rem 0 0;
      background: url(../assets/img/carBg.png) no-repeat center;
      background-size:100% 100%;
      height: 7.09rem;
      box-sizing: border-box;
      .car-content-title {
        display: flex;
        justify-content: center;
        margin-bottom: 0.74rem;
        line-height:0.61rem;
        span {
          font-size: 0.61rem;
          color: #fff;
        }
        .ze-checkbox {
          display: flex;
          align-items: center;
        }
        .ze-radio-text {
          font-size: 0.37rem;
        }
        .ze-checkbox-icon {
          color: #FFEDB1 !important;
          margin-right: 0.1rem;
        }
      }
      .content-section {
        margin: 0 auto 0.34rem;
        width: 9.06rem;
        height: 2.78rem;
        padding: 0.42rem 0.26rem 0 0.26rem;
        box-sizing: border-box;
        background: #fff;
        border-radius: 7px;
        -moz-box-shadow:0px 0px 0.13rem rgba(159,159,159,0.43); 
        -webkit-box-shadow:0px 0px 0.13rem rgba(159,159,159,0.43); 
        box-shadow:0px 0px 0.13rem rgba(159,159,159,0.43);
        span{
          color: #7cb3ff;
          font-size: 0.37rem; 
          line-height: 0.37rem;
          margin-bottom: 0.42rem;
          display: inline-block;
        }
        .content-section-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.48rem;
          .provinceBtn{ 
              position: relative;
              display: flex;
              align-items: center;
              height: 1.17rem;
              box-sizing:border-box;
              &:after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                border: 1px solid #b7b7b7;
                border-radius: 8px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 200%;
                height: 200%;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
                -webkit-transform-origin: left top;
                transform-origin: left top;
              }
              button{
                z-index: 10;
              }
          }
          .blank-border {
            height: 0.96rem;
            width: 1px;
            /*no*/
            border-right: 1px solid #dcdcdc;
            /*no*/
            margin-top: 0.4rem!important;
            float: left;
            z-index: 1;
            &.blank-border-first {
              margin-top: 0px;
            }
          }
          &.flex-card {
            .flex-btn {
              width: 0.97rem;
              height: 1.17rem;
              line-height: 1.17rem;
              border: none;
              text-align: center;
              background: transparent;
              font-size: 0.48rem;
              color: #333;
              border-radius: 8px !important;
            }
            .flex-btns {
              text-align: center;
              background: #fff;
              width: fit-content;
              position: relative;
              height: 1.17rem;
              button {
                width: 0.96rem;
                height: 1.17rem;
                border: none;
                font-size: 0.48rem;
                border-radius: 50%;
                background: transparent;
                float: left;
                margin-left: 0.09rem;
                z-index: 2;
                position: relative;
                &:first-child {
                  margin-left: 0;
                }
                &:after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    border: 1px solid #b7b7b7;
                    border-radius: 8px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 200%;
                    height: 200%;
                    -webkit-transform: scale(0.5);
                    transform: scale(0.5);
                    -webkit-transform-origin: left top;
                    transform-origin: left top;
                  }
              }
              #numSix{
                &:after{
                  border:1px dashed #b7b7b7;  
                }
                padding: 0.04rem;
                img{
                  /*width:0.88rem;
                  height: 1.1rem;*/
                  width: 100%;
                  margin: 0 auto;
                }
              }
            }
            .flex-mid {
              margin: 0.5rem 0.06rem 0;
              span {
                display: block;
                width: 0.12rem;
                height: 0.12rem;
                border-radius: 50%;
                background: #c5c5c5;
              }
            }
            .isClick {
              &:after{
                border: 1px solid #52a0f4 !important;
                border-radius: 8px;
              }
              /*no*/
              z-index: 50;
              border-radius: 8px;
            }
            .isNumClick {
              &:after{
                border-radius: 8px !important;
                border: 1px solid #52a0f4 !important; 
              }
              
              /*no*/
              z-index: 10;
              background-color: #fff !important;
            }
          }
        }
      }
    }
    .searchPay-btn {
      text-align: center;
      /*background-color: #f6f6f6;*/
      margin: 0 0.42rem 0;
      button {
        width: 9.06rem;
        height: 1.17rem;
        color: #ffffff;
        font-size: 0.4rem;
        background: #52a0f4;
        border: none;
        border-radius: 6px;
        &.searchPay-btn-click {
          box-shadow: 0px 5px 10px 0px rgba(255, 227, 135, 1);
          background: #ffc200;
          color: #101010;
        }
      }
    }
    .keyboard {
      width: 100%;
      height: 6.69rem;
      position: fixed;
      bottom: -6.69rem;
      background: #eeeeee;
      z-index: 10;
      &.animationDown {
        animation: slide_dowms 0.3s ease-out;
        animation-fill-mode: forwards;
      }
      &.animationUp {
        animation: slide_ups 0.3s ease-out;
        animation-fill-mode: forwards;
      }
      .btn-complete {
        height: 0.96rem;
        text-align: right;
        color: #52a0f4;
        font-size: 0.4rem;
        width: 100%;
        background: #fff;
        border: none;
        border-top: 1px solid #eee;
        margin-bottom: 0.4rem;
        span {
          margin-right: 0.4rem;
        }
      }
      .keyboard-row {
        margin-top: 0.26rem;
        display: flex;
        justify-content: space-between;
        padding: 0 8px;
        color: #333;
        &:first-child {
          margin-top: 0;
        }
        .keyboard-row-items {
          display: flex;
          justify-content: left;
        }
        .keyboard-row-bottom {
          display: flex;
          justify-content: space-between;
        }
        .keyboard-row-item {
          width: 0.88rem;
          height: 1.06rem;
          background: #fff;
          font-size: 0.45rem;
          text-align: center;
          border: 1px solid #ccc;
          /*no*/
          border-radius: 10px;
          color: #333;
          &.bottom {
            height: 1.06rem;
            width: 0.88rem;
            line-height: 1.06rem;
            background: #fff;
            color: #333;
            /*margin-right: 0.08rem;*/
          }
          &.clear {
            width: 1.86rem;
            height: 1.06rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 0.82rem;
            }
          }
        }
        .none-botton {
          border: none;
          height: 1.06rem;
          width: 0.88rem;
          visibility: hidden;
        }
      }
      button {
        &:active {
          background: #f4f4f4 !important;
          color: #999 !important;
        }
      }
    }
    .carCon{
      padding:0.8rem 0.46rem 0;
      >span{
        font-size: 0.42rem;
        line-height: 0.42rem;
      }
      .carList{
          margin-top: 0.2rem;
          box-sizing: border-box;
          background: #fff;
          border-radius: 7px;
          padding-bottom: 0.2rem;
          -moz-box-shadow: 0px 0px 0.13rem rgba(159, 159, 159, 0.43);
          -webkit-box-shadow: 0px 0px 0.13rem rgba(159, 159, 159, 0.43);
          box-shadow: 0px 0px 0.13rem rgba(159, 159, 159, 0.43);
        div{
          position: relative;
          margin: 0 0.2rem; 
          &:after{
            content: '';
              position: absolute;
              top: 0;
              left: 0;
              border-top: 1px solid #e9e9e9;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              width: 200%;
              height: 200%;
              -webkit-transform: scale(0.5);
              transform: scale(0.5);
              -webkit-transform-origin: left top;
              transform-origin: left top;
          }
          &.firstCar:after{
            display: none;
          }
          &.firstCar{
            li{
              span{
                color: #52a0f4;
                display:flex;
                align-items:center;
                i{
                  background: url(../assets/img/blueBg.png) no-repeat center;
                  background-size: 100% 100%;
                  display: inline-block;
                  width:0.82rem;
                  height: 0.41rem;
                  font-size: 0.32rem;
                  text-align: center;
                  line-height: 0.41rem;
                  margin-left: 0.17rem;
                }
              }
              
            }
          }
          li{
            height: 1.34rem;
            display:flex;
            justify-content:space-between; 
            align-items: center;
            img{
              /*width: 0.17rem;
              height: 0.1rem;*/
              width: 3%;
            }
            span{ 
              font-size: 0.4rem;
              span{
                font-family: arial;
              }
            }
            &.operation{
              height: 1.17rem;
              span{
                display: inline-block;
                text-align: center;
                background: #e9f2fc;
                font-size: 0.34rem;
                color: #52a0f4;
                height: 100%;
                width: 33.1%;
                line-height: 1.34rem;
                margin-right: 0.01rem;
              }
            }
          } 
        }
        
      }
    }
    @keyframes slide_ups {
      from {
        bottom: -6.69rem;
      }
      to {
        bottom: 0px;
      }
    }
    @keyframes slide_dowms {
      from {
        bottom: 0px;
      }
      to {
        bottom: -6.69rem;
      }
    }
    button:disabled {
      background: #f4f4f4 !important;
      color: #8f8f8f !important;
    }
    .active {
      &:active {
        background: #f4f4f4 !important;
        color: #999 !important;
      }
    }
  }
</style>