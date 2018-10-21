import React from 'react';
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'
import TodoHeader from './component/TodoHeader'
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
const server = 'http://127.0.0.1:8000';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      text: '',
      data:{
        name:'',
        age:0 
      }};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleMode = this.handleMode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.change = this.change.bind(this);
    this.write = this.write.bind(this);
    this.read = this.read.bind(this);
    // this.findItemsIndex = this.findItemsIndex.bind(this);
  }

  render() {
    return (
      <div className='container text-center'>
        <TodoHeader
          change={this.change}
          write={this.write}
          read={this.read}
          />
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
  change(key,e){
    this.setState({
      [key]:e.target.value
    });
    
  }

  async write(){
    let data = {...this.state.data};
    console.log(data);
    let res = await axios.post('${server}/write',data);
    console.log(res);
  }

  async read(){
    let res = await axios.get('${server}/read/');
    console.log(res);
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


//login form
// import React from 'react';
// import './App.css';
// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoginOpen: true,
//       isRegisterOpen: false
//     };
//   }
//   showLoginBox() {
//     this.setState({isLoginOpen: true, isRegisterOpen: false});
//   }

//   showRegisterBox() {
//     this.setState({isRegisterOpen: true, isLoginOpen: false});
//   }

//   render() {

//     return (
//       <div className="root-container">
//         <div className="box-container">
//         {this.state.isLoginOpen && <LoginBox/>}
//         {this.state.isRegisterOpen && <RegisterBox/>}
//         </div>
//         <div className="box-controller">
//        <div
//          className={"controller " + (this.state.isLoginOpen
//          ? "selected-controller"
//          : "")}
//          onClick={this
//          .showLoginBox
//          .bind(this)}>
//          Login
//        </div>
//        <div
//          className={"controller " + (this.state.isRegisterOpen
//          ? "selected-controller"
//          : "")}
//          onClick={this
//          .showRegisterBox
//          .bind(this)}>
//          Register
//        </div>
//      </div>
//       </div>
//     );
//   }
// }

// export default App;

// class LoginBox extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   submitLogin(e) {}

//   render() {
//     return (
//       <div className="inner-container">
//         <div className="header">
//           Login
//         </div>
//         <div className="box">

//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               className="login-input"
//               placeholder="Username"/>
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="login-input"
//               placeholder="Password"/>
//           </div>

//           <button
//             type="button"
//             className="login-btn"
//             onClick={this
//             .submitLogin
//             .bind(this)}>Login</button>
//         </div>
//       </div>
//     );
//   }

// }

// class RegisterBox extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   submitRegister(e) {}

//   render() {
//     return (
//       <div className="inner-container">
//         <div className="header">
//           Register
//         </div>
//         <div className="box">

//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               className="login-input"
//               placeholder="Username"/>
//           </div>

//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input type="text" name="email" className="login-input" placeholder="Email"/>
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="login-input"
//               placeholder="Password"/>
//           </div>
//           <button
//             type="button"
//             className="login-btn"
//             onClick={this
//             .submitRegister
//             .bind(this)}>Register</button>
//         </div>
//       </div>
//     );
//   }
// }