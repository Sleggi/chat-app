import React, { createContext } from 'react'



export const ThemesContext = createContext()

export const ThemesProvider = (props) => {

    const themes = {
        light: {
            background: 'rgba(75, 75, 75, .2)',
        },

        rose: {
            background: '#e23e57',
        },

    }


    return (
        <ThemesContext.Provider value={{ themes }}>
            {props.children}
        </ThemesContext.Provider>
    )
}
