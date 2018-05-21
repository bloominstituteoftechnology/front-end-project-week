import ReactDOM from 'react-dom'
import {Simulate} from 'react-dom/test-utils'
import {queries, wait, fireEvent} from 'dom-testing-library'

function render(ui, {container = document.createElement('div')} = {}) {
  ReactDOM.render(ui, container)
  const containerHelpers = Object.entries(queries).reduce(
    (helpers, [key, fn]) => {
      helpers[key] = fn.bind(null, container)
      return helpers
    },
    {},
  )
  return {
    container,
    unmount: () => ReactDOM.unmountComponentAtNode(container),
    ...containerHelpers,
  }
}

const mountedContainers = new Set()

function renderIntoDocument(ui) {
  const container = document.body.appendChild(document.createElement('div'))
  mountedContainers.add(container)
  return render(ui, {container})
}

function cleanup() {
  mountedContainers.forEach(container => {
    document.body.removeChild(container)
    ReactDOM.unmountComponentAtNode(container)
    mountedContainers.delete(container)
  })
}

// fallback to synthetic events for React events that the DOM doesn't support
const syntheticEvents = ['change', 'select', 'mouseEnter', 'mouseLeave']
syntheticEvents.forEach(eventName => {
  document.addEventListener(eventName.toLowerCase(), e => {
    Simulate[eventName](e.target, e)
  })
})

export {render, Simulate, wait, fireEvent, renderIntoDocument, cleanup}
