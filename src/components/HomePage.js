import React from "react";
import Categori from "./Categori";
import i1 from './thumbnails/sports.jpg'
import i2 from './thumbnails/politics.jpg'
import i3 from './thumbnails/space.png'
import i4 from './thumbnails/astrology.jpg'
import i5 from './thumbnails/celebrity.png'
import i6 from './thumbnails/science.jpg'

export default function HomePage() {



  let list = [
    {
      title: "sports",
      description: "Sports journalism is a form of writing that reports on matters pertaining to sporting topics and competitions. ",
      image: i1,
      color:"primary"
    },
    {
      title: "politics",
      description: "Politics is the set of activities that are associated with making decisions in groups, or other forms of power relations between individuals, such as the distribution of resources or status.",
      image: i2,
      color:"info"
    },
    {
      title: "space",
      description: "SpaceNews is a print and digital publication that covers business and political news in the space and satellite industry. SpaceNews provides news, commentary and analysis to an audience of government officials, politicians and executives within the space industry.",
      image: i3,
      color:"primary"
    },
    {
      title: "astrology",
      description: "Astrology, type of divination that involves the forecasting of earthly and human events through the observation and interpretation of the fixed stars, the Sun, the Moon, and the planets.",
      image: i4,
      color:"danger"
    },
    {
      title: "celebrity",
      description: "News About Celebrities",
      image: i5,
      color:"success"
    },
    {
      title: "science",
      description: "Science News (SN) is an American bi-weekly magazine devoted to short articles about new scientific and technical developments, typically gleaned from recent scientific and technical journals.",
      image: i6,
      color:"primary"
    },
  ];
  return (
    <div className="d-flex flex-wrap justify-content-center my-2 mx-3">
      {list.map((e) => {
        return (
        <div className="col-md-3" key={e.title}>
          <Categori
            title={e.title}
            description={e.description}
            newLink={`/${e.title}`}
            btnClr={e.color}
            image={e.image}
          />
          </div>
        );
      })}
    </div>
  );
}
