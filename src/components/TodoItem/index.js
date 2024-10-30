// Write your code here
import {Component} from 'react'

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
    const {tododetails, deletetodo, togglecomplete} = this.props
    const {id, title, complete} = tododetails

    const deleted = () => {
      deletetodo(id)
    }

    return (
      <li>
        <>
          {editTitle ? (
            <>
              <input
                type="text"
                value={updateTitle}
                onChange={this.handleChange}
              />
              <button type="button" onClick={this.saveBtn}>
                Save
              </button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                onChange={() => togglecomplete(tododetails.id)}
              />
              {complete ? (
                <p
                  style={{
                    textDecoration: 'line-through',
                  }}
                >
                  {title}
                </p>
              ) : (
                <p>{title}</p>
              )}
              <button type="button" onClick={this.onEdit}>
                Edit
              </button>
              <button type="button" onClick={deleted}>
                Delete
              </button>
            </>
          )}
        </>
      </li>
    )
  }
}
export default TodoItem
