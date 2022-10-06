import React from "react";

function NewBookForm() {
  return (
    <>
      <h1>Enter details of the new book here</h1>
      <form className="newbookform">
        <label>
          Title
          <input type="text" name="text" />
        </label>
        <label>
            Category
            <input type="text" name="text" />
        </label>
        <label>
          Genre 
          <input type="text" name="text" />
        </label>
        <label>
            Year Published
            <input type="text" name="text" />
        </label>
        <div>
        <input id="submit" type="submit" value="Add Book"/>
        </div>
      </form>
    </>
  );
}

export default NewBookForm;
