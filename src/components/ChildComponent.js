import React from "react";
import {FaTrash} from 'react-icons/fa'
class ChildComponent extends React.Component {
  state = {
    showUser: false,
  };
  handleShowHide = () => {
    this.setState({ showUser: !this.state.showUser });
  };
  handleDeleteJob = (job) => {
    alert("Do you want to delete this job?");
    this.props.deleteJob(job)
    console.log(job)
  }
  render() {
    let { arrJobs } = this.props;
    let { showUser } = this.state;
    console.log(this.props);
    return (
      <React.Fragment>
        {showUser === false ? (
          <div>
            <button onClick={()=>this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="user-list">
              {arrJobs.map((user, index) => {
                return (
                  <div key={user.id}>
                    {user.id} - {user.titleJob} - {user.salary} <span onClick={()=>this.handleDeleteJob(user)}><FaTrash/></span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={()=>this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </React.Fragment>
    );
  }
}
export default ChildComponent;
