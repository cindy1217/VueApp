<template>
    <div>
      <!-- <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
          <ul class="item">
              <li v-for="(item,index) in newsList" :key="index">
                <img :src="item.title" alt="" style="width:300px;height: 170px">
              </li>
          </ul>
      </vue-seamless-scroll> -->
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in newsList" :key="index">
            <img :src="item.title" :alt="index">
          </li>
        </ul>
      </div>
      <div class="login_submit" @click="login">登陆</div>
    </div>
</template>
<script>
    import vueSeamlessScroll from 'vue-seamless-scroll'
    export default {
        data () {
        return {
            newsList: [
                {
                  'title': require('../assets/img/headBg.png')
                }, 
                {
                  'title': require('../assets/img/headBg.png')
                },
                {
                  'title': require('../assets/img/headBg.png')
                },
                {
                  'title': require('../assets/img/headBg.png')
                },
                {
                  'title': require('../assets/img/headBg.png')
                },
                {
                  'title': require('../assets/img/headBg.png')
                }
              ]
            }
        },
        computed: {
            optionLeft () {
                return {
                  direction: 2,
                  limitMoveNum: 2
                }
            }
        },
        methods:{
          login () {
            localStorage.setItem('IS_LOGIN',true)
            if(!!this.$route.query.redirect) {
              this.$router.push(this.$route.query.redirect)
            } else {
              this.$router.push('/')
            }
          }
        },
        mounted(){
          this.$http.get('/api').then(()=>{
            console.log(111)
          })
        },
        components:{
          vueSeamlessScroll
        }
    }
</script>
<style lang="scss" scoped>
    // .seamless-warp2 {
    //     overflow: hidden;
    //     height: 170px;
    //     width: 1300px;
    //     margin:100px auto;
    //     background:#ccc;
    //     .item {
    //         width: 2656px;
    //         li {
    //             float: left;
    //             margin-right: 32px;
    //             background:red;
    //         }
    //     }
    // }
    .swiper-container{
        width:300px;
        height:200px;
        background:pink;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        .swiper-wrapper{
          .swiper-slide{
            float:left;
            align-items:center;
            width:100px;
            img{
              width:100px;height:100px;
            }
          }   
        }
    }
    .login_submit{
      width:190px;
      height:50px;
      background:#4263B7;
      border-radius:5px;
      margin:0 auto;
      text-align:center;
      line-height:50px;
      color:#fff;
    }
</style>
