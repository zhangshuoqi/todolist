import React from 'react';

class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.props.handleSubmit.bind(this);
        this.handleChange = this.props.handleChange.bind(this);
    }
    
    render () {
        return (
          <form onSubmit={this.handleSubmit}>
              <div >
                <input onChange={this.handleChange}  value={this.props.text} placeholder='添加任务...'/>
                <button className='btn btn-primary' type='submit'>
                      添加
                </button>
              </div>
          </form>
        )
      }
}

export default TodoForm;

