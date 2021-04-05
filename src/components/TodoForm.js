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
    }

    render() {
        return(
            <form onSubmit={this.formSubmit}>
                <input 
                    name='item'
                    placeholder='...todo'
                    type='text'
                    onChange={this.formChange}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;