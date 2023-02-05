import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl,author,date} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2023/01/Collage-Maker-27-Jan-2023-08.25-AM-770x435.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <div className="card-footer">
                            <small className="text-muted">By {!author?"Unknown":author} on {date}</small>
                        </div>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
