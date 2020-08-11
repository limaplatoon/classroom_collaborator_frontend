import React, { useState, useEffect } from 'react'
import API from '../API/campusNewsAPI'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import moment from 'moment';

const News = () => {
  const [news, setNews] = useState([])

  const getNewsNow = async () => {
    const response = await API.getNews()
    const responseJson = await response.json()
    setNews(responseJson.articles.slice(0, 5))
  }

  useEffect(() => {
    getNewsNow()
  }, [])


  console.log(news)


  return (
    <ListGroup>
      {news.map((n, idx) => (

        <ListGroupItem key={idx.toString()} tag="a" target="_blank" href={n.url} >
          <ListGroupItemHeading >{n.title}</ListGroupItemHeading>

          <ListGroupItemText>
            {n.description}
          </ListGroupItemText>
        </ListGroupItem>
      ))
      }
    </ListGroup >

  );

}

export default News;
