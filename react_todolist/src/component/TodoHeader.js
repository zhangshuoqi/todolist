import React from 'react'


class TodoHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='navbar-header'>
                 <h3>My React Todo List</h3>
                 {/* <a className='btn sign-up' href="/register">Register</a>
                 <a className='btn log-in' href="/login">Login</a> */}
                 <input type="text" onChange={this.props.change.bind(this,'name')}/>
                 <br/>
                 <input type="text" onChange={this.props.change.bind(this,'age')}/>
                 <br/>
                 <button onClick={this.props.write}>write</button>
                 <button onClick={this.props.read}>read</button>
                 <hr/>
            </div>
        )
    }
}

export default TodoHeader;