import {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    complete: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    complete: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    complete: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    complete: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    complete: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    complete: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    complete: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    complete: false,
  },
]

class SimpleTodos extends Component {
  state = {todolist: initialTodosList, newTodo: ''}

  ondeletetodo = id => {
    const {todolist} = this.state
    const updatetodolist = todolist.filter(each => each.id !== id)
    this.setState({todolist: updatetodolist})
  }

  onChangeNew = e => {
    this.setState({newTodo: e.target.value})
  }

  addNewTodo = () => {
    const {newTodo} = this.state
    const newTitle = {
      // id : uuidv4(),
      title: newTodo,
      complete: false,
    }
    this.setState(prevState => ({
      todolist: [...prevState.todolist, newTitle],
      newTodo: '',
    }))
  }

  togglecomplete = id => {
    this.setState(prevState => {
      const updatetodo = prevState.todolist.map(todo =>
        todo.id === id ? {...todo, complete: !todo.complete} : todo,
      )
      return {todolist: updatetodo}
    })
  }

  render() {
    const {todolist, newTodo} = this.state
    return (
      <div>
        <h1>Simple Todos</h1>
        <input type="text" onChange={this.onChangeNew} value={newTodo} />
        <button type="button" onClick={this.addNewTodo}>
          Add
        </button>
        <ul>
          {todolist.map(eachtodo => (
            <TodoItem
              key={eachtodo.id}
              tododetails={eachtodo}
              deletetodo={this.ondeletetodo}
              togglecomplete={this.togglecomplete}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default SimpleTodos

// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PONNEBOINA/EnhancementOfRestaurant.git
// git push -u origin main
