import React from 'react'
import styles from './postPage.module.css'
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
  const response = await fetch(base_url)
  const posts:Iposts[] = await response.json()
  return (
    <>
      <h1 className="text-fuchsia-500">Postingan Page</h1>
      {posts.map((post) =>{
        return (
          <CardList>
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