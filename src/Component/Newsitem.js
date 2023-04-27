import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt } = this.props;
    return (
      <div className="card h-100 my-3">
        <img
          src={!imgUrl ? "news.jpg" : imgUrl}
          className="card-img-top fix"
          alt="responsive"
        />
        <div className="card-body">
          <h5 className="card-title">{title}.</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">Last updated {publishedAt}</small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
