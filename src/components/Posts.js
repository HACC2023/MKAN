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
      <div
        className='post'
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex" }}>
          <div className='image-container'>
            <img
              src="data:image/jpeg;base64,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"
              alt='Lahaina'
              style={{ width: "250px", height: "auto" }}
            />
          </div>
          <div className='post-content'>
            <h2>New Tool Available </h2>
            <p>
              Under the Tools sections, there is a new Google 3D render application. Go and create your
              version of Lahaina.
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