<template>
  <div>
    <span>studychart</span>
    <div id="canvas" :style="{ width: '100%', height: '400px' }">
      <bar3D :echartId="echartId" :echartData="echartData"></bar3D>
    </div>
  </div>
</template>

<script>
import Bar3D from '@/views/study/charts-study/Bar3D'

export default {
  name: 'studyChart',
  components: { Bar3D },
  data() {
    return {
      echartId: 'canvas',
      echartData: [
        { date: 'one', num: '3' },
        { date: 'two', num: '5' },
        { date: 'three', num: '4' },
        { date: 'four', num: '5' }
      ]
    }
  }
}
</script>
