import React from 'react'
// import styles from './postPage.module.css'
import CardList from '../components/Posts/CardList'
import ViewUserButton from '../components/Posts/ViewUserButton'

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Iposts {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Posts = async() => {
  const response = await fetch(base_url, {
    cache: "no-store", // fetching data jika direload
    // next: {revalidate: 10} // fetching data setiap 10second
  })
  const posts:Iposts[] = await response.json();

  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">Postingan Page</h1>
      {posts.map((post) =>{
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId}/>
          </CardList>
        )
        
      })}
      
    </>
    
  )
}

export default Posts