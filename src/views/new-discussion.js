import React from "react";

function NewDiscussion() {
  return (
    <React.Fragment>
      <form>
        <h1>New Discussion</h1>
        <div>
          <label>
            Title
            <br />
            <input type="text" />
          </label>
        </div>
        <label>
          Body
          <br />
          <textarea />
        </label>
        <div>
          <button type="submit" name="submit" value="Submit">
            Submit
          </button>
          <button type="reset" name="clear" value="Reset">
            Reset
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
export default NewDiscussion;
