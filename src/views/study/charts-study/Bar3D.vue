<template>
  <div>
    <span>加载了图表插件</span>
    <div :id="echartId" class="EchartAll"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'bar3D',
  props: {
    echartId: '',
    echartData: ''
  },
  data() {
    return {}
  },
  methods: {
    initdBar() {
      let ydata = []
      let xdata = []
      this.echartData.forEach(element => {
        xdata.push(element.date)
        ydata.push(element.num)
      })
      //图片矢量路径
      var imgDatUrl =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAABeCAYAAAD17+5iAAAF2UlEQVRYR4VX+2tURxQ+x1g19dFotVqtGh81Pv6etvhotbW11Yp9SyvSbEWkxRYRQUQEEbGISB9IK4hIn4hoTExiTIxJVk1cjcZokrv37r1375SZOTNn7u663V929t5vznznnO+cM4tAn8W5ocZiPp+J8x5EYx7EY2MQeXmIPQ9iP4DJdVOyKLHLnnqNiV/IxL58mYfIkxvGIJab8nmYVDspWzdnVj2uLBQbk0KYKQYBxHlfA6U1CfQ8mFAzLjt1+rR6QABcVUgEyBUIRUgAAso1IgghIGi6rN7Ip7gqKArBWGebQkDQdIWMAOBKPybL8qXQByDStwCfwHIHrvQjoRlIUgQ2IQIA/6q2rMFemOJs+GsPAAIXvGKsYJ479njpN1+xfuCK0aAKWIDf3KR3yvOXj+Q1Z5Ue4qZe6gd+iwRLXxBw+ROPLDvxcwgFyrJ0XloeHnXALm19nLZMJzYMjcgDVNiETpxmRZnyW5ptSLHh0RMFNsl2yUtifstV6wg2PByunBRywb/WzKFreDCkksLxMytUCfVbm9nystwjKTQjOo4d7QlaW9jBZQOD0i8Ojz1DeirAb7vG4Ff7H1RNd6DApOild3KunN1EaiG1t6oTZExxaXZAq86Vp5P6oK2VaSztvStUJoCTonShNggI2tsYvKTnNleKkZclI8Ht6lSZUVzS3VcCTss6uO5YXtzVUxVc6Gjn8xbf6K5uueO6zoKksuj6zXScS7JZuKHBasOits7qSensYCHVX+twwCX1BQCFzg4yi4D1ze3PtCxfhF03bIniwqZW04bSMaNfha5Oyi4CLrzcolRHOVQN0HyU5Zud7OCCS00ODRMKXWhS6GF3lxatDPCCi5edSjF1kAZbuc//5xJXimHgBKVwq5tpzP/rogKbo4xazbNQgTU9fOWPf8tr0IlL2HvLFArgvAt/V4gz8wh7e4iyAJx3/k8Cu3tYIGFfLydl7rkLZV3UrQEJtkKae/Y8mzSO0niRoDDbR9oAwJd/O1cuUUqCAt8msMztnDNnLbhSg4xuZ9nynF9+l9XIwWKhqF4R3smynmf/fKa8J9KElV/R3TtkSADOPv0r9To9iPWH4xz1GzAAvnTqJ6dgS/ODEPXf1UmRfWfWydO613FbTtmPBvq1Swp84lTlsqIkRvcGbPPGmcdPKrARu14z6yg3wEKaeexEieV044hy9zjdLx49XlkbBIlzOU7KjCPHBHVcGzDlD0Uxun+fJTrj8FHnklEaZwHx4APmPOPQERs1zjnzjgcHmfP0g4fT6XZGhERZsIxz3YFDWkh0ZbDppiEePxq0MsC6/QeFbieuSdZGPPTQDlR8Yd+BZ8ZZbo+Hhlha037Yr+KsTrUGuQwUmA7FaXv3VdYGbSw+fswTdup335M25HWSdEEzUDpdfPLYeoNT9+x1ysopb+JWHB7mOE/Z/S2NY1MkNKcpmhqsxzVO2bWnwo2Re0Fx5Cmne3JmNzlY+aqWjDy1WcDJX+9KRUMHgTcWR0e4GJ7fmUmB0/YRktERdrB2R6Pg65RbUPqM4tgoD6faL3dWTgpJPvFG2cHa7TssmPlyNBLPYxqTPv+qpFJSzQ6SvAv+dDvNFMc1qyqAxM+TZQSc+PEXyrK5sKYu0lJCfp40I8HbPlN/PUqqyV7PEt+3XQcnbv2E5yBXrE2ECAJ2cMKHH1UIHfNPCgX7vwgnbN4mBLVJ3e90utVKpis0lhHwuQ+2lrcCrlcQobRMt4Lxm7ZQpTiEnWUShmZyA45/b7O27F74DRkEkGBbsOM3vl9FGwAijlgbNe9sciw7zqk7hAARx4DqvyEA1mx4938sx1SCCFizfmMZ2AmGsmxI47g33y4pWDNVKCRFaVmLAcet21CdRjHRQKkfXLvezkEzGlI0Eg3WG1a/RR2J9ZBaSTA9QFy9Tjyrkev/gaatICC+sVb/YvXzyJQCS3SrBxAZhNfXaM4lDckqT9PNwKkfv0F4bQ0XbNkGaQQVUO74D9jUJJPHbIbfAAAAAElFTkSuQmCC'
      let myChart = echarts.init(document.getElementById(this.echartId))
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#041730',
        grid: {
          left: '16%',
          bottom: '26%',
          right: '10%',
          top: '16%'
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          padding: 6,
          backgroundColor: 'rgba(7,49,90,.5)',
          borderWidth: 1,
          borderColor: 'rgba(13, 152, 213, 1)'
        },
        xAxis: {
          axisLabel: {
            color: '#30eee9'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#397cbc'
            }
          },
          axisTick: {
            show: true
          },
          axisLabel: {
            interval: '0', //强制显示所有类目
            rotate: -20 //类目倾斜放
          },
          data: xdata
        },
        yAxis: {
          type: 'value',
          minInterval: 1,
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#2ad1d2'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            //背景网格线
            show: true,
            lineStyle: {
              color: '#125770'
            }
          }
        },
        // series: [
        //   {
        //     type: 'pictorialBar',
        //     symbol: imgDatUrl,
        //     barGap: 0,
        //     barWidth: 20, //柱图宽度
        //     symbolSize: ['100%', '100%'],
        //     itemStyle: {
        //       normal: {
        //         color: '#0dce85'
        //       }
        //     },
        //     data: ydata
        //   }
        // ]

        series: [
          {
            name: 'a',
            tooltip: {
              show: false
            },
            type: 'bar',
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: '#0B4EC3' // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: '#138CEB' // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#17AAFE' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: ydata,
            barGap: 0
          },
          {
            type: 'bar',
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: '#09337C' // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: '#0761C0' // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#0575DE' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            barGap: 0,
            data: ydata
          },
          {
            name: 'b',
            tooltip: {
              show: false
            },
            type: 'pictorialBar',
            itemStyle: {
              borderWidth: 1,
              borderColor: '#999999',
              color: '#084ca5'
            },
            symbol: 'path://M 0,0 l 60,60 l -60,60 l -60,-60 z',
            symbolSize: ['30', '20'],
            symbolOffset: ['0', '-11'],
            //symbolRotate: -5,
            symbolPosition: 'end',
            data: ydata,
            z: 3
          }
        ]
      })
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    }
  },
  mounted() {
    this.initdBar()
  }
}
</script>
<style scoped>
.EchartAll {
  width: 100%;
  height: 100%;
}
</style>
