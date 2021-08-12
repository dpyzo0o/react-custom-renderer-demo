/* eslint-disable */
import ReactReconciler from 'react-reconciler'

const reconciler = ReactReconciler({
  // host config
  supportsMutation: true,

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const el = document.createElement(type)

    const propList = ['className', 'src', 'alt', 'href', 'target', 'rel']

    propList.forEach(x => {
      if (props[x]) {
        el[x] = props[x]
      }
    })

    if (props.onClick) {
      el.addEventListener('click', props.onClick)
    }

    if (props.color) {
      el.style.color = props.color
    }

    return el
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const el = document.createTextNode(text)
    return el
  },

  appendChildToContainer(container, child) {
    container.appendChild(child)
  },
  appendChild(parentInstance, child) {
    parentInstance.appendChild(child)
  },
  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child)
  },

  removeChildFromContainer(container, child) {
    container.removeChild(child)
  },
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child)
  },

  insertInContainerBefore(container, child, beforeChild) {
    container.insertBefore(child, beforeChild)
  },
  insertBefore(parentInstance, child, beforeChild) {
    parentInstance.insertBefore(child, beforeChild)
  },

  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) {
    const payload = {}
    if (oldProps.color !== newProps.color) {
      payload.newColor = newProps.color
    }
    return payload
  },

  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle
  ) {
    if (updatePayload.newColor) {
      instance.style.color = updatePayload.newColor
    }
  },

  finalizeInitialChildren() {},
  getChildHostContext() {},
  getPublicInstance() {},
  getRootHostContext() {},
  prepareForCommit() {},
  resetAfterCommit() {},
  shouldSetTextContent() {
    return false
  },
})

const ReactDOMSimple = {
  render(toRender, div) {
    //TODO
    const container = reconciler.createContainer(div, false, false)
    reconciler.updateContainer(toRender, container, null, null)
  },
}

export default ReactDOMSimple
