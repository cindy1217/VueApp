<template>
    <div>
      <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
          <ul class="item">
              <li v-for="(item,index) in newsList" :key="index">
                <img :src="item.title" alt="" style="width:300px;height: 170px">
              </li>
          </ul>
      </vue-seamless-scroll>
    </div>
</template>
<style lang="scss" scoped>
    .seamless-warp2 {
        overflow: hidden;
        height: 170px;
        width: 1300px;
        margin:100px auto;
        background:#ccc;
        .item {
            width: 2656px;
            li {
                float: left;
                margin-right: 32px;
                background:red;
            }
        }
    }
</style>
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
                },
                {
                  'title': require('../assets/img/headBg.png')
                },
                {
                  'title': require('../assets/img/right.png')
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
        components:{
          vueSeamlessScroll
        }
    }
</script>