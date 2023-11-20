import React, {useEffect, useState} from "react";
import style from './Chart.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut, Pie} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {

    const reportKind = props.reportMode ? 'income' : 'expense';

    const [labelsCategories, setLabelCategories] = useState([]);
    const [sums, setSums] = useState([]);

    useEffect(() => {
        let categories = props.operations.map(e => {
            if (e.kind === reportKind){
                return e.category
            }
        })
        let uniqCategories = (Array.from(new Set(categories))).filter(e => e !== undefined);
        setLabelCategories(uniqCategories);

        let sumsArray = [];
        uniqCategories.forEach(e => {
            let totalSum = 0;
            props.operations.forEach(operation => {
                if (operation.kind === reportKind && operation.category === e) {
                    totalSum = totalSum + +operation.amount;
                }
            })
            sumsArray.push(totalSum);
        })
        setSums(sumsArray);
    }, [props.reportMode]);

    const data = {
        labels: labelsCategories,
        datasets: [{
            label: 'Всего',
            data: sums,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    }

    return (
        <div className={style.wrapper}>
            <Doughnut
                data={data}
            />
        </div>
    )
};
export default PieChart;
