import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posto() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>asuahsauhsuahsuah</time>
                        <strong>shaushauahus asuahsauhsuahsuah suaasuahsauhsuahsuahsua</strong>
                        <p>asuahsauhsuahsua hsuaasuahsauhsuahsuahsuaasuahsauhsua hsuahsuaasuahsauhsuahsuahs uaasuahsauhsuahsuahsuaasuahsauhsu ahsuahsua asuahsauhsuahsuahsuaasuahs auhsuahsuahsua</p>
                    </a>
                    <a href="">
                        <time>asuahsauhsuahsuah</time>
                        <strong>shaushauahus asuahsauhsuahsuah suaasuahsauhsuahsuahsua</strong>
                        <p>asuahsauhsuahsua hsuaasuahsauhsuahsuahsuaasuahsauhsua hsuahsuaasuahsauhsuahsuahs uaasuahsauhsuahsuahsuaasuahsauhsu ahsuahsua asuahsauhsuahsuahsuaasuahs auhsuahsuahsua</p>
                    </a>
                    <a href="">
                        <time>asuahsauhsuahsuah</time>
                        <strong>shaushauahus asuahsauhsuahsuah suaasuahsauhsuahsuahsua</strong>
                        <p>asuahsauhsuahsua hsuaasuahsauhsuahsuahsuaasuahsauhsua hsuahsuaasuahsauhsuahsuahs uaasuahsauhsuahsuahsuaasuahsauhsu ahsuahsua asuahsauhsuahsuahsuaasuahs auhsuahsuahsua</p>
                    </a>
                </div>
            </main>
        </>
    )
}