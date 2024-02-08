// DonutChart.tsx
import { useRef, useEffect } from "react";
import { Chart, registerables } from 'chart.js/auto';

export default function DonutChart() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    let myChart: Chart<'doughnut'> | null = null;

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                Chart.register(...registerables);
                if (myChart) {
                    myChart.destroy();
                }
                myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            label:' ',
                            data: [55, 30, 15],
                            backgroundColor: [
                                'rgb(78,115,223)',
                                'rgb(28,200,138)',
                                'rgb(54,185,204)'
                            ],
                            spacing:2,
                        }],
                        labels: ['Social', 'Referral', 'Direct'],
                    },
                    options: {
                        radius: '70%',
                        cutout: '85%',
                        scales: {
                            y: {
                                display: false
                            }
                        },
                        plugins:{
                            legend:{
                                position:'bottom',
                                labels:{
                                    useBorderRadius:false,
                                    borderRadius:99
                                }
                            }
                        }
                    }
                });
            }
        }
    }, []);

    return (
        <div>
            <canvas ref={chartRef} width="300" height="300"></canvas>
        </div>
    );
}
