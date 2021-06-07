<template>
  <div>
    <a-cascader :options="options" :default-value="['zhejiang', 'hangzhou', 'xihu']" style="width: 100%">
      <template slot="displayRender" slot-scope="{ labels, selectedOptions }">
        <span v-for="(label, index) in labels" :key="selectedOptions[index].value">
          <span v-if="index === labels.length - 1">
            {{ label }} (<a @click="e => handleAreaClick(e, label, selectedOptions[index])">{{
              selectedOptions[index].code
            }}</a
            >)
          </span>
          <span v-else @click="onChange"> {{ label }} / </span>
        </span>
      </template>
    </a-cascader>
    <study-chart></study-chart>
  </div>
</template>

<script>
import StudyChart from './charts-study/StudyChart.vue'
export default {
  components: { StudyChart },
  mounted() {
    this.getWeather('芜湖')
  },
  data() {
    return {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                  code: 752100
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                  code: 453400
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    onChange(value) {
      console.log(value)
    },
    handleAreaClick(e, label, option) {
      e.stopPropagation()
      console.log('clicked', label, option)
    },
    getWeather(city) {
      this.axios
        .get('http://localhost:8080/testHttp/getWeatherJson?city=' + city)
        .then(function(response) {
          console.log(response.result)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
