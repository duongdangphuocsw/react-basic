import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "123",
        titleJob: "Web Developer",
        salary: "123",
      },
      {
        id: "456",
        titleJob: "Web Developer",
        salary: "123",
      },
      {
        id: "789",
        titleJob: "Web Developer",
        salary: "123",
      },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteJob = (job) => {
    let newListJobs = this.state.arrJobs;
    newListJobs = newListJobs.filter((currentJob) => {
      return currentJob.id !== job.id;
    });
    this.setState({
      arrJobs: newListJobs,
    });
  };
  render() {
    return (
      <React.Fragment>
        <AddComponent addNewJob={this.addNewJob}></AddComponent>
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </React.Fragment>
    );
  }
}
export default MyComponent;
