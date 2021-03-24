const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            //.then(widget => setWidgets((widgets) => [...widgets, widget]))
        case "FIND_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    // alert("Comparing " + widget.id + " with " + action.widgetToDelete.id)
                    if(widget.id !== action.widgetToDelete.id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
            //setWidgets((widgets) => widgets.filter(w => w.id !== id))
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    // alert("Comparing " + widget.id + " with " + action.widget.id)
                    if(widget.id === action.widget.id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
            //setWidget({})
        // setWidgets((widgets) => widgets.map(w => w.id === id ? widget
        default:
            return state
    }
}
export default widgetReducer
