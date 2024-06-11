<template>
    <div>
        <canvas ref="myChart"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const myChart = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
    if (myChart.value) {
        const ctx = myChart.value.getContext('2d')
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ],
                    datasets: [
                        {
                            label: 'Income',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14],
                            backgroundColor: 'rgba(1, 204, 185, 0.3)',
                            borderColor: '#01ccb9',
                            borderWidth: 1
                        },
                        {
                            label: 'Expense',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
                            backgroundColor: 'rgba(237, 81, 89, 0.3)',
                            borderColor: '#ed5159',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: '#FFFFFF'
                            }
                        },
                        x: {
                            ticks: {
                                color: '#FFFFFF'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#FFFFFF'
                            }
                        }
                    }
                }
            })
        }
    }
})
</script>
