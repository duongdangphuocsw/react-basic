import React from "react";
class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    if (!this.state.titleJob || !this.state.salary) {
      alert("Please fill all fields");
    }
    event.preventDefault();
    console.log(">> check data's state: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 10000).toString(),
      titleJob: this.state.titleJob,
      salary: this.state.salary,
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="titleJob">Title's Job:</label>
          <br />
          <input
            type="text"
            value={this.state.titleJob}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="salary">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}
export default AddComponent;
