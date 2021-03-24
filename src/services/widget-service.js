const TOPICS_URL="https://webdev-webapp-devanshi.herokuapp.com/api/topics";
const WIDGETS_URL="https://webdev-webapp-devanshi.herokuapp.com/api/widgets";


export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())


export const createWidgetForTopic = (topicId,widget) =>
    // TODO: move all server communication to widgets-service
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())
        // .then(widget => setWidgets((widgets) => [...widgets, widget]))


export const deleteWidget = (widget_id) =>
    // TODO: move all server communication to widgets-service.js
    fetch(`${WIDGETS_URL}/${widget_id}`, {
        method: "DELETE"
    }
    )
        .then(response => response.json())
    //     .then((status) => {
    //     // setWidgets((widgets) => widgets.filter(w => w.id !== id))
    // })

export const updateWidget = (widget) =>
    // TODO: move all server communication to widgets-service.js
    fetch(`${WIDGETS_URL}/${widget.id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())
    //     .then((status) => {
    //     setWidget({})
    //     setWidgets((widgets) => widgets.map(w => w.id === id ? widget : w))
    // })

    export default {
    createWidgetForTopic, findWidgetsForTopic, deleteWidget, updateWidget
}
