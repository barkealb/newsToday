import React from 'react'
import {useState, useEffect} from 'react';
import NewsCard from './components/NewsCard'
import axios from 'axios';


function Home() {
    const [getNews, setGetNews] = useState([])

    const getData = () => {
      const newsAPI = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ymI7t3aBAlHh0rllpzAmTvlHw7OY4e8e'
      axios.get(newsAPI)
      .then(res => setGetNews(res.data.results))
    }
  
  
    useEffect(() => {
      getData()
    }, [])
  
  
    const newsMap = getNews.map((news, index)=> {
      return (
        <NewsCard 
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
      <div className="App">
        <div className='app news'>
        {newsMap}
        </div>
      </div>
    );
  }

export default Home



