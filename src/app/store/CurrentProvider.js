"use client"
import { createContext, useState } from "react";

export const AppContext = createContext();

export const CurrentProvider = ({children}) => {

    const [currentPage, setCurrentPage] = useState('Home');

    const setDetailPage = () => {
        setCurrentPage('Detail')
    }

    const setHomePage = () => {
        setCurrentPage('Home')
    }
    return (

        <AppContext.Provider value={{currentPage, setHomePage, setDetailPage}}>
            {children}
        </AppContext.Provider>


    )
}