import { createContext, useState } from "react";

// Initialized Context as the name of DataContext
export const DataContext = createContext(null); 

// Creating Context Component
const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useState('');
    const [js, setJs] = useState('');
    const [css, setCss] = useState('');

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;

// DataContext k sath apko ek provider milta hai jo ki apko ek value provide krta hai agar apne ko bhi value di hui hai toh usko export krta hai wo