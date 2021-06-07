<template>
  <div>
    <a-select label-in-value :default-value="{ key: '合肥' }" style="width: 120px" @change="handleChange">
      <a-select-option value="安庆">
        安庆
      </a-select-option>
      <a-select-option value="合肥">
        合肥
      </a-select-option>
      <a-select-option value="池州">
        池州
      </a-select-option>
      <a-select-option value="青阳">
        青阳
      </a-select-option>
    </a-select>
    <div class="table-study-table">
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 3 }"
        :rowKey="
          (record, index) => {
            return index
          }
        "
      >
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    scopedSlots: { customRender: 'date' }
  },
  {
    title: '风向',
    dataIndex: 'direct',
    key: 'direct',
    width: 80
  },
  {
    title: '气温',
    dataIndex: 'temperature',
    key: 'temperature',
    ellipsis: true
  },
  {
    title: '天气情况',
    dataIndex: 'weather',
    key: 'weather',
    ellipsis: true
  },
  {
    title: '日',
    dataIndex: 'wid.day',
    key: 'wid.day',
    ellipsis: true
  },
  {
    title: '夜',
    dataIndex: 'wid.night',
    key: 'wid.night',
    ellipsis: true
  }
]

let data = [
  {
    key: '1',
    date: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  }
]
export default {
  name: 'studyTable',

  data() {
    return {
      data,
      columns
    }
  },
  methods: {
    /* handleChange(value) {
      var _this = this
      // console.log(value)
      this.axios
        .get('http://localhost:8080/testHttp/getWeatherJson?city=' + value.key)
        .then(function(response) {
          //     console.log(response.result)
          _this.data = response.result.future
        })
        .catch(function(error) {
          console.log(error)
        })
    } */
    handleChange(value) {
      var _this = this
      this.$http.get('/study/getWeatherJson').then(res => {
        //debugger
        //   console.log('返回结果值:' + res.future)
        _this.data = res.result
      })
    }
  },
  mounted: function() {
    /*  var _this = this
    // this.handleChange(value)
    this.axios
      .get('http://localhost:8080/testHttp/getWeatherJson?city=' + '合肥')
      .then(function(response) {
        // console.log(response.result)
        _this.data = response.result.future
      })
      .catch(function(error) {
        console.log(error)
      }) */
  }
}
</script>
<style scoped>
.table-study-table {
  margin-top: 20px;
}
</style>
