// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {item, startedItem} = props
  const {id, title, date, isStarred} = item

  const onclickStar = () => {
    startedItem(id)
  }

  const star = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointmentContainer">
      <div className="appointmentTitleSection">
        <h4>{title}</h4>
        <button type="button" onClick={onclickStar} className="starBtn">
          <img src={star} className="starImg" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
