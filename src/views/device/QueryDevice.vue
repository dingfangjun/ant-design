<template>
  <div class="bg">
    <commonQueryHeader></commonQueryHeader>
    <button class="button-color-sunset" :style="{ margin: '10px 24px' }">
      添加装备
    </button>

    <template v-if="false">
      <div class="table-body">
        <table
          border="1"
          width="100%"
          height="300"
          bordercolor="#ffffff"
          cellspacing="0"
          style="border-collapse: collapse;"
          cellpadding="10"
        >
          <tr class="tableTr">
            <th>装备编号</th>
            <th>装备类型</th>
            <th>装备名称</th>
            <th>装备品牌</th>
            <th>装备型号</th>
            <th>登记日期</th>
            <th>使用人员/警车号牌</th>
            <th>使用机构</th>
            <th>操作</th>
          </tr>
          <tr class="tableTr">
            <td>20201118001</td>
            <td>4G执法记录仪</td>
            <td>执法记录仪</td>
            <td>大华</td>
            <td>2020-AUTO-ADD</td>
            <td>2020-03-01</td>
            <td>陶其炜</td>
            <td>交警支队直属一大队</td>
            <td>
              <a-icon type="edit" :style="{ fontSize: '18px', margin: '5px' }" />
              <a-icon type="delete" :style="{ fontSize: '18px', margin: '5px' }" />
            </td>
          </tr>
          <tr class="tableTr">
            <td>20201118001</td>
            <td>4G执法记录仪</td>
            <td>执法记录仪</td>
            <td>大华</td>
            <td>2020-AUTO-ADD</td>
            <td>2020-03-01</td>
            <td>陶其炜</td>
            <td>交警支队直属一大队</td>
            <td>
              <a-icon type="edit" :style="{ fontSize: '18px', margin: '5px' }" />
              <a-icon type="delete" :style="{ fontSize: '18px', margin: '5px' }" />
            </td>
          </tr>
          <tr class="tableTr">
            <td>20201118001</td>
            <td>4G执法记录仪</td>
            <td>执法记录仪</td>
            <td>大华</td>
            <td>2020-AUTO-ADD</td>
            <td>2020-03-01</td>
            <td>陶其炜</td>
            <td>交警支队直属一大队</td>
            <td>
              <a-icon type="edit" :style="{ fontSize: '18px', margin: '5px' }" />
              <a-icon type="delete" :style="{ fontSize: '18px', margin: '5px' }" />
            </td>
          </tr>
          <tr class="tableTr">
            <td>20201118001</td>
            <td>4G执法记录仪</td>
            <td>执法记录仪</td>
            <td>大华</td>
            <td>2020-AUTO-ADD</td>
            <td>2020-03-01</td>
            <td>陶其炜</td>
            <td>交警支队直属一大队</td>
            <td>
              <a-icon type="edit" :style="{ fontSize: '18px', margin: '5px' }" />
              <a-icon type="delete" :style="{ fontSize: '18px', margin: '5px' }" />
            </td>
          </tr>
          <tr class="tableTr">
            <td>20201118001</td>
            <td>4G执法记录仪</td>
            <td>执法记录仪</td>
            <td>大华</td>
            <td>2020-AUTO-ADD</td>
            <td>2020-03-0</td>

            <td>交警支队直属一大队</td>
            <td>
              <a-icon type="edit" :style="{ fontSize: '18px', margin: '5px' }" />
              <a-icon type="delete" :style="{ fontSize: '18px', margin: '5px' }" />
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template>
      <s-tree show-line :default-expanded-keys="['0-0-0']" @select="onSelect">
        <s-icon slot="switcherIcon" type="down" />
        <s-tree-node key="0-0" title="parent 1">
          <s-tree-node key="0-0-0" title="parent 1-0">
            <s-tree-node key="0-0-0-0" title="leaf" />
            <s-tree-node key="0-0-0-1" title="leaf" />
            <s-tree-node key="0-0-0-2" title="leaf" />
          </s-tree-node>
          <s-tree-node key="0-0-1" title="parent 1-1">
            <s-tree-node key="0-0-1-0" title="leaf" />
          </s-tree-node>
          <s-tree-node key="0-0-2" title="parent 1-2">
            <s-tree-node key="0-0-2-0" title="leaf" />
            <s-tree-node key="0-0-2-1" title="leaf" />
          </s-tree-node>
        </s-tree-node>
      </s-tree>
    </template>
  </div>
</template>
<script>
import CommonQueryHeader from '@/utils/CommonQueryHeader'
import STree from '@/components/Tree/Tree'
export default {
  name: 'queryDevice',
  components: { CommonQueryHeader },
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background:#00326a')
  },
  data() {
    return {}
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    }
  }
}
</script>
<style scoped>
.tableTr {
  height: 30px;
  border: 1px solid #ffffff;
  text-align: center;
}
table tr th {
  text-align: center;
  width: 11%;
  font-weight: 300;

  font-size: 12px;
}
.table-body {
  height: 400px;
  margin: 24px;
  padding: 20px;
  border: 1px solid #ffffff;
  color: #ffffff;
}
</style>
