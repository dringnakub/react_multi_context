import React, { createContext, useState, useReducer } from "react"
import { counterReducer } from '../reducer/counterReducer';
import * as counterActions from '../actions/CounterAction'
export const CounterContext = createContext();

const initialState = {
    counter: 0
}

export const CounterProvider = ({ children }) => {
    const [counterState, counterDispatch] = useReducer(
        counterReducer,
        initialState
    );

    const { counter } = counterState

    counterActions.addCounter()


    const addCounter = (payload) => {
        counterDispatch({ type: "ADD_COUNTER", payload })
    }
    const subCounter = (payload) => {
        counterDispatch({ type: "SUB_COUNTER", payload })
    }


    return (
        <CounterContext.Provider value={{ counter, addCounter, subCounter }}>
            {children}
        </CounterContext.Provider>
    )
}
