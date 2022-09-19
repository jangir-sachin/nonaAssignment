import React from "react";

const Notes = (element, Notes, setNotes, key, setEditId) => {
  console.log("element", element);
  console.log("notesss33", element.Notes);
  const removeHandler = (id) => {
    console.log("element222", element.Notes);
    console.log("id", id);

    const newNotes = element.Notes.filter((elm) => {
      if (elm.id !== id) {
        return elm;
      }
    });
    element.setNotes(newNotes);
  };
  const editHandler = (id) => {
    element.setEditId(id);
    console.log("mdscksdcmd");
    element.Notes.filter((elem) => {
      if (elem.id === id) {
        document.getElementById("edittitle").value = elem.title;
        document.getElementById("editdesc").value = elem.desc;
      }
    });
  };
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body" style={{ textTransform: "capitalize" }}>
          <h5 className="card-title">{element.element.title}</h5>
          <p
            style={{ fontSize: "20px", color: "lightgray" }}
            className="card-text"
          >
            {" "}
            {element.element.desc}{" "}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              editHandler(element.element.id);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              removeHandler(element.element.id);
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default Notes;
