<template>
    <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />

</template>

<script>
// import { defineComponent, h, PropType } from 'vue'

// import { Line } from 'vue-chartjs'
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   LinearScale,
//   PointElement,
//   CategoryScale,
//   Plugin
// } from 'chart.js'

// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   LinearScale,
//   PointElement,
//   CategoryScale
// )

// export default defineComponent({
//   name: 'LineChart',
//   components: {
//     Line
//   },
//   props: {
//     chartId: {
//       type: String,
//       default: 'line-chart'
//     },
//     width: {
//       type: Number,
//       default: 400
//     },
//     height: {
//       type: Number,
//       default: 400
//     },
//     cssClasses: {
//       default: '',
//       type: String
//     },
//     styles: {
//       type: Object as PropType<Partial<CSSStyleDeclaration>>,
//       default: () => {}
//     },
//     plugins: {
//       type: Array as PropType<Plugin<'line'>[]>,
//       default: () => []
//     }
//   },
//   setup(props) {
//     const chartData = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [
//         {
//           label: 'Data One',
//           backgroundColor: '#f87979',
//           data: [40, 39, 10, 40, 39, 80, 40]
//         }
//       ]
//     }

//     const chartOptions = {
//       responsive: true,
//       maintainAspectRatio: false
//     }

//     return () =>
//       h(Line, {
//         chartData,
//         chartOptions,
//         chartId: props.chartId,
//         width: props.width,
//         height: props.height,
//         cssClasses: props.cssClasses,
//         styles: props.styles,
//         plugins: props.plugins
//       })
//   }
// })

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun' ],
        datasets: [ { data: [250, 500, 750, 1000, 1250, 1500] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style>

</style>