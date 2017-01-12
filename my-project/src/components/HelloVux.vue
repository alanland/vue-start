<template>
  <div id="app">
<h1>Flexbox</h1>
<divider>Horizontal</divider>
<flexbox style="height:40px;">
  <flexbox-item><div class="flex-demo">1</div></flexbox-item>
  <flexbox-item><div class="flex-demo">2</div></flexbox-item>
</flexbox>
<divider>Vertical</divider>
<flexbox orient="vertical" :margin-left=0>
  <flexbox-item><div class="flex-demo" style="margin-left:0">1</div></flexbox-item>
  <flexbox-item><div class="flex-demo" style="margin-left:0">2</div></flexbox-item>
</flexbox>

<h2>Flexbox2</h2>

<flexbox :margin-left=0 style="height: 200px; background-color: #fff;" class="vux-1px-tb vux-1px-l vux-1px-r">
  <flexbox-item class="vux-1px-r" style="height:200px;"></flexbox-item>
  <flexbox-item>
    <flexbox orient="vertical" :margin-left=0>
      <flexbox-item class="vux-1px-b"></flexbox-item>
      <flexbox-item style="height: 100px;"><!--height: 100% doesnot work here-->
        <flexbox :margin-left=0>
          <flexbox-item class="vux-1px-r"></flexbox-item>
          <flexbox-item></flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>
  </flexbox-item>
</flexbox>

<h1>Scoll</h1>
<scroller lock-y :scrollbar-x="false">
  <div class="box1">
    many many content
  </div>
    <div class="box2">
      many many content2
    </div>
</scroller>


<h1>Form</h1>




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
  .flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  margin-bottom: 8px;
  border-radius: 4px;
  -webkit-background-clip: padding-box;
}
</style>
