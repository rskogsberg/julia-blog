import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import { TagRow } from './'


export default function PostGrid({posts}) {
  const Pages = Math.floor(posts.length / 9) + 1
  const [pageSize] = useState(9)
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value);
  }

  const paginatedPosts = useMemo(() => {
    const lastIndex = page * pageSize
    const firstIndex = lastIndex - pageSize

    return posts.slice(firstIndex, lastIndex)
  }, [page, pageSize, posts])

  useEffect(() => {
    window.scroll({
      top: 500,
      left: 0,
      behavior: 'smooth'
    })
  }, [page, pageSize])

  return (
    <section className="grid-pagination-container">
      <section className="post-grid container">
        {paginatedPosts.map((post, index) => (
          <div className="post-container">
            <figure>
              <Link to={post.link} key={index}>
                <img src={require(`../../assets/images/${post.image}`)} alt={post.image} />
              </Link>
            </figure>
            <TagRow tags={post.categories} />
            <h2>{post.title}</h2>
            <p className='author-text'>
              <span>
                By: 
                <Link to={`authors/${post.author}`}>
                  {post.author} 
                </Link>
              </span>
              <span>
                - {post.date}
              </span>
            </p>
            <p className="description-text">
              {post.description}
            </p>
          </div>
        ))}
      </section>
      <Pagination count={Pages} defaultPage={page} onChange={handleChange}/>
    </section>
  )
}
