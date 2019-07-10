import React, { Component, Fragment } from 'react'
import './style.css';
import TodoItem from './TodoItem';

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
        console.log('render')
        return (
            <Fragment>
                <label htmlFor="valueId">输入名称</label>
                <input
                    id="valueId"
                    className="input"
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handerChangeClick}
                    ref={(input) => {this.input = input}}/>
                <button onClick={this.hadlerClick}>提交</button>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    // 在组件即将被挂在到页面的时刻自动执行
    componentWillMount() {
        console.log('componentWillMout')
    }
    // 在组件被挂载之后被执行的生命周期函数
    componentDidMount() {
        console.log('componentDidMout');
    }
    // 组件被更新之前，他会自动被执行 返回ture/false
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return 1;
    }
    // 组件被更新之前，他会自动执行， 但是他在shouldComponentUpdate执行
    // 如果shouldComponentUpdate返回true才会执行，返回false不被执行
    componentWillUpdate() {
        console.log('componentWillUpdate')
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
        }), () => {
            console.log(this.ul.querySelectorAll('div').length);
        })
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
}

export default TodoList;