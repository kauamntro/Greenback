import ApexCharts from "apexcharts";
import { useEffect, useRef } from "react";

export default function MainPanelSectionAnalistic () {
   
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            chart: {
              height: "100%",
              maxWidth: "100%",
              type: "area",
              fontFamily: "Inter, sans-serif",
              dropShadow: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
            },
            tooltip: {
              enabled: true,
              x: {
                show: false,
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#22C55E",
                gradientToColors: ["#1C64F2"],
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              width: 2,
            },
            grid: {
              show: false,
              strokeDashArray: 4,
              padding: {
                left: 2,
                right: 2,
                top: 0
              },
            },
            series: [
              {
                name: "$",
                data: [15000, 14500, 14200, 15300, 14800, 15500, 16000, 15700, 15000, 14500, 14200, 15300, 14800, 15500, 16000, 15700, 15000, 14500, 14200, 15300, 14800, 15500, 16000, 15700, 15000, 14500, 14200, 15300, 14800, 15500],
                color: "#22C55E"
              },
            ],
            xaxis: {
              categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
              labels: {
                show: true,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
                color: '#6b7280'
              },
            },
            yaxis: {
              show: true,
            },
          }

        if (chartRef.current) {
            const chart = new ApexCharts(chartRef.current, options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, []);
   
    return (
        <section className="w-full p-4 mt-4">
            <h1 className="block font-bold text-xl mb-4">Analistic Report</h1>
            
            <div className=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
            <div className="flex justify-between">
                <div>
                <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">$74.330,00</h5>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Balance last month</p>
                </div>
                <div
                className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                12%
                <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                </svg>
                </div>
            </div>
            <div  ref={chartRef} id="area-chart"></div>
            <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                <div className="flex justify-between items-center pt-5">
                <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown"
                    data-dropdown-placement="bottom"
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                    type="button">
                    Last 7 days
                    <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                        </li>
                    </ul>
                </div>
                <a
                    href="#"
                    className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-green-600 hover:text-green-700 dark:hover:text-green-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                    View custs
                    <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </a>
                </div>
            </div>
            </div>

        </section>
    )
}