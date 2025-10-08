import LayoutWrapper from '@/components/shared/LayoutWrapper'
import styles from './ServicePageIntro.module.css'
import AllServices from '../AllServices/AllServices'

export default function ServicePageIntro() {
  return (
    <section className={styles.container}>
        <LayoutWrapper>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1 className={styles.heading}>All Services</h1>
                    <p className={styles.copy}>We offer a wide range of grooming services to keep your pet looking and feeling their best. From basic baths to full grooming packages, our experienced groomers are here to provide top-notch care for your furry friend.</p>
                </div>
                <div className={styles.right}>
                    <AllServices />
                </div>
            </div>
        </LayoutWrapper>
    </section>
  )
}