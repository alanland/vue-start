<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue, 喵喵!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" scoped>
h1 {
  color: #42b983;
}
</style>
