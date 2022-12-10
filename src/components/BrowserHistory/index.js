import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class HistoryItems extends Component {
  state = {searchInput: '', List: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({List: initialHistoryList})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteItem = id => {
    const {List} = this.state
    const onDeleteList = List.filter(each => each.id !== id)
    this.setState({List: onDeleteList})
  }

  render() {
    const {searchInput, List} = this.state
    const filteredList = List.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const isInList = filteredList.length === 0
    return (
      <div className="Cont">
        <div className="blue-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="Input-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              value={searchInput}
              type="search"
              className="input"
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="search-cont">
          {List.length === 0 ? (
            <p className="emptyPassage">There is no history to show</p>
          ) : (
            <ul className="searchItemsCard">
              {filteredList.map(each => (
                <HistoryItem
                  history={each}
                  key={each.id}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default HistoryItems
