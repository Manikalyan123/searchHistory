import './index.css'

const HistoryItem = props => {
  const {history, onDeleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = history

  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="listItem">
      <div className="content">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl} </p>
      </div>
      <button testid="delete" onClick={onDelete} type="button" className="">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
