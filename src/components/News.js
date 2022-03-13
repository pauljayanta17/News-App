import React,{useEffect,useState} from "react";
import NewsItems from "./NewsItems";
import "../App.css";
import Spinner from "./Spinner";
function News (props){

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const pageSize=15
  const [totalPages, settotalPages] = useState(0);
 
  useEffect(() => {
    updateNews()
  },[]);


  const updateNews=async()=>{
    setloading(true)
    let data = await fetch(
      `https://free-news.p.rapidapi.com/v1/search?q=${props.category}&lang=en&page=${props.page}&page_size=${pageSize}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-news.p.rapidapi.com",
          "x-rapidapi-key": `${props.apiKey}`,
        },
      }
    );
    let parsedData = await data.json();
    setarticles(parsedData.articles)
    var t = parseInt(parsedData.total_pages / pageSize)
    settotalPages(t)
    setloading(false)
  }
  
 const handlePrevious = async() => {
    if (page !== 1) {
      setpage(page-1)
      setloading(true)
      let data = await fetch(
        `https://free-news.p.rapidapi.com/v1/search?q=${props.category}&lang=en&page=${page}&page_size=${pageSize}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": `${props.apiKey}`,
          },
        }
      );
      let parsedData = await data.json();
      setarticles(parsedData.articles)
      setloading(false)
    }
  };

 const handleNext = async() => {
    if (totalPages >= page) {
      setpage(page+1)
      setloading(true)
      let data = await fetch(
        `https://free-news.p.rapidapi.com/v1/search?q=${props.category}&lang=en&page=${page}&page_size=${pageSize}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": `${props.apiKey}`,
          },
        }
      );
      let parsedData = await data.json();
      setarticles(parsedData.articles)
      setloading(false)
    }
  };


    return (
      <div className="container mx-3 my-3">
        <h3 style={{ color: "indigo" }}>
          <span style={{ color: "white", paddingLeft: ".5em" }}>
            {props.heading.charAt(0).toUpperCase() +
              props.heading.slice(1)}
          </span>
        </h3>
        <div className="row">
          {loading ? (
            <Spinner />
          ) : (
            articles.map((res) => {
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
          {!loading && (
            <div className="d-flex justify-content-between my-3">
              <button
                disabled={page <= 1}
                type="button"
                className="btn btn-primary"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  
}


export default News
