<template>
    <div class="recommend">
        <div class="recommend-content">
            <recommend-slider :recommends="recommends"></recommend-slider>
            <div class="recommend-list">
                <h1 class="list-title">热门歌单推荐</h1>
                <ul>

                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import RecommendSlider from '../../../base/slider/slider'
import {getRecommend} from '../../../api/recommend'
import {ERR_OK} from '../../../api/config'
export default {
    name:'HomeRecommend',
    data(){
        return {
            recommends : []
        }
    },
    created () {
        this._getRecommend()
    },
    methods: {
        _getRecommend(){
            getRecommend().then((res)=>{
                if(res.code === ERR_OK){
                    this.recommends=res.data.slider            
                }
            })
        }
    },
    components: {
        RecommendSlider
    }
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"

    .recommend
        position fixed
        top 5.5rem
        bottom 0
        .recommend-content
            height 100%
            overflow hidden
            .recommend-list
                .list-title
                    height 3rem
                    line-height 3rem
                    text-align center
                    font-size $font-size-medium-x
                    color $color-theme
                .item
                    display flex
                    box-sizing border-box
                    align-items center
                    padding 0 .8rem .8rem .8rem
                    .icon
                        flex 0 0 2.5rem
                        width 2.5rem
                        padding-right .8rem
                    .text
                        display flex
                        flex-direction columns 
                        justify-content center
                        flex 1
                        line-height .8rem
                        overflow hidden
                        font-size $font-size-medium
                        .name
                            margin-bottom .4rem
                            color $color-text
                        .desc
                            color $color-text-d
            .loading-container
                position absolute
                width 100%
                top 50%
                transform translateY(-50%)
</style>
