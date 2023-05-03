import React, { useEffect } from 'react'
import * as echarts from 'echarts';


function ClassList() {

  useEffect(() => {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    myChart.setOption({

      title: {
        text: '缺陷统计',
        subtext: '当日缺陷',
        left: 'center',
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '缺陷信息',
          type: 'pie',
          radius: '100%',
          top:'middle',
          data: [
            { value: 1048, name: 'P0级' },
            { value: 735, name: 'P1级' },
            { value: 580, name: 'P2级' },
            { value: 484, name: 'P3级' }],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }, [])

  return (

    <div id="main" style={{width:"100%",  height:"100%"}}></div>

  )
}

export default ClassList