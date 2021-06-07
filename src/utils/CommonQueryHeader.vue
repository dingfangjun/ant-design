<template>
  <a-card :style="{ margin: '5px', border: '1px solid #aaaaaa', background: 'rgba(0,0,0,0)', color: '#ffffff' }">
    <a-row>
      <a-col :md="8" :sm="24">
        <slot name="organTitle">
          <span> {{ organTitle }}</span>
        </slot>
        <a-cascader
          :options="options"
          :display-render="displayRender"
          expand-trigger="hover"
          placeholder="--请选择机构--"
          @change="onChange"
          :style="{ width: '70%' }"
        />
      </a-col>
      <a-col :md="8" :sm="24">
        <a-form-item>
          <span :style="{ color: '#ffffff' }">装备类型：</span>
          <a-select v-model="selectedType">
            <a-select-option value="0">--请选择--</a-select-option>
            <a-select-option value="jj">酒检</a-select-option>
            <a-select-option value="zfjly">执法记录仪</a-select-option>
            <a-select-option value="jwt">警务通</a-select-option>
            <a-select-option value="gps">GPS</a-select-option>
            <a-select-option value="cz">车载</a-select-option>
            <a-select-option value="xj">相机</a-select-option>
            <a-select-option value="sxj">摄像机</a-select-option>
            <a-select-option value="yjzhzd">应急指挥终端</a-select-option>
            <a-select-option value="wrj">无人机</a-select-option>
            <a-select-option value="4gzfjly"> 4G执法记录仪</a-select-option>
            <a-select-option value="yjcdzp">应急车道抓拍</a-select-option>
            <a-select-option value="ydhlj">移动护栏机</a-select-option>
            <a-select-option value="pda">pda</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :md="8" :sm="24">
        <a-button type="primary">
          查询
        </a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
export default {
  name: 'commonQueryHeader',

  beforeCreate() {
    /*  document.querySelector('body').setAttribute('style', 'background:#00326a') */
  },
  props: {
    organTitle: {
      type: [Number, String],
      required: false,
      default: '使用机构：'
    },
    typeTitle: {
      type: [Number, String],
      required: false,
      default: '装备类型：'
    }
  },
  data() {
    return {
      selectedType: '0',
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
                  label: 'West Lake'
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
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    //级联选择器方法
    onChange(value) {
      console.log(value)
    },
    displayRender({ labels }) {
      return labels[labels.length - 1]
    }
    //下拉框方法
  }
}
</script>
<style scoped>
.commonQueryHeader {
  width: 100%;
  margin: 5px;
  border: 1px solid '#000000';
}
</style>
