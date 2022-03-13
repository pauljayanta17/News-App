import React,{useState} from "react";

function NewsItems(props) {
  const [btnColor, setbtnColor] = useState("dark");
  
 const onMouseOverHandle=()=>{
  setbtnColor("success")
  }

 const onMouseOutHandle=()=>{
   setbtnColor("dark")
  }
    return (
      <div className="card mx-2 my-2" id="newsitems">
        <img
          src={props.imageUrl}
          className="card-img-top rounded"
          style={{height: "75%"}}
          alt="Loading"
        />
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.content && props.content}
          </p>
          <div className="d-flex justify-content-center align-self-end">
            <a
              href={props.url}
              target="/"
              className={`btn btn-sm btn-${btnColor}`}
              onMouseOver={onMouseOverHandle}
              onMouseOut={onMouseOutHandle}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}


export default NewsItems