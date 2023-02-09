import React from 'react'

 const NewsItem  = (props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        position: 'absolute',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'flex-end'}}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2023/01/Collage-Maker-27-Jan-2023-08.25-AM-770x435.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <div className="card-footer">
                        <small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small>
                    </div>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm btn-primary">Read More</a>
                </div>
            </div>
            </div >
        )
    
}

export default NewsItem
