import React from 'react'

const DetailImag = (props) => {

  return (
    <div>
      <div className="p-media__thumb">
        {props.images.length > 0 && (
          <img alt="プレビュー" src={props.images[0].path}/>)
        }
      </div>

    </div>
  )
}

export default DetailImag