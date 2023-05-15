import React from 'react'

function SportNewsCard(props) {
    return (
        <div className='news-wrapper'>
          <div className='news-container' key={props.id}>
            <img src={props.img} alt={props.alt}/>
            <h4><strong>{props.title}</strong></h4>
            <p>{props.abstract}</p>
            <p>{props.author}</p>
            <p>{props.section}</p>
            <a href={props.url}><em>Read More</em></a>
        {/* <p>{props.published}</p> */}
        </div>
        </div>
        
      )
    }

export default SportNewsCard