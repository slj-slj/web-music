<template>
    <div class="Header">
        
        <div class="text">
            <div class="iconfont logo">&#xe61a;</div>
            YiMu Music
            </div>
        <router-link to="/">
            <div class="iconfont main">&#xe629;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'HomeHeader'
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable";

    .Header
        display flex
        height 3rem
        background-color #000
        text-align center
        line-height 3rem
        .text
            flex 1
            font-size $font-size-large
            height 3rem
            line-height 3rem
            .logo
                font-size 2rem
                display inline
        .main
            position absolute
            right .3rem
            color $color-theme
            font-size 1.5rem
            top .1rem
</style>
