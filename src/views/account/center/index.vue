<template>
  <div>
    <div class="title-button">
      <a-select default-value="合肥" style="width: 120px" @change="handleChange">
        <a-select-option value="池州">
          池州
        </a-select-option>
        <a-select-option value="合肥">
          合肥
        </a-select-option>
        <a-select-option value="安庆">
          安庆
        </a-select-option>
        <a-select-option value="滁州">
          滁州
        </a-select-option>
      </a-select>
    </div>

    <div>
      <template>
        <a-table :columns="columns" :data-source="data.data1">
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
      </template>
    </div>

    <div>
      <template>
        <a-avatar
          :size="120"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3085579569,3845241556&fm=26&gp=0.jpg"
        >
        </a-avatar>
        <a-avatar src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3085579569,3845241556&fm=26&gp=0.jpg">
        </a-avatar>
      </template>
    </div>

    <div>
      <template>
        <div>
          <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
              Check all
            </a-checkbox>
          </div>
          <br />
          <a-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
/* import { AppPage, ArticlePage, ProjectPage } from './page' */

import { mapGetters } from 'vuex'
const columns = [
  {
    title: '日期',
    dataIndex: 'name',
    key: 'name',
    //风格样式随整体风格而定
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '最高温度',
    dataIndex: 'age',
    key: 'age',
    width: 100
  },
  {
    title: '最低温度',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true
  },
  {
    title: '风力',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true
  },
  {
    title: '风向',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true
  }
]

const data1 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']
export default {
  components: {
    RouteView,
    PageView
    /*  AppPage,
    ArticlePage,
    ProjectPage */
  },
  data() {
    return {
      size: 'large',
      top: '10',
      bottom: '10',
      data: {
        data1: data1
      },
      columns: columns,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions
    }
  },
  methods: {
    init() {
      //  data.data1 = data1
      console.log('执行了init方法')
    },
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    onChange(value) {
      console.log(value)
    },
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length
      this.checkAll = checkedList.length === plainOptions.length
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
    }
  }
}
</script>
<style lang="less" scoped>
.title-button {
  margin-bottom: 10px;
  // padding: 5px;
}
</style>
