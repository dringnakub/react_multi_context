import React, { cloneElement } from 'react'
import { CounterProvider } from './CounterProvider'
import { PostPostProvider } from './PostPostProvider'

const ProviderComposer = ({ contexts, children }) => {
    return contexts.reduce(
        (kids, parent) =>
            cloneElement(parent, {
                children: kids
            }),
        children
    )
}

export default function ContextProvider({ children }) {
    return (
        <ProviderComposer
            contexts={[
                <CounterProvider />,
                <PostPostProvider />
            ]}
        >
            {children}
        </ProviderComposer>
    )
}