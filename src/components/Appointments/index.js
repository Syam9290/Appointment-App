// Write your code here

import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentList: [],
    starred: false,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onSubmitAddAppointment = event => {
    event.preventDefault()

    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  startedItem = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  filterStarAppointments = () => {
    this.setState(prevState => ({starred: !prevState.starred}))
  }

  getfilterAppointments = () => {
    const {appointmentList, starred} = this.state

    if (starred) {
      return appointmentList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return appointmentList
  }

  render() {
    const {title, date, starred} = this.state

    const filterAppointments = this.getfilterAppointments

    console.log(filterAppointments())
    console.log(starred)

    return (
      <div className="bgContainer">
        <div className="AppointmentContainer">
          <div className="AppointmentTopContainer">
            <div className="AddAppointmentContainer">
              <h2>Add Appointment</h2>
              <form
                className="formContainer"
                onSubmit={this.onSubmitAddAppointment}
              >
                <p className="title">TITLE</p>
                <input
                  type="text"
                  className="titlebox"
                  onChange={this.onChangeTitle}
                  value={title}
                />
                <p className="title">DATE</p>
                <input
                  type="date"
                  className="titlebox"
                  onChange={this.onChangeDate}
                  value={date}
                />
                <br />
                <button type="submit" className="addBtn">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
          </div>
          <hr />
          <div className="AppointmentTopContainer">
            <h3>Appointment</h3>
            <button
              type="button"
              className="starredBtn"
              onClick={this.filterStarAppointments}
            >
              starred
            </button>
          </div>
          <ul className="appointmentListContainer">
            {filterAppointments().map(eachItem => (
              <AppointmentItem item={eachItem} startedItem={this.startedItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
