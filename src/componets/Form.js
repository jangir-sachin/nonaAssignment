import React from "react";
export default function Form({
  title,
  settitle,
  desc,
  setdesc,
  notes,
  setNotes,
}) {
  const inputHandler = (e) => {
    if (e.target.id === "title") {
      settitle(e.target.value);
    } else {
      setdesc(e.target.value);
    }
    console.log("title", title);
    console.log("desc", desc);
  };
  const addNoteHandler = (e) => {
    e.preventDefault();
    if (title !== "" && desc !== "") {
      setNotes((note) => {
        return [
          ...note,
          {
            title: title,
            desc: desc,
            id: new Date().getTime(),
          },
        ];
      });
    }
    settitle("");
    setdesc("");
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 mt-5">
            <form
              style={{
                border: "5px solid lightgray",
                borderRadius: "15px",
                padding: "20px",
              }}
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Title Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="title"
                  placeholder="Enter Your Title Name"
                  value={title}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Description
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  rows="3"
                  className="form-control"
                  placeholder="Enter Your Description"
                  value={desc}
                  onChange={inputHandler}
                ></textarea>
                {/* <input type="password" className="form-control" id="exampleInputPassword1"/> */}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addNoteHandler}
              >
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
