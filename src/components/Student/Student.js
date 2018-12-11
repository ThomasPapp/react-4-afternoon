import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3005/students/"+ this.props.match.params.id)
    .then(res => this.setState({ studentInfo: res.data }))
    .catch(err => console.log("Error while fetching student info", err))
  }

  render() {
    const student = this.state.studentInfo
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{ student.first_name } { student.last_name }</h1>

        <h3>Grade: { student.grade }</h3>
        <h3>Email: { student.email }</h3>

        <Link to={`/classlist/${student.class}`}>
          <button>Back</button>
        </Link>
      </div>
    )
  }
}