import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import WorldNewsCard from './WorldNewsCard';

function WorldNews() {

const [getNews, setGetNews] = useState([])



  const getData = () => {
    const newsAPI = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ymI7t3aBAlHh0rllpzAmTvlHw7OY4e8e'
    axios.get(newsAPI)
    .then(res => setGetNews(res.data.results))
  }

  console.log("getNews in WorldNews.js", getNews)


  useEffect(() => {
    getData()
  }, [])

  const newsMap = getNews.map((news, index)=> {
    return (
      <WorldNewsCard 
      key={index}
      img={news.multimedia[1].url}
      alt={news.multimedia[1].caption}
      title={news.title}
      abstract={news.abstract}
      author={news.byline}
      section={news.section}
      published={news.published_date}
      url={news.url}
      />
    )
  })

  
  return (
    <div className="world-news-container">
      <div className='world news'>
      {newsMap}
      </div>
    </div>
  );
}

export default WorldNews