import React from 'react'

function NewsArticle({data}){
    return(
        <div className="news">
            <h1 className="news__title">{data.title}</h1>
            <p className="news__description">{data.description}</p> 
            <span  className="news__published">{data.publishedAt}</span><br/>
            <span className="news__source">{data.source.name}</span>
        </div>
    )
}

export default NewsArticle