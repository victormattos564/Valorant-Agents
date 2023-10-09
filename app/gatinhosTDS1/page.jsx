'use client'
import valorants from "@/data/gatinhosTDS1";
import { useState, useEffect } from "react";

import React from 'react'

function page() {
    const [apiData, setApiData] = useState('');

    useEffect(() => {
        const valorantsFetch = async () => {
            try {
                const dados = await valorants();
                setApiData(dados);
                console.log(dados)
            } catch (error) {
                throw (error)
            }
        }
        valorantsFetch();
    }, [])

   
    return (
        <div>
            <p>ABRIU</p>
            {
                apiData ? (
                    apiData.map ((valorant) => (
                        <div key={valorant.id}>
                            <p>{valorant.id}</p>
                            <img src={valorant.url} alt={valorant.id}  width={256}  height={256}/>
                        </div>
                    )
                    )
                ) : (
                    <p>Carregando dados da API...</p>
                )
            }
        </div>
    )
}

export default page
