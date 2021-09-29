<template>
  <div id="app">
    <router-view/>
    <NGT/>
  </div>
</template>

<script>
import NGT from './components/NGT'

export default {
  name: 'App',
  components: {
    NGT,
  }
}
</script>

<style>
  body,#app{
    width: 100%;
  }
  *{
    padding: 0;
    margin: 0;
  }
  a{
    text-transform: none;
    text-decoration: none;
  }
</style>
