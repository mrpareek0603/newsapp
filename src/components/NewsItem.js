import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="carousel-item active" data-bs-ride="carousel" >
                    <img src={imageUrl} className="card-img-top" style={{ height: "50vh" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 45)}...</h5>
                        <p className="card-text">{description.slice(0, 80)}...</p>
                        <div className="container d-flex justify-content-between">
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                            <a href="/newsdetail" className="btn btn-sm btn-primary">Read Later</a>
                        </div>


                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItem