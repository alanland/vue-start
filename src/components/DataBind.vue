<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <span>Message: {{ msg }}</span>
  <span>This will never change: {{* msg }}</span>
  <div>{{{ raw_html }}}</div>
  <a v-bind:href="url"></a>
  <a v-on:click="doSomething"></a>
  <!-- 完整语法 -->
  <a v-bind:href="url"></a>

  <!-- 缩写 -->
  <a :href="url"></a>

  <!-- 完整语法 -->
  <button v-bind:disabled="someDynamicCondition">Button</button>

  <!-- 缩写 -->
  <button :disabled="someDynamicCondition">Button</button>
  <!-- 完整语法 -->
  <a v-on:click="doSomething"></a>

  <!-- 缩写 -->
  <a @click="doSomething"></a>
</template>

<script>

</script>


