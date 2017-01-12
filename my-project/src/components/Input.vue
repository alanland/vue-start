<template>
  <div>

        <group title="with placeholder">
          <selector placeholder="项目" title="" :options="list" @on-change="onChange"></selector>
            <selector placeholder="分类" title="" :options="list" @on-change="onChange"></selector>
        </group>

          <group title="default format: YYYY-MM-DD">
            <datetime :value.sync="value1" @on-change="change" title="日期"></datetime>
          </group>
  </div>
</template>

<script>
import { Selector, Group, Datetime } from 'vux/src/components'
export default {
  components: {
    Selector,
    Group,
    Datetime
  },
  data () {
    return {
      password: '123465',

      value1: '2016-02-11',
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}]
    }
  },
  methods: {
    change (value) {
      console.log('change', value)
    }
  }
}
</script>
<style scoped>
.weui_cell_select {
  width: 40%;
  display: inline-block;
}
.weui_cell_ft .weui_btn {
  margin-left: 5px;
  vertical-align: middle;
  display: inline-block;
}
</style>
