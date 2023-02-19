import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import './assets/styles/App.css';
import './index.css'

function App() {
    const [message, setMessage] = useState({
        isLoading: true,
        data: null
    });
    const fetchData = async (apiUrl) => {
        await axios.get(apiUrl)
            .then( res => {
                setMessage({data: res.data, isLoading: false})
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        setMessage({isLoading: true, data: null})
        const apiUrl = 'http://localhost:5000/posts';
        fetchData(apiUrl)
            .catch(error => console.log(error))
    }, []);

    if (!message.isLoading) {
        return (
            <div className="App">
                <div className="bg-slate-900 text-sky-400 grid justify-items-center container-xl">
                    <h1>Hello Uliana!</h1>
                    {message.data.map((item, id) => <li key={id}>{item.title}</li>)}
                </div>
            </div>
        );
    }
    else {
        return (
            <h1 className={"text-3xl font-bold underline"}>
                Loading....
                Please reload this page
            </h1>
        )
    }
}

export default App;
