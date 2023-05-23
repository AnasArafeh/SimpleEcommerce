import { createContext, useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context: any = createContext(initialState);

    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        const store = { state, ...boundActions };

        return (
            <Context.Provider value={store}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}