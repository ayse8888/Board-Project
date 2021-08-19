import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig";
import ItemForm from "../Item/ItemForm";
import AllItems from "../Item/AllItems";
import EditListForm from "./EditListForm";
import { Row, Col, Button, Dropdown } from "react-bootstrap";
import { Switch } from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { SortAlphaUpAlt, SortAlphaDownAlt } from "react-bootstrap-icons";
import ListForm from "./ListForm";


const AllLists = () => {
  const [lists, setLists] = useState([])
  // const [listView, setListView] = useState(false);
  // const [tabView, setTabView] = useState(true);
  const [view, setView] = useState(false);

  const addNewList = () => {
    db.collection("board").onSnapshot(function (querySnapshot) {
      setLists(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          listName: doc.data().listName,
        }))
      );
    });
  }

  useEffect(() => {
    addNewList();
  }, []);
  // const listViewDisplay = () => {
  //   setListView(!listView)
  //   setTabView("")
  // };
  // const tabViewDisplay = () => {
  //   setListView("")
  //   setTabView(!tabView)
  // };


  const sortByListAscending = (ascending) => {
    const compare = (a, b) => {
      if (a.listName < b.listName) {
        return -1;
      }
      if (a.listName > b.listName) {
        return 1;
      }
      return 0;
    }
    lists.sort(compare);
    setLists(lists.slice());
  }
  const sortByListDescending = (descending) => {
    const compare = (a, b) => {
      if (a.listName > b.listName) {
        return -1;
      }
      if (a.listName < b.listName) {
        return 1;
      }
      return 0;
    }
    lists.sort(compare);
    setLists(lists.slice());
  }


  const handleChange = () => {
    setView(!view);
  };

  return (
    <Row>
      {/* <Button variant="primary" onClick={sortByListAscending}>sort by a to z</Button>
      <Button variant="primary" onClick={sortByListDescending}>sort by z to a</Button> */}
      {/* <Button variant="primary" onClick={tabViewDisplay}>Tab View</Button>
      <Button variant="primary" onClick={listViewDisplay}>List View</Button> */}
      {/* {allLists} */}
      <div className="mainContainer d-flex justify-content-between">
        <ListForm />
        <div className="switchButton">
          <BootstrapSwitchButton
            checked={view}
            onChange={handleChange}
            onlabel='Board View'
            onstyle='danger'
            offlabel='List View'
            offstyle='success'
            style='w-100 mx-1'
          />
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" >
            Sort Lists
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={sortByListAscending}>
              <SortAlphaUpAlt color="#0f939d" size={25} style={{ cursor: "pointer" }} />
            </Dropdown.Item>
            <Dropdown.Item onClick={sortByListDescending}>
              <SortAlphaDownAlt color="#0f939d" size={25} style={{ cursor: "pointer" }} />
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        </div>
        {!view ? (
          <Row>
            {lists.map((list) => {
              return (
                <Col xs={6} md={4} key={list.id}>
                  <h3>{list.listName}</h3>
                  <EditListForm docId={list.id} list={list} />
                  <ItemForm docId={list.id} />
                  <AllItems docId={list.id} />
                </Col>
              )
            })}
          </Row>
        ) : (
          <div>
            {lists.map((list) => {
              return (
                <Col xs={12} md={12} key={list.id}>
                  <h3>{list.listName}</h3>
                  <EditListForm docId={list.id} list={list} />
                  <ItemForm docId={list.id} />
                  <AllItems docId={list.id} />
                </Col>
              )
            })}
          </div>
        )}




    </Row>
  );
}

export default AllLists;