"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, SetStateAction, Dispatch, useState, useReducer, useEffect } from "react";


interface ContextProps{
    isActive: number;
    setIsActive: Dispatch<SetStateAction<number>>;
    tabActive: string;
    setTabActive: Dispatch<SetStateAction<string>>;
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<ContextProps>({
    isActive: 0,
    setIsActive: (): number => 0,
    tabActive: "",
    setTabActive: (): string => "",
    loading: false,
    setLoading: (): boolean => false
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isActive, setIsActive] = useState<number>(0)
    const [tabActive, setTabActive] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    
    const path = usePathname()
    const router = useRouter()

    const routeToNewPath = () => {
        if(path === '/'){
          router.push('/about');
          setTabActive('/about');
        }else{
          setTabActive(path);
        }
      }

      useEffect(() => {
        routeToNewPath()
      }, [])
    
    return (
        <GlobalContext.Provider value={{ 
            isActive, 
            setIsActive,
            tabActive,
            setTabActive,
            loading,
            setLoading
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export const useGlobalContext = useContext(GlobalContext)