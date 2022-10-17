import React from 'react'
 import styles from '../styles/Blog.module.css'
 import Link from 'next/Link'

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}> 
   <h2>Latest Blogs</h2>
    <div className={styles.blogItem}>
      <Link href={'/blogpost/learn-javascript'}>
    <h3> JavaScript 2022</h3></Link>
    <p>This is the course of Javascript 2022</p>
  </div>
  <div className="blogItem">
    <h3> JavaScript 2022</h3>
    <p>This is the course of Javascript 2022</p>
  </div>
  <div className="blogItem">
    <h3> JavaScript 2022</h3>
    <p>This is the course of Javascript 2022</p>
  </div>
</main>
  </div>
  )
}

export default Blog
