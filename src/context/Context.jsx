import React, { useState,useEffect } from 'react';
const ApiContent = React.createContext();

function Dataprovider({children}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const apiData = () => {
        fetch("/data.json").then(async (res)=>setData(await res.json())).catch((err)=>setError(true)).finally(()=>setLoading(false));
    }

    useEffect(() => {
        apiData();
    }, []);

    return (
        <ApiContent.Provider value={{data, loading, error}}>
            {children}
        </ApiContent.Provider>
    );
}

export const useData = () => React.useContext(ApiContent);

export { ApiContent, Dataprovider };