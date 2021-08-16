import React, {useState, useContext, createContext, ReactNode} from 'react';


type dataContextType = {
    data: Array<[]>;
    saveData : (data: any) => void;
    loading: boolean;
    updateUrl: (url: string) => void;
    url: string;
}; // types

const dataContextDefaultValues: dataContextType = {
    data: [],
    loading: false,
    saveData: (data: any) => {},
    updateUrl: (url: string) => {},
    url:""
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
    const [url, setUrl] = useState("")

    const saveData = (data: []) => {
        setLoading(true)
        setData(data)
        setLoading(false)
    }

    const updateUrl = (url: string) => {
        setUrl(url)
    }

    const value = {
        data,
        saveData,
        loading,
        updateUrl,
        url
    };

    return (
        <>
            <DataContext.Provider value={value}>
                {children}
            </DataContext.Provider>
        </>
    );
}