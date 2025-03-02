import { useEffect, useState } from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const HostCharts = () => {

    const [chartSize, setChartSize] = useState({ width: 600, height: 400 });

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 640) { // Tailwind 'sm' (Mobile)
                setChartSize({ width: 300, height: 250 });
            } else if (window.innerWidth < 1024) { // Tailwind 'md' (Tablet)
                setChartSize({ width: 500, height: 350 });
            } else { // Default for larger screens
                setChartSize({ width: 600, height: 400 });
            }
        };

        updateSize(); // Call once on mount
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const salesData = [
        { num: 500, dayOfWeek: 'Saturday', product_1: 1546, product_2: 1200 },
        { num: 1000, dayOfWeek: 'Sunday', product_1: 500, product_2: 1500 },
        { num: 2000, dayOfWeek: 'Monday', product_1: 700, product_2: 1800 },
        { num: 3000, dayOfWeek: 'Tuesday', product_1: 3000, product_2: 1300 },
        { num: 4000, dayOfWeek: 'Wednesday', product_1: 800, product_2: 2100 },
        { num: 5000, dayOfWeek: 'Thursday', product_1: 1985, product_2: 2500 },
        { num: 6000, dayOfWeek: 'Friday', product_1: 2500, product_2: 1900 },
    ];



    return (
        <div>

            <div className="my-5 space-y-2">
                <h1 className="text-3xl font-lexend">Sales Overview</h1>
                <h1 className="text-xs md:text-base font-lexend">Number of Sales: 5000$</h1>
            </div>
            <div>
                <LineChart width={chartSize.width} height={chartSize.height} data={salesData}>
                    <XAxis dataKey="dayOfWeek" />
                    <YAxis dataKey="num" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line type="monotoneX" dataKey="product_1" stroke="#262626" />
                    <Line type="monotoneX" dataKey="product_2" stroke="#FF0000" />
                </LineChart>
            </div>

        </div>
    );
};

export default HostCharts;