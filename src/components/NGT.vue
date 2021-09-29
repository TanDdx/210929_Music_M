<template>
    <div class='ngt'>
        <a class='ngt-btn' href="javascript:;" :class='{on:$route.path==="/msite"}' @click='goto("/msite")'>
            <span v-if='$route.path==="/msite"'><img src="../assets/img/Msite-active.png" alt=""></span>
            <span v-if='$route.path!="/msite"'><img src="../assets/img/Msite.png" alt=""></span>
            <span>发现</span>
        </a>
        <a class='ngt-btn' href="javascript:;" :class='{on:$route.path==="/podcast"}' @click='goto("/podcast")'>
            <span v-if='$route.path==="/podcast"'><img src="../assets/img/podcast-active.png" alt=""></span>
            <span v-if='$route.path!="/podcast"'><img src="../assets/img/podcast.png" alt=""></span>
            <span>播客</span>
        </a>
        <a class='ngt-btn' href="javascript:;" :class='{on:$route.path==="/mine"}' @click='goto("/mine")'>
            <span v-if='$route.path==="/mine"'><img src="../assets/img/mine-active.png" alt=""></span>
            <span v-if='$route.path!="/mine"'><img src="../assets/img/mine.png" alt=""></span>
            <span>我的</span>
        </a>
        <a class='ngt-btn' href="javascript:;" :class='{on:$route.path==="/attention"}' @click='goto("attention")'>
            <span v-if='$route.path==="/attention"'><img src="../assets/img/attention-active.png" alt=""></span>
            <span v-if='$route.path!="/attention"'><img src="../assets/img/attention.png" alt=""></span>
            <span>关注</span>
        </a>
        <!--  -->
    </div>
</template>

<script>
export default {
    name: 'NGT',
    data () {
        return {
           
        }
    },
    methods: {
        goto(path)
        {
            this.$router.replace(path)
        }
    }

}
</script>

<style scoped>
    .ngt{
        width: 100%;
        height: 50px;
        border-top: 1px solid #bfbfbf;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex: 1;
        justify-content: center;
    }
    a{
        display: block;
    }
    .ngt-btn{
        display: flex;
        font-size: 12px;
        text-align: center;
        align-items: center;
        color: #bcbcbc;
        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 5px;
    }
    .ngt-btn span img{
        width: 20px;
        height: 20px;
    }
    .on {
        color: #dd0027;
    }
</style>