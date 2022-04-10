// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
import { MapChart } from 'echarts/charts';
import china from '@/assets/china';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';

// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  MapChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $Chart: {
      get() {
        return {
          map(id, data, name) {
            // 初始化echarts实例
            var rateChart = echarts.init(document.getElementById(id)); //有的话就获取已有echarts实例的DOM节点。

            // 进行相关配置
            var chartOption = {
              tooltip: {
                // 鼠标移到图里面的浮动提示框
                // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
                // 背景颜色
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                formatter(params, ticket, callback) {
                  // params.data 就是series配置项中的data数据遍历
                  let localValue, perf, downloadSpeep, usability, point;
                  if (params.data) {
                    localValue = params.data.value;
                  } else {
                    // 为了防止没有定义数据的时候报错写的
                    localValue = 0;
                  }
                  let htmlStr = `
          <div >
            <span style="font-size: 14px; color: #fff; position: relative">省份:${params.name}</span>
            <br/>
            <span style="font-size: 14px; color: #fff; position: relative">${name}：${localValue}</span>
          </div>
        `;
                  return htmlStr;
                },
                // backgroundColor:"#ff7f50",//提示标签背景颜色
                // textStyle:{color:"#fff"} //提示标签字体颜色
              },
              // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
              visualMap: {
                // 左下角的颜色区域
                type: 'piecewise', // 定义为分段型 visualMap
                min: 0,
                max: 1,
                itemWidth: 12,
                itemHeight: 12,
                bottom: 20,
                left: 3,
                pieces: [
                  // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                  { gt: 10000, label: '>10000', color: 'rgb(72, 15, 16)' }, // 10000>
                  { gte: 1000, lt: 10000, label: '1000-10000', color: 'rgb(119, 37, 38)' }, // [1000,10000)
                  { gte: 500, lt: 1000, label: '500-999', color: 'rgb(187, 57, 55)' }, // [500, 999)
                  { gte: 100, lte: 500, label: '100-499', color: 'rgb(213, 99, 85)' }, // [100, 499)
                  { gte: 10, lt: 100, label: '10-99', color: 'rgb(233, 161, 136)' }, // [10, 99)
                  { gte: 1, lt: 10, label: '1-9', color: 'rgb(253, 235, 207)' }, // [1, 9)
                  { value: 0, label: '无数据', color: 'rgb(255, 255, 255)' }, // [0]
                ],
                // 设置文字
                textStyle: {
                  fontSize: 10,
                },
              },
              // geo配置详解： https://echarts.baidu.com/option.html#geo
              geo: {
                // 地理坐标系组件用于地图的绘制
                map: 'china', // 表示中国地图
                // roam: true, // 是否开启鼠标缩放和平移漫游
                zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
                label: {
                  show: true,
                },
                itemStyle: {
                  // 地图区域的多边形 图形样式。
                  borderColor: 'rgba(0, 0, 0, 0.2)',

                  emphasis: {
                    // 高亮状态下的多边形和标签样式
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                  },
                },
              },
              series: [
                {
                  name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
                  type: 'map',
                  geoIndex: 0,
                  label: {
                    show: true,
                  },
                  // 接收传进来的数据
                  data,
                },
              ],
            };

            // 使用刚指定的配置项和数据显示地图数据
            rateChart.setOption(chartOption);
          },
        };
      },
    },
  });
};

export default install;
