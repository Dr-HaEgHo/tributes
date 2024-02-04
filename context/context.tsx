"use client"

import React, { createContext, useContext, SetStateAction, Dispatch, useState, useReducer } from "react";

// type DataType = {
//     isActive: boolean
// }

interface ContextProps{
    isActive: number,
    setIsActive: Dispatch<SetStateAction<number>>
}



// const initialState = {
//     todos: [],
// };


export const GlobalContext = createContext<ContextProps>({
    isActive: 0,
    setIsActive: (): number => 0
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    

    const [isActive, setIsActive] = useState<number>(0)
    
    return (
        <GlobalContext.Provider value={{ 
            isActive, setIsActive
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export const useGlobalContext = useContext(GlobalContext)