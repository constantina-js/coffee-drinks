"use client"
import { Component } from 'react';
import css from '../page.module.css'

interface CupProperties{

}

export default class Cup extends Component<CupProperties> {
    constructor(props: CupProperties){
        super(props);
    }

    render() {
        return(
            <div>
                <div className={css.espressoCup}>
                    <div className={css.liquidWrapper}>
                        <div className={css.espressoShot}></div>
                    </div>
                </div>

                <div className={css.demitasseCup}>
                    <div className={css.liquidWrapper}>
                        <div className={css.espressoShot}></div>
                    </div>
                </div>

                <div className={css.coffeeMugCup}>
                    <div className={css.liquidWrapper}>
                        <div className={css.espressoShot}></div>
                    </div>
                </div>

            </div>
        )
    }

}