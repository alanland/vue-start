<template>
  <div id="app">
    <h1>绑定</h1>
    <div>{{ message }}</div>
    <!-- 字符串连接 -->
    <div>{{ message + '官网地址：www.runoob.com' }}</div>
    <!-- 字符串反转 -->
    <div>{{ message.split('').reverse().join('') }}</div>
    <br>
    <input v-model="message">
    <h1>列表</h1>

    <ul>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ul>

    <h1>多维数组</h1>

    <li v-for="todo in todos">
      {{ todo.text }}
    </li>

    <h1>条件判断</h1>
    <div>
      <h2 v-if="ok">Yes</h2>
      <h2 v-if="ok">Yes</h2>
      <h2 v-else>No</h2>
      <h1 v-show="ok">Hello!</h1>
    </div>

    <h1>过滤器</h1>
    {{message | uppercase}}
    {{message | reverse | uppercase}}



  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: 'Hello Wooorld!',
        todos: [
          {text: 'Learn JavaScript'},
          {text: 'Learn Vue.js'},
          {text: 'Build Something Awesome'}
        ],
        items: [
          {message: 'www.runoob.com'},
          {message: 'www.w3cschool.cc'}
        ],
        ok: true
      }
    }
  }
</script>
<style>
  #app {
    padding: 10px;
    text-align: left;
  }
</style>
