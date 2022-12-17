import React from 'react'

export default function Book(props) {
  return (
    <div className='bookImg'>
        {/* <button> */}
        <img src={props.ImgSrc} alt={props.title} style={{
        height:"5.15em",
        marginTop:"-1.3px",       
        }}/>
            {/* </button>  */}
    </div>
  )
}
