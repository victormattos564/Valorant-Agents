'use client';

import valorantAgente from '../../data/valorant.js'
import styles from './valorant.module.css';
import { useState, useEffect } from "react";

import { RotatingLines } from  'react-loader-spinner'

import React from 'react';

function page() {
    const [apiData, setApiData] = useState('');

    useEffect(() => {
        const valorantFetch = async () => {
            try {
                const dados = await valorantAgente();
                setApiData(dados);

            } catch (error) {
                throw error;
            }
        };

        valorantFetch();
    }, [])

    return (
        <div className={styles.main}>
            {
                apiData ? (
                    apiData.data.map((agente) => (
                        <div key={agente.uuid} className={styles.mainDiv}>
                            <p className={styles.title}>{agente.displayName}</p>
                            <img src={agente.bustPortrait} alt={agente.displayName} width={250} height={250}></img>
                            <p className={styles.description}>{agente.description}</p>
                            <p className={styles.skills}>Skills</p>

                            <div className={styles.ability}>
                                {
                                    agente.abilities.map((ability) => (

                                        <div className={styles.abilityDiv} key={ability.displayName}>

                                            <p>{ability.displayName}</p>
                                            <img src={ability.displayIcon} width={50} height={50} className={styles.abilityIcon}></img>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))


                ) : (
                    <div className={styles.loader}>

                        <RotatingLines
                            strokeColor="#ff4656"
                            strokeWidth="2"
                            animationDuration="0.75"
                            width="50"
                            visible={true}
                        />

                    </div>
                )
            }
        </div>

    )
}

export default page