import React from 'react'

function Article({data}){
    return(
        <div className="article">
            <h1 className="article__title">{data.title}</h1>
            <span><img className="article_image" src={data.imageURL} width="330" alt="img"/></span> <br /> 
            <span className="article__description">{data.description}</span>
        </div>
    )
}

export default Article;