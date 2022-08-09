import React from 'react';
import Header from "./Header";

function FormPage(props) {
    const [count, setCount] -useState (0);
    const docment - ()=>{
        console.log (count)
        setCount(count -1 )
    }
    useEffect (()=>{
        docment.title- "вы нажали ${count} раз";
    },   [count]  )

    return (
        <>
            <Header/>
            <Footer/>
            <button onClick={decrement}</button>

        </>
    );
}

export default FormPage;