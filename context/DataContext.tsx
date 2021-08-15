import React, {useState, useContext, createContext, ReactNode} from 'react';


type dataContextType = {
    data: Array<[]>;
    saveData : (data: any) => void;
    loading: boolean;
}; // types

const dataContextDefaultValues: dataContextType = {
    data: [],
    loading: false,
    saveData: (data: any) => {}
}; // context default values

const DataContext = createContext<dataContextType>(dataContextDefaultValues);

export function useData() {
    return useContext(DataContext);
}

type Props = {
    children: ReactNode;
};


export function DataProvider({ children }: Props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const saveData = (data: []) => {
        setLoading(true)
        setData(data)
        setLoading(false)
    }

    const value = {
        data,
        saveData,
        loading
    };

    return (
        <>
            <DataContext.Provider value={value}>
                {children}
            </DataContext.Provider>
        </>
    );
}