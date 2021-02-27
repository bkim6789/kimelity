import { Line } from 'react-chartjs-2';

import {options, getUpDownColor} from './SymbolChart-utils';

const SymbolChart = ({symbol, labels, prices}) => {
    if (!prices || !prices.length) return null;

    const borderColor = getUpDownColor(prices);

    const data = {
        labels,
        datasets: [{
            label: symbol.toUpperCase(),
            fill: false,
            data: prices,
            borderWidth: 2,
            borderColor,
        }],
    };

    return (
        <Line
            data={data}
            options={options}
        />
    );
}

export default SymbolChart;