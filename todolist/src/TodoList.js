import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleClickValue = this.handleClickValue.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <Fragment>
                <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                    <Input
                        style={{ width: '300px' }}
                        placeholder='todo info'
                        onChange={this.handleChange} />
                    <Button
                        type="primary"
                        onClick={this.handleClickValue}>提交</Button>
                </div>
                <List
                    style={{ marginTop: '200px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item
                            key={index}>
                            {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
    handleChange(e) {
        const action = {
            type: 'change_input_value',
            inputValue: e.target.value
        }
        store.dispatch(action);
    }
    handleClickValue() {
        const action = {
            type: 'add_todo_item'
        }
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
}

export default TodoList;