<template>
  <div>
    <a-input placeholder="Basic usage" />

    <div></div>
    <!-- <chart-card :loading="false" title="标题" total="￥126,560" footer="你好" action="action">
      <mini-area />
    </chart-card> -->
  </div>
</template>

<script>
import moment from 'moment'
import echarts from 'echarts'
import 'echarts-gl'
/* import {
  ChartCard,
  MiniArea,
  MiniBar,
  MiniProgress,
  RankList,
  Bar,
  Trend,
  NumberInfo,
  MiniSmoothArea
} from '@/components' */
export default {
  name: 'studyChart',
  components: {
    /*  ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    RankList,
    Bar,
    Trend,
    NumberInfo,
    MiniSmoothArea,
    ChartCard */
  },
  data() {
    return {}
  },
  methods: {
    getTitle: function() {
      return '测试'
    }
  }
}
</script>
