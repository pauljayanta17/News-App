import React, { Component } from "react";
import NewsItems from "./NewsItems";
import "../App.css";
import Spinner from "./Spinner";
export default class News extends Component {
  static defaultProps = {
    category: "general",
    heading: "What is going on today ?",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 15,
      totalPages: null,
      rem: 0,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let data = await fetch(
      `https://free-news.p.rapidapi.com/v1/search?q=${this.props.category}&lang=en&page=${this.props.page}&page_size=${this.state.pageSize}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-news.p.rapidapi.com",
          "x-rapidapi-key": `${this.props.apiKey}`,
        },
      }
    );
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalPages: parseInt(parsedData.total_pages / this.state.pageSize),
      rem: parsedData.total_pages % this.state.pageSize,
      loading: false,
    });
  }

  handlePrevious = () => {
    if (this.state.page !== 1) {
      this.setState(
        {
          page: this.state.page - 1,
          loading: true,
        },
        async () => {
          let data = await fetch(
            `https://free-news.p.rapidapi.com/v1/search?q=${this.props.category}&lang=en&page=${this.state.page}&page_size=${this.state.pageSize}`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": `${this.props.apiKey}`,
              },
            }
          );
          let parsedData = await data.json();
          this.setState({
            articles: parsedData.articles,
            loading: false,
          });
          // console.log(this.state.page);
        }
      );
    }
  };

  handleNext = () => {
    if (this.state.totalPages >= this.state.page) {
      this.setState(
        {
          page: this.state.page + 1,
          loading: true,
        },
        async () => {
          let data = await fetch(
            `https://free-news.p.rapidapi.com/v1/search?q=${this.props.category}&lang=en&page=${this.state.page}&page_size=${this.state.pageSize}`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": `${this.props.apiKey}`,
              },
            }
          );
          let parsedData = await data.json();
          this.setState({
            articles: parsedData.articles,
            loading: false,
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="container mx-3 my-3">
        <h3 style={{ color: "indigo" }}>
          <span style={{ color: "green", paddingLeft: ".5em" }}>
            {this.props.heading.charAt(0).toUpperCase() +
              this.props.heading.slice(1)}
          </span>
        </h3>
        <div className="row">
          {this.state.loading ? (
            <Spinner />
          ) : (
            this.state.articles.map((res) => {
              return (
                <div className="col-md-4" key={res._id}>
                  <NewsItems
                    title={res.title ? res.title : ""}
                    imageUrl={
                      res.media
                        ? res.media
                        : "https://cdn.dribbble.com/users/88213/screenshots/8560585/media/7263b7aaa8077a322b0f12a7cd7c7404.png?compress=1&resize=400x300"
                    }
                    url={res.link ? res.link : ""}
                    content={res.summary ? res.summary : "Unavailable"}
                  />
                </div>
              );
            })
          )}
          {!this.state.loading && (
            <div className="d-flex justify-content-between my-3">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-primary"
                onClick={this.handlePrevious}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleNext}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
