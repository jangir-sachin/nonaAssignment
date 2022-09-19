import React from "react";

export default function EditModal(editId, notes, setNotes) {
  const updateHandler = () => {
    console.log("notesss", editId);
    const updateNotes = editId.Notes.map((elem) => {
      console.log("elemmm", editId);
      if (editId.editId === elem.id) {
        return {
          ...elem,
          title: document.getElementById("edittitle").value,
          desc: document.getElementById("editdesc").value,
        };
      } else {
        return elem;
      }
    });
    editId.setNotes(updateNotes);
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Notes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Title Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="edittitle"
                    //   placeholder="Enter Your Title Name"
                    //   value={title} onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="desc"
                    id="editdesc"
                    rows="3"
                    className="form-control"
                    placeholder="Enter Your Description"
                    //   value={desc}
                    //   onChange={inputHandler}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={updateHandler}
              >
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
