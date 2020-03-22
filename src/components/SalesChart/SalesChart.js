import React from "react";
import { useSelector } from "react-redux";
import {
    LineChart, Line, XAxis, Tooltip, Legend,
} from 'recharts';
import moment from 'moment'

const mapStateToProps = state => {
  return { data: state.data };
};

const SalesChart = () => {
    let data = useSelector(state => state.data);
    data = data.flatMap((product) => product.sales);
    const convertToNumber = (timestamp) => {
        return moment(timestamp).format('MM/DD')
    }
    return (
        <div>
            <LineChart width={1200} height={400} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="weekEnding" domain={['dataMin', 'dataMax']} tickFormatter={timeStr => convertToNumber(timeStr)}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
                <Line type="monotone" dataKey="wholesaleSales" stroke="#2476f8" />
            </LineChart>
        </div>
    );
}

export default SalesChart;