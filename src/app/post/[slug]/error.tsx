"use client"

import Link from "next/link"
import styles from './error.module.scss'

export default function Error(){
    return(
        <div className={styles.error}>
            <h1>Ops essa página não exisate</h1>
            <Link href="/" className={styles.a}>
              Voltar para home
            </Link>
        </div>
    )
}