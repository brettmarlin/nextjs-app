'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
);

interface LinkedInMentionChartProps {
  data?: {
    dates: string[];
    orchestrationAgent: number[];
    chat: number[];
  };
}

export default function LinkedInMentionChart({ data }: LinkedInMentionChartProps) {
  // Sample data - replace with your actual LinkedIn feed data
  const defaultData = {
    dates: [
      '2024-01-01',
      '2024-01-08',
      '2024-01-15',
      '2024-01-22',
      '2024-01-29',
      '2024-02-05',
      '2024-02-12',
      '2024-02-19',
      '2024-02-26',
      '2024-03-05',
      '2024-03-12',
      '2024-03-19',
    ],
    orchestrationAgent: [2, 5, 3, 8, 12, 15, 18, 22, 19, 25, 28, 32],
    chat: [15, 18, 22, 25, 28, 32, 35, 38, 42, 45, 48, 52],
  };

  const chartData = data || defaultData;

  const chartConfig = {
    labels: chartData.dates,
    datasets: [
      {
        label: 'Orchestration Agent Mentions',
        data: chartData.orchestrationAgent,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
        fill: false,
      },
      {
        label: 'Chat Mentions',
        data: chartData.chat,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'LinkedIn Feed: Mention Trends Over Time',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          title: function (context: ChartTooltipItem[]) {
            const date = new Date(context[0].label);
            return date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
          },
          label: function (context: ChartTooltipItem) {
            return `${context.dataset.label}: ${context.parsed.y} mentions`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'week' as const,
          displayFormats: {
            week: 'MMM dd',
          },
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        type: 'linear' as const,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Mentions',
        },
        ticks: {
          stepSize: 5,
        },
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  return (
    <div className="h-96 w-full rounded-lg bg-white p-4 shadow-lg">
      <Line data={chartConfig} options={options} />
    </div>
  );
}
