'use client'

import React, { useEffect, useState } from 'react'
import conselhos from '@/data/conselhoAula'
import { Hearts } from 'react-loader-spinner'
import styles from './conselho.module.css'
function page() {

    const [apiData, setApiData] = useState('')
    console.log(conselhos)


    useEffect(() => {
        const conselhosFetch = async () => {
            try {

                const dados = await conselhos();
                setApiData(dados)

            } catch (error) {
                throw error;
            }
        }
        conselhosFetch();
    }, [])

    return (

        <div>
            {


                apiData ? (
                    <p className={styles.main}>{apiData.slip.advice}</p>
                ) : (
                    <div className={styles.loading}>
                        <Hearts
                            height="80"
                            width="80"
                            color="#000"
                            ariaLabel="hearts-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                )
            }

        </div>
    )
}

export default page