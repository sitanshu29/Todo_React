import React, { Component } from 'react'
import shortid from 'shortid'


class TodoFrom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.text !== "") {
            this.props.onSubmit({
                text: this.state.text,
                complete: false,
                id: shortid.generate()
            })
            this.setState({
                text: ""
            })
        }
        else {
            window.alert("Add todo")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input name="text" value={this.state.text} onChange={this.handleChange} placeholder="todo...." />
                <button onClick={this.handleSubmit}>Add Task</button>
            </form>
        )
    }
}

export default TodoFrom
