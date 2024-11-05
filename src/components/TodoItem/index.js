// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {editTitle: false, updateTitle: ''}

  onEdit = () => {
    const {tododetails} = this.props
    this.setState({editTitle: true, updateTitle: tododetails.title})
  }

  handleChange = e => {
    this.setState({updateTitle: e.target.value})
  }

  saveBtn = () => {
    this.setState({editTitle: false})
  }

  render() {
    const {editTitle, updateTitle} = this.state
    const text = editTitle === true ? 'Save' : 'Edit'
    const {tododetails, deletetodo, togglecomplete} = this.props
    const {id, title, complete} = tododetails

    const deleted = () => {
      deletetodo(id)
    }

    return (
      <li className="list">
        <>
          {editTitle ? (
            <div className="content">
              <input
                type="text"
                value={updateTitle}
                onChange={this.handleChange}
              />

              <button
                type="button"
                onClick={this.saveBtn}
                className="delete-btn"
              >
                {text}
              </button>
              <button type="button" onClick={deleted} className="delete-btn">
                Delete
              </button>
            </div>
          ) : (
            <div className="display">
              <div className="check">
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={() => togglecomplete(tododetails.id)}
                />
                {complete ? (
                  <p
                    className="text"
                    style={{
                      textDecoration: 'line-through',
                    }}
                  >
                    {title}
                  </p>
                ) : (
                  <p className="text">{title}</p>
                )}
              </div>
              <button
                type="button"
                onClick={this.onEdit}
                className="delete-btn"
              >
                {text}
              </button>
              <button type="button" onClick={deleted} className="delete-btn">
                Delete
              </button>
            </div>
          )}
        </>
      </li>
    )
  }
}
export default TodoItem
