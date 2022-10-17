import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'


const slug = () => {
    const router= useRouter();
    const{slug} = router.query;
  return (
    <div className={styles.container}>
        <main className={styles.main}>

       
      <h1>Title of the page {slug}</h1>
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab et ad eius ipsam optio mollitia rerum laborum. Debitis, incidunt commodi?</div>
      </main>
    </div>
  )
}

export default slug
