// LineChart.tsx
import { useRef, useEffect } from "react";
import { Chart, registerables } from 'chart.js/auto';

export default function LineChart() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    let myChart: Chart<'line'> | null = null;

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                Chart.register(...registerables);
                if (myChart) {
                    myChart.destroy();
                }
                myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                        datasets: [{
                            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 35000],
                            fill: false,
                            borderColor: 'rgb(78,115,223)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                },ticks:{
                                    autoSkip: false,
                                    maxRotation: 0,
                                    minRotation: 0
                                },grid:{
                                    display:false
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                },
                                suggestedMin: 0,
                                suggestedMax: 40000,
                                ticks:{
                                    stepSize:10000
                                },grid:{
                                    display:false
                                }
                            }
                        },
                        plugins:{
                            legend:{
                                display:false
                            }
                        }
                    }
                });
            }
        }
    }, []);

    return (
        <div>
            <canvas className={'w-full h-80'} ref={chartRef}></canvas>
        </div>
    );
}
