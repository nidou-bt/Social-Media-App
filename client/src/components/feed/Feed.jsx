import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import {Posts} from "../../dummyData"
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        
        {Posts.map(el=><Post el={el} key={Posts.id} />)}
        </div>
      </div>
  )
}

export default Feed