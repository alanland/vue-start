<template>
  <div>
    <tab :line-width='2' active-color='#fc378c'>
      <tab-item :selected='tab === item' v-for='item in tablist' @click='tab = item'>{{item}}</tab-item>
    </tab>
    <div class="group">
      <group>
        <div class="dateGroup" style='float: left;width: 100%'>
          <div class='floatdivBttuons'>
            <x-button :text='lastweekbtn' @click='addCurrentDay(-7)'></x-button>
          </div>
          <div class='floatdivBttuons'>
            <x-button :text='yesterdaybtn' @click='addCurrentDay(-1)'></x-button>
          </div>
          <div class='currentDay'>
            <calendar title="" :value.sync='currentDay'></calendar>
          </div>
          <div class='floatdivBttuons'>
            <x-button :text='nextdaybtn' @click='addCurrentDay(1)'></x-button>
          </div>
          <div class='floatdivBttuons'>
            <x-button :text='nextweekbtn' @click='addCurrentDay(7)'></x-button>
          </div>
        </div>
        <selector :value.sync='projectValue' title='项目' :options='projectCodelist'
                  @on-change='projectOnChange'></selector>
        <selector :value.sync='actionValue' title='分类' :options='actionCodelist' @on-change='actionOnChange'></selector>

        <cell :inline-desc="'工时: '+workhour" primary='content'>
          <range slot='value' :value.sync='workhour' :min=0 :max=8 :step=1></range>
        </cell>
        <x-textarea :max='200' class='textareas' placeholder='请输入详细描述' required=true
                    :value.sync='msgValue'></x-textarea>
      </group>
    </div>
    <div id='buttonlist'>
      <x-button type='primary' :text='submitbtn' @click='click'></x-button>
    </div>
    <div>
      <!--<panel v-bind:header="tab == '工时填写' ? '本周工时列表' : '下周计划列表'" :list='list' :type="'2'" ></panel>-->
      <!--<panel header="下周计划列表" :list='list' :type="'2'"  v-if="tab == '下周计划'"></panel>-->
    </div>
  </div>
</template>

<script>
  import {
    Group, Cell, Selector, InlineCalendar, Calendar, Range, Tab, TabItem, XTextarea,
    XButton, Radio, Panel
  } from 'vux/src/components'
  export default {
    components: {
      Group, Cell, Selector, InlineCalendar, Calendar, Range, Tab, TabItem, XTextarea,
      XButton, Radio, Panel
    },
    data () {
      return {
        tab: '工时填写',
        tablist: ['工时填写'],
//        tablist:['工时填写', '下周计划'],

        projectCodelist: ['A', 'B', 'C'],
        actionCodelist: ['A', 'C', 'E'],
        projectValue: '',
        actionValue: '',

        currentDay: 'TODAY',
        weekDays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],

        workhour: 0,

        msgValue: '',

        worklist: [
          {date: '2017-1-1', day: '', hour: 8, projectCode: '冻到老家', actionCode: '代码开发', msg: 'cececececeecece'},
          {
            date: '2017-1-1',
            day: '',
            hour: 1,
            projectCode: 'XOMS',
            actionCode: '代码开发',
            msg: '测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所测测测测二测测错所所所所'
          }
        ],
        nextWeeklist: [
          {date: '2017-1-1', day: '', hour: 8, projectCode: '下周计划1', actionCode: '代码开发', msg: '下周计划2'},
          {date: '2017-1-2', day: '', hour: 5, projectCode: '下周计划2', actionCode: '代码开发', msg: '下周计划2下周计划2'},
          {date: '2017-1-1', day: '', hour: 1, projectCode: '下周计划3', actionCode: '代码开发', msg: '下周计划2下周计划2下周计划2'}
        ],
        list: [],
        yesterdaybtn: '<',
        nextdaybtn: '>',
        lastweekbtn: '<<',
        nextweekbtn: '>>',
        submitbtn: '提交'
      }
    },
    methods: {
      projectOnChange (val) {
        this.projectValue = val
      },
      actionOnChange (val) {
        this.actionValue = val
      },
      query () {
        console.log('query')
      },
      click () {
        console.log('click')
      },
      addCurrentDay (days) {
        let d = new Date(this.currentDay)
        let newDate = new Date(d.valueOf() + days * 24 * 60 * 60 * 1000)
        this.currentDay = JSON.stringify(newDate).substring(1, 11)
      }

    }
  }

</script>
<style lang="stylus">
  .group {
    margin: 10px;
  }

  .dateGroup {
    .weui_btn {
      color: red;
      background: none;
      border: none;
      &:after {
        content: '';
        width:0;
        height: 0;
        border-radius: 0;
       }
    }
  }

  .textareas {
    border: 1px solid;
    border-color: rgba(105, 85, 85, 0.45);

  }

  .floatdivBttuons {
    width: 15%;
    float: left;
  }

  .currentDay {
    float: left;
    width: 40%;
    .weui_cell_ft.with_arrow {
      text-align: center;
      &:after{
        display: none;
      }
    }
  }
</style>


