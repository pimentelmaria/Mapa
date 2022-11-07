import styles from '../styles/Components.module.scss'
import React, { useState } from 'react'



export default function CountryCard({open, onClose, info}) {

    if (!open) return null

    return (
        <div className={styles.countrycard}>
            <div className = 'countryCardLeft'>
                <div className = 'countryCardImage'>
                    <img className={styles.spaceimage} src="/images/musicalnotes.png" alt="imagealt" />
                </div>
            </div>
            <div className={styles.vertical}>
                <div className={styles.spacebutton}>
                    <button onClick={onClose}>X</button>
                </div>
                <div className = 'countryCardText'>
                    <h1>The bird is singing!</h1>
                    <a className={styles.alignright} href="https://www.youtube.com/watch?v=6f0T6UV-HiI" target="_blank">😃 Click to hear 😃</a>
                </div>
            </div>
        </div>
    )
}