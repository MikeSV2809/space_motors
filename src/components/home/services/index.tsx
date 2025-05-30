import styles from './styles.module.scss'
import { HomeProps } from '@/utils/home.type'
import Image from 'next/image'

export function Services({ object }: HomeProps) {
    return (
        <>
            <section className={styles.containerAbout}>
                <article className={styles.innerAbout}>
                    <h1 className={styles.title}>Sobre</h1>
                    <p>{object.metadata.about.description}</p>
                </article>

                <div className={styles.bannerAbout}>
                    <Image
                        className={styles.imageAbout}
                        alt="Imagem ilustrativa sobre a empresa"
                        quality={100}
                        fill={true}
                        src={object.metadata.about.banner.url}
                        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
                    />
                </div>
            </section>

            <div id="servicos">
                <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
            </div>

            <section className={styles.services}>

                {object.metadata.services.map(service => (
                    <article key={service.description} className={styles.service}>
                        <div className={styles.innerService}>
                            <Image
                                className={styles.imageService}
                                alt="Imagem do serviço"
                                quality={100}
                                fill={true}
                                src={service.image.url}
                                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
                            />
                        </div>
                        <p>{service.description}</p>
                    </article>
                ))}

            </section>

        </>
    )
}