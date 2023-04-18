import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase";
import "./Register.css";
import NoteList from "./NoteList";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDescri] = useState("");
  const [date, setDate] = useState("");

  var arr = JSON.parse(localStorage.getItem("notes")) || [];

  const handleclick = () => {
    let obj1 = {
      title,
      desc,
      date,
    };
    arr.push(obj1);
    localStorage.setItem("notes", JSON.stringify(arr));
    window.location.reload();
  };

  
  var arr1 = JSON.parse(localStorage.getItem("bookmark")) || [];
  function handleBookmark(e) {
    arr1.push(e);
    localStorage.setItem("bookmark", JSON.stringify(arr1));

    alert("Add to Bookmark Succefull!");
  }

  return (
    <>
      <div>
        <div id="register-form">
          <form className="form-signup text-center">
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ textAlign: "center" }}
            >
              Add Note
            </h1>

            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Title of Notes"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              onChange={(e) => setDescri(e.target.value)}
              required
            />
            <input
              id="inputDate"
              className="form-control"
              type="date"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <button
              onClick={handleclick}
              className="btn btn-primary btn-block"
              type="submit"
            >
              <i className="fas fa-user-plus"></i> &nbsp; Add Note
            </button>
          </form>
        </div>
      </div>

      <NoteList />
    </>
  );
};

export default NoteForm;
