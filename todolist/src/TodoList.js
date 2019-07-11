import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handerChangeClick = this.handerChangeClick.bind(this);
        this.hadlerClick = this.hadlerClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render() { 
        return (
            <Fragment>
                <label htmlFor="valueId">输入名称</label>
                <input
                    id="valueId"
                    className="input"
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handerChangeClick}/>
                <button onClick={this.hadlerClick}>提交</button>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    handerChangeClick(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    hadlerClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1)
            return {
                list
            }
        })
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    <TodoItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}>
                    </TodoItem>
                </div>
            )
        })
    }
    componentDidMount() {
        axios.get('/api/todolist').then((res) => {
            console.log(res.data)
            this.setState(() => ({
                list: [...res.data]
            }))
        }).catch(e => {
            alert('error')
        })
    }
}

export default TodoList;