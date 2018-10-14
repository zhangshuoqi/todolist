import React from 'react';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        // this.handleCheck = this.props.handleCheck.bind(this,id);


    }
    
    render() {
      let items = this.props.items.map( item => {
          let isShow = '';
          let isEdit = '';
          if (item.show == false){
              isEdit = 'none';
          } else {
              isShow = 'none';

          }
          return(
              <tr key={item.id}>
                  <td>
                      <input type="checkbox" checked={item.check} onChange={this.props.handleCheck.bind(this,item.id)}/>
                  </td>

                  <td>
                      <span style={{display: isShow}}>{item.text}</span>
                      <input className='edit' type="text" style={{ display: isEdit}} value={item.text} onChange={this.props.handleChangeForm.bind(this,item.id)}/>
                  </td>

                  <td>
                      <a 
                        href="javascript:;" 
                        className='btn btn-outline-primary' 
                        onClick={this.props.handleMode.bind(this, item.id)}
                      >
                        {item.button} 
                      </a>
                  </td>

                  <td>
                      <a 
                        href="javascript:;"
                        className="btn btn-outline-danger"
                        onClick={this.props.handleDelete.bind(this, item.id)}
                      >
                        X
                      </a>
                  </td>
              </tr>
          )
      });
      return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>完成</th>
                    <th scope='col'>事项</th>
                    <th scope='col'>编辑</th>
                    <th scope='col'>删除</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>

        
        
      );
    }
  }

export default TodoList;


{/* <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
</ul> */}