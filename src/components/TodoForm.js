import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input:''
        }
    }

    formChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    formSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.input);
        this.props.addTask(this.state.input);
        this.setState({input: ''})
    }

    render() {
        return(
            
            <div>
                <form onSubmit={this.formSubmit}>
                    <input 
                        name='item'
                        placeholder='...todo'
                        type='text'
                        onChange={this.formChange}
                    />
                    <button>Add Todo</button>
                </form>
                <button>Clear Completed</button>
            </div>
        );
    }
}

export default TodoForm;