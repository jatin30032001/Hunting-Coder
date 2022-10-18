import React, { useEffect, useState } from 'react'
 import styles from '../styles/Blog.module.css'
 import Link from 'next/Link'

const Blog = () => {

const [blogs , setBlogs] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/api/hello')
    .then((a)=>{
   return a.json();})
    
    .then((parsed)=>{
    
        setBlogs(parsed);
      })
    },[])
  

  return (
    <div className={styles.container}>
      <main className={styles.main}> 
   <h2>Latest Blogs</h2>
    <div className={styles.blogItem}>
      
      {blogs.map((blogitem)=>{
  return<div key={blogitem.title}>
<Link href={`/blogpost/${blogitem.slug}`}>
<h3 className={styles.blogItem}> {blogitem.title}</h3></Link>
 <p>{blogitem.content}</p>
 </div>
      })}
  </div>
</main>
  </div>
  )
}

export default Blog
