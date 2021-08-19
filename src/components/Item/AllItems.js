import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig";
import { Col, Row, Button, Dropdown} from "react-bootstrap";
import Item from "./Item";
import { SortAlphaDown, SortAlphaDownAlt, SortAlphaUpAlt, SortDown, SortUp } from "react-bootstrap-icons";

const AllItems = ({ docId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = () => {
      db.collection("board").doc(docId).collection('items').onSnapshot(function (querySnapshot) {
        setItems(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            songName: doc.data().songName,
            songUrl: doc.data().songUrl,
            imageUrl: doc.data().imageUrl,
            mood: doc.data().mood,
            fav: doc.data().fav,
            date: doc.data().date,
          }))
        );
      });
    }
    getItems();
  }, [docId]);

  const sortByItemsAscending = (ascending) => {
    const compare = (a, b) => {
      if (a.songName < b.songName) {
        return -1;
      }
      if (a.songName > b.songName) {
        return 1;
      }
      return 0;
    }
    items.sort(compare);
    setItems(items.slice());
  }
  const sortByItemsDescending = (descending) => {
    const compare = (a, b) => {
      if (a.songName > b.songName) {
        return -1;
      }
      if (a.songName < b.songName) {
        return 1;
      }
      return 0;
    }
    items.sort(compare);
    setItems(items.slice());
  }

  const sortByDateDescending = (descending) => {
    const compare = (a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }
      return 0;
    }
    items.sort(compare);
    setItems(items.slice());
  }

  const sortByDateAscending = (ascending) => {
    const compare = (a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    }
    items.sort(compare);
    setItems(items.slice());
  }


  return (
    <Row>
      <Dropdown style={{textAlign: "right",}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort Items
        </Dropdown.Toggle>

        <Dropdown.Menu>
      <Dropdown.Item onClick={sortByItemsAscending}>
      <SortAlphaDown color="#0f939d" size={25} style={{ cursor: "pointer" }} />
</Dropdown.Item>
<Dropdown.Item onClick={sortByItemsDescending}>
      <SortAlphaUpAlt color="#0f939d" size={25} style={{ cursor: "pointer" }} />
</Dropdown.Item>
<Dropdown.Item onClick={sortByDateDescending}>
      <SortUp color="#0f939d" size={25} style={{ cursor: "pointer" }} />
</Dropdown.Item>
<Dropdown.Item onClick={sortByDateAscending}>
<SortDown color="#0f939d" size={25} style={{ cursor: "pointer" }} />

</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      
      
      {items.map((item) => {
        return (
          <Item docId={docId} item={item} items={items} songName={item.songName} itemId={item.id} songUrl={item.songUrl} mood={item.mood} favorite={item.fav} />
        )
      })}
    </Row>
  )
}

export default AllItems;