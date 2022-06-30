<template>
	<Bar
		:chartOptions="chartOptions"
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
import { Bar } from 'vue-chartjs/legacy'
import {
	Chart as ChartJS,
	Title,
	  Tooltip,
	  Legend,
	  BarElement,
	  CategoryScale,
	  LinearScale
} from 'chart.js'

ChartJS.register(Title,
	  Tooltip,
	  Legend,
	  BarElement,
	  CategoryScale,
	  LinearScale
  )

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
			type: String,
			default: ''
		},
		styles: {
			type: Object,
			default: () => {}
		},
		plugins: {
			type: Array,
			default: () => []
		},
		labels:{
			type: Array,
			default: () => []
		},
		datasets: {
			type: Array,
			default: () => []
		},
		colors: {
			type: Array,
			default: ['#896789', '#789a98']
		}
	},
	data: () => ({
		chartData: {
			labels : [],
			datasets: [
				{
					label: 'Laki-laki',
					backgroundColor: ['teal'],
					data: [10,13,10,12,33,25]
				},
				{
					label: 'Perempuan',
					backgroundColor: ['pink'],
					data: [12,23,11,12,13,9]
				},
			],
		},
		chartOptions: {
			responsive: true,
			maintainAspectRatio: false
		}
	}),
	mounted() {
		this.chartData.labels = this.labels[0]
		this.chartData.datasets[0].label = this.labels[1][0]
		this.chartData.datasets[0].backgroundColor = this.colors[0]
		this.chartData.datasets[0].data = this.datasets[0]
		this.chartData.datasets[1].label = this.labels[1][1]
		this.chartData.datasets[1].backgroundColor = this.colors[1]
		this.chartData.datasets[1].data = this.datasets[1]
		
		// this.chartData.datasets[0].backgroundColor = this.colors
	}
}

</script>