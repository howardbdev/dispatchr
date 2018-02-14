import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class MainContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchTrails()
  }

  render() {
    console.log("In MainCont Render, this.props", this.props)
    return (
      <div className="main-container">
        --MainContainer--
      </div>
    )
  }
}

const mapStateToProps = ({users, trails}) => {
  return {
    users,
    trails
  }
}

export default connect(mapStateToProps, actions)(MainContainer)
