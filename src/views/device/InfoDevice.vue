<template>
  <div>
    <div class="onlinePoliceChartHeader">
      <a-row type="flex" justify="space-between">
        <a-col :span="12">
          <div class="onlinePoliceChartHeaderTip">
            <span>实时警力</span>
          </div>
        </a-col>
        <a-col :span="12">
          <div>
            <a-radio-group v-model="oninePolice" @change="oninePoliceOrderedChanged" :style="{ float: 'right' }">
              <a-radio-button value="org" :style="{ color: '#ffffff' }">
                按机构
              </a-radio-button>
              <a-radio-button value="road" :style="{ color: '#ffffff' }">
                按道路
              </a-radio-button>
            </a-radio-group>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="onlinePoliceChartBody">
      <bar v-show="oninePolice === 'org'" :dataSource="barData" :style="{}" />
      <a-tree
        :style="{ color: '#ffffff' }"
        v-show="oninePolice === 'road'"
        :default-expanded-keys="['0-0-0']"
        @select="onSelect"
      >
        <a-icon slot="switcherIcon" type="caret-down" />
        <a-tree-node key="0-0" title="城市道路">
          <a-tree-node key="0-0-0" title="清流路"
            ><span :style="{ float: 'right' }">29%</span>
            <a-tree-node key="0-0-0-0" title="西涧路至中都大道" showIcon="false" />
            <a-tree-node key="0-0-0-1" title="中都大道至定远路" showIcon="false" />
            <a-tree-node key="0-0-0-2" title="定远路至创业路" showIcon="false" />
          </a-tree-node>
          <a-tree-node key="0-0-1" title="中都大道">
            <a-tree-node key="0-0-1-0" title="中都大道至定远路" showIcon="false" />
          </a-tree-node>
        </a-tree-node>
      </a-tree>
    </div>
  </div>
</template>
<script>
import Bar from '@/components'
export default {
  name: 'infoDevice',
  components: {
    Bar
  },

  data() {
    return {
      oninePolice: 'org',
      barData: []
    }
  },
  created() {
    setTimeout(() => {
      this.loadBarData()
    }, 100)
  },
  methods: {
    loadData(x, y, max, min, before = '', after = '') {
      let xArr1 = ['一', '二', '三', '四', '五', '六', '七', '八']

      let data = []
      for (let i = 0; i < xArr1.length; i += 1) {
        data.push({
          [x]: `${before}${xArr1[i]}${after}`,
          [y]: Math.floor(Math.random() * max) + min
        })
      }
      return data
    },
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    },
    // 加载柱状图数据
    loadBarData() {
      this.barData = this.loadData('x', 'y', 80, 20, '高速', '大队')
    },
    oninePoliceOrderedChanged() {
      let val = this.oninePolice
      console.log('val changed:' + val)
      if (val === 'org') {
        this.barData = this.loadData('x', 'y', 80, 20, '高速', '大队')
      } else if (val === 'road') {
        this.barData = this.loadData('x', 'y', 70, 30, '道路', '号分段路')
        // this.barData = this.loadData('x', 'y', 70, 30, '高速', '大队')
      } else {
        console.log('获取数据出错，参数为:' + val)
      }
    }
  }
}
</script>
<style scoped>
/* .onlinePoliceChartBody {
  background-image: url('../../../assets/qingwu/online-police-body-bg.png');
}

.onlinePoliceChartHeader {
  background-image: url('../../../assets/qingwu/online-police-header-bg.png');
} */
.onlinePoliceChartHeaderTip {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  /* // background-image: url('../../../assets/qingwu/online-police-tips.png'); */
  text-align: center;
  padding: 5px auto;
}
</style>
