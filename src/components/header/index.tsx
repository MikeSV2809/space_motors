"use client"

import styles from "./styles.module.scss"
import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect } from "react"

export function Header() {
    const [top, setTop] = useState(true);

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true);
    }

    useEffect(() => {

        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)

    }, [top])

    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">
                            <Image
                                className={styles.logo}
                                src="/logo.png"
                                alt="Logo Space Motors"
                                width={80}
                                height={60}
                                priority
                            />
                        </Link>
                    </div>

                    <nav className={styles.nav}>
                        <Link className={styles.link} href="/">HOME</Link>
                        <Link className={styles.link} href="/#servicos">SERVIÇOS</Link>
                        <Link className={styles.link} href="/#contatos">CONTATOS</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}