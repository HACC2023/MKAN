import React, { useState } from "react"

const Post = () => {
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState("")

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleComment = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText])
      setCommentText("")
    }
  }

  return (
    <>
      <div
        className='post'
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex" }}>
          <div className='image-container'>
            <img
              src='https://cdn.scrippsnews.com/images/videos/x/1697397312_yvnL72.jpg'
              alt='Lahaina'
              style={{ width: "250px", height: "auto" }}
            />
          </div>
          <div className='post-content'>
            <h2>School Reopening</h2>
            <p>
              Looking for responses on this survey regarding school reopenings
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={handleLike}
            style={{ padding: "10px 10px", marginRight: "10px" }}
          >
            <span role='img' aria-label='Like' style={{ fontSize: "14px" }}>
              👍
            </span>
          </button>
          <span>{likes} likes</span>
          <p style={{ marginLeft: "10px" }}>{comments.length} comments</p>
        </div>
        <div style={{ marginTop: "auto", display: "flex" }}>
          <input
            type='text'
            placeholder='Add a comment...'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{ height: "20px", width: "188px" }}
          />
          <button onClick={handleComment} style={{ marginLeft: "10px" }}>
            Comment
          </button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
      <div
        className='post'
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex" }}>
          <div className='image-container'>
            <img
              src='https://governor.hawaii.gov/wp-content/uploads/2023/02/governor_green_-046-scaled.jpg'
              alt='Lahaina'
              style={{ width: "250px", height: "auto" }}
            />
          </div>
          <div className='post-content'>
            <h2>Governor Speaking</h2>
            <p>Governor Green will be speaking near Kelawea park</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={handleLike}
            style={{ padding: "10px 10px", marginRight: "10px" }}
          >
            <span role='img' aria-label='Like' style={{ fontSize: "14px" }}>
              👍
            </span>
          </button>
          <span>{likes} likes</span>
          <p style={{ marginLeft: "10px" }}>{comments.length} comments</p>
        </div>
        <div style={{ marginTop: "auto", display: "flex" }}>
          <input
            type='text'
            placeholder='Add a comment...'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{ height: "20px", width: "188px" }}
          />
          <button onClick={handleComment} style={{ marginLeft: "10px" }}>
            Comment
          </button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
      <div
        className='post'
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex" }}>
          <div className='image-container'>
            <img
              src='https://mediaim.expedia.com/destination/2/663da6036f144f05eff4b0dec5821ab5.jpg'
              alt='Lahaina'
              style={{ width: "250px", height: "auto" }}
            />
          </div>
          <div className='post-content'>
            <h2>Free food </h2>
            <p>
              There will be free food handed out by 'Aloha Braised Food Truck'
              near Lahaina beach at 2pm.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={handleLike}
            style={{ padding: "10px 10px", marginRight: "10px" }}
          >
            <span role='img' aria-label='Like' style={{ fontSize: "14px" }}>
              👍
            </span>
          </button>
          <span>{likes} likes</span>
          <p style={{ marginLeft: "10px" }}>{comments.length} comments</p>
        </div>
        <div style={{ marginTop: "auto", display: "flex" }}>
          <input
            type='text'
            placeholder='Add a comment...'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{ height: "20px", width: "188px" }}
          />
          <button onClick={handleComment} style={{ marginLeft: "10px" }}>
            Comment
          </button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Post
