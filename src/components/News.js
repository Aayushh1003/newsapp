import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  articles = [
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Issy Ronald",
      "title": "'We got cheated': LA Lakers furious after missed foul in loss to Boston Celtics - CNN",
      "description": "LeBron James was left hunched on the court in frustration after referees missed a foul on his attempted game-winning layup, and the Los Angeles Lakers succumbed to a 125-121 overtime loss against the Boston Celtics.",
      "url": "https://www.cnn.com/2023/01/29/sport/la-lakers-boston-celtics-controversy-spt-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230129045229-01-lakers-celtics-012923-intl.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-01-29T10:31:00Z",
      "content": "LeBron James was left hunched on the court in frustration after referees missed a foul on his attempted game-winning layup, and the Los Angeles Lakers succumbed to a 125-121 overtime loss against the… [+1520 chars]"
    },
    {
      "source": { "id": null, "name": "Des Moines Register" },
      "author": ", The Des Moines Register",
      "title": "RAGBRAI's 2023 route distance, towns revealed for the 50th anniversary - Des Moines Register",
      "description": "Des Moines will serve as the Day 4 overnight host as the ride attempts to set a world record",
      "url": "https://www.desmoinesregister.com/story/news/2023/01/29/ragbrai-route-2023-map-distance-towns-announced-dates-iowa-sioux-city-ames-des-moines-davenport/69744538007/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2023/01/29/PDEM/e512c9a8-9e30-4df8-bdf3-ae87dd05b5ac-01282023-RAGBRIAParty-MMK0008.jpg?auto=webp&crop=4966,2794,x0,y252&format=pjpg&width=1200",
      "publishedAt": "2023-01-29T02:19:48Z",
      "content": "RAGBRAI is going back to where it all started.\r\nThe route for the July 23-29 50th anniversary edition of the Des Moines Registers Annual Great Bicycle Ride Across Iowa, announced Saturday night at th… [+10809 chars]"
    },
    {
      "source": { "id": null, "name": "9to5google.com" },
      "author": "Abner Li",
      "title": "Google’s MusicLM is rather good at creating music from text descriptions - 9to5Google",
      "description": "MusicLM is Google's latest generative AI and it can turn text descriptions of varying complexity into high-fidelity music...",
      "url": "https://9to5google.com/2023/01/28/google-musiclm/",
      "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2017/12/google-ai-e1513283534909.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-01-28T11:00:00Z",
      "content": "MusicLM is Google’s latest generative AI and it can turn text descriptions of varying complexity into high-fidelity music.\r\nMusicLM casts the process of conditional music generation as a hierarchical… [+2006 chars]"
    },
    {
      "source": { "id": null, "name": "HuffPost" },
      "author": "AP",
      "title": "How To See The Green Comet Zooming Our Way For First Time In 50,000 Years - HuffPost",
      "description": "The comet last visited during Neanderthal times, according to NASA.",
      "url": "https://www.huffpost.com/entry/green-comet_n_63d4eb27e4b07c0c7e03ca10",
      "urlToImage": "https://img.huffingtonpost.com/asset/63d4eb282200006d0032a3c7.jpeg?cache=0mXMJFRvht&ops=1200_630",
      "publishedAt": "2023-01-28T09:38:52Z",
      "content": "CAPE CANAVERAL, Fla. (AP) A comet is streaking back our way after 50,000 years.\r\nThe dirty snowball last visited during Neanderthal times, according to NASA. It will come within 26 million miles (42 … [+3477 chars]"
    }
  ]

  constructor() {
    super();
    console.log("contructor from news component");
    this.state={
      articles: this.articles
    }
    
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230129045229-01-lakers-celtics-012923-intl.jpg?c=16x9&q=w_800,c_fill" />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>

        </div>
      </div>
    )
  }
}
