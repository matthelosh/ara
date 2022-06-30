<template>
	<Doughnut
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
import { Doughnut } from 'vue-chartjs/legacy'
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
	name: 'DonutChart',
	components: { Doughnut },
	props: {
		chartId: {
			type: String,
			default: 'donut-chart'
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
			labels : ['Laki-laki','Perempuan'],
			datasets: [
				{
					backgroundColor: [],
					data: []
				}
			],
		},
		chartOptions: {
			responsive: true,
			maintainAspectRatio: false
		}
	}),
	mounted() {
		this.chartData.labels = this.labels
		this.chartData.datasets[0].data = this.datasets
		this.chartData.datasets[0].backgroundColor = this.colors
	}
}

</script>