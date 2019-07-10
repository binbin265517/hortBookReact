import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        let { content, test } = this.props
        return (
            <li
                onClick={this.handleClick}
                dangerouslySetInnerHTML={{__html: `${test} - ${content}`}}
            ></li>
        )
    }
    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired
}
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;