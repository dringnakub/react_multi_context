import React, { useContext } from 'react'
import { CounterContext } from '../store/CounterProvider';
import * as counterActions from '../actions/CounterAction'

export default function Counter() {
    const { addCounter, subCounter, counter } = useContext(CounterContext)

    console.log("Counter.js ", useContext(CounterContext))
    const addCounterClick = () => {
        console.log("addSubCounter start ")
        addCounter(1)
    }

    const subCounterClick = (e) => {
        subCounter(1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={(e) => addCounterClick()}>Add</button>
            <button onClick={(e) => subCounterClick()}>Sub</button>
        </div>
    )
}
