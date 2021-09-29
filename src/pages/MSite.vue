<template>
    <div class='msite'>
        <div class='header'>
            <mSiteHeader/>
            <div class='banner'>
                
            </div>
        </div>
        
    </div>
</template>

<script>
import mSiteHeader from '../components/mSiteHeader'

export default {
    name: 'Msite',
    data () {
        return {
            
        }
    },
    components: {
        mSiteHeader
    }
    
}
</script>

<style scoped>
    .header{
        background: -webkit-linear-gradient(
            top,rgb(240,240,240),#fff
        );
    }
    .banner{
        height: 155px;
        width: 100%;
        margin:15px 0
    }
</style>