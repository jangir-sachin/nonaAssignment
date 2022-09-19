import React, { useState } from "react";
import Navabr from "../src/componets/Navbar";
import Form from "./componets/Form";
import Notes from "./componets/Notes";
import EditModal from "./componets/EditModal";
export default function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [notes, setNotes] = useState(getNotesFromLS);
  const [editId, setEditId] = useState("");

  console.log("note1", notes);
  localStorage.setItem("notes", JSON.stringify(notes));

  return (
    <>
      <EditModal editId={editId} Notes={notes} setNotes={setNotes} />
      <Navabr />
      <Form
        title={title}
        settitle={settitle}
        desc={desc}
        setdesc={setdesc}
        notes={notes}
        setNotes={setNotes}
      />
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">
              {notes.length === 0 ? (
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Message : </h5>
                    <p className="card-text">Description : </p>
                  </div>
                </div>
              ) : (
                notes.map((element) => {
                  console.log("notes", notes);
                  return (
                    <Notes
                      Notes={notes}
                      element={element}
                      key={element.id}
                      setNotes={setNotes}
                      setEditId={setEditId}
                    />
                  );
                })
              )}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

const getNotesFromLS = () => {
  const note = JSON.parse(localStorage.getItem("notes"));
  if (note) {
    return note;
  } else {
    return [];
  }
};
