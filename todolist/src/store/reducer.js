const defaultSate = {
    inputValue: '12312',
    list: ['123', 'erewr']
}

export default (state = defaultSate, action) => {
    if (action.type === 'change_input_value') {
        const newSate = JSON.parse(JSON.stringify(state));
        newSate.inputValue = action.inputValue;
        return newSate;
    }
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    console.log(state, action)
    return state 
}