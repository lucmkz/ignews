import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicCliente } from '../../services/prismic'
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

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicCliente()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post'),
    ],{
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })

    console.log(response)
    return {
        props: {}
    }
} 