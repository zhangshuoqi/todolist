import React from 'react';
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleMode = this.handleMode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    // this.findItemsIndex = this.findItemsIndex.bind(this);
  }

  render() {
    return (
      <div className='container text-center'>
        <h3>My React Todo List</h3>
        <TodoForm 
          text={this.state.text} 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange}
          />
        <TodoList
          items={this.state.items} 
          handleCheck={this.handleCheck} 
          handleChangeForm={this.handleChangeForm}
          handleMode={this.handleMode}
          handleDelete={this.handleDelete}
          />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.trim()) {
      return;
    }
    const newItem = {
      text: this.state.text,
      button: '编辑',
      show: false,
      check: false,
      id: Date.now()
    };
    // this.setState(prevState => ({
    //   items: prevState.items.concat(newItem),
    //   text: ''
    // }));
    // console.log(this.state.items.concat(newItem))
    this.setState({
        items:this.state.items.concat(newItem),
        text:''

    })
  }

  handleChangeForm(id,e){
    let newState = this.state;
    let index = newState.items.findIndex(item => item.id === id);
    newState.items[index].text = e.target.value;
    this.setState({ items: newState.items });
  }

  handleCheck(id) {
    let newState = this.state;
    let index = newState.items.findIndex(item => item.id === id);
    let isCheck = newState.items[index].check;
    newState.items[index].check = !isCheck;
    this.setState({ items: newState.items });
  }

  handleMode(id) {
    let newState = this.state;
    let index = newState.items.findIndex(item => item.id === id);
    let isShow = newState.items[index].show;

    if (newState.items[index].show === false) {
      newState.items[index].show = !isShow;
      newState.items[index].button = "保存";
      this.setState({ items: newState.items });
    } else {
      newState.items[index].show = !isShow;
      newState.items[index].button = "編輯";
      this.setState({ items: newState.items });
    }
  }

  handleDelete(id) {
    let newState = this.state;
    let index = newState.items.findIndex(item => item.id === id);
    if (index === -1) return;
    newState.items.splice(index, 1);
    this.setState({ items: newState.items });
  }
}



export default App;