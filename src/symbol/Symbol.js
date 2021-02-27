import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import SymbolChart from '../core/symbol-chart/SymbolChart';
import {priceStatesToChartState} from '../core/chart-utils';

const Symbol = () => {
    let {symbol} = useParams();
    const [chartData, setChartData] = useState({});
    const firstUpdate = useRef(true);

    useEffect(() => {
        async function fetchData() {
            if (!firstUpdate.current) return;

            firstUpdate.current = false;
            const res = await fetchPriceStates(symbol);
            const priceStates = res.prices;

            if (!priceStates.length) {
                alert('invalid symbol');
                return;
            }

            const updatedChartData = getChartData(symbol, priceStates);
            setChartData(updatedChartData);
        };
        fetchData();
    });

    return (
            <SymbolChart
                symbol={symbol}
                labels={chartData.labels}
                prices={chartData.datasets ? chartData.datasets[0].data : null}
            />
    );
};

const getChartData = (symbol, priceStates) => {
    const { labels, prices } = priceStatesToChartState(priceStates);

    const borderColor = getUpDownColor(priceStates);
    const chartData = {
        labels,
        datasets: [{
            label: symbol.toUpperCase(),
            fill: false,
            data: prices,
            borderWidth: 2,
            borderColor,
        }],
    };

    return chartData;
};

const fetchPriceStates = async symbol => {
    const config = {
        headers: {symbol},
    };
    const res = await axios.get('http://localhost:9000/finance/history', config);
    const {data} = res;

    return data;
};

const getUpDownColor = priceStates => {
    const lastPrice = priceStates[0].close;
    const firstPrice = priceStates[priceStates.length - 1].close;
    const isUp = lastPrice >= firstPrice;

    const greenColor = 'rgba(52, 168, 83, 1)';
    const redColor = 'rgba(217, 48, 37, 1)';
    const upDownColor = isUp ? greenColor : redColor;

    return upDownColor;
}

export default Symbol;