import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import EditForm from "./EditForm";
import { PlayCircle } from 'react-bootstrap-icons';

const Item = ({ item, songName, itemId, songUrl, mood, favorite, items, docId }) => {

    const cardStyle = {
        color: 'white',
        textAlign: "center",
        background: `linear-gradient(0deg, rgb(23 23 23 / 86%), rgb(0 0 0 / 67%)),url(${item.imageUrl}) center center`,
        backgroundSize: "cover",
        borderRadius: "22px",
        border: "solid 4px #00d0e8",
        height: "460px",
        objectFit: "cover"
      };

  return (
      <Card
    style={cardStyle}
    className="songsCard mb-2"
    key={itemId}
  >
    <h3>{songName}</h3>
    <a href={songUrl} target="_blank" rel="noreferrer"><PlayCircle color="#00d0e9" size={50} className="my-3"/></a>
    <p>Mood: {mood}</p>
    {/* <p>Date added: {item.date.toDate().toISOString().substr(0, 10)}</p> */}
    <EditForm items={items} item={item} itemId={itemId} docId={docId} favorite={favorite}/>
  </Card>
)
}

export default Item;