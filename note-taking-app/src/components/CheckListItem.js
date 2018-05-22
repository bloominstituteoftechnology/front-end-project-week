import { Editor } from 'slate-react'
import { Value } from 'slate'

import React from 'react'

class CheckListItem extends React.Component {
  onChange = event => {
    const checked = event.target.checked
    const { editor, node } = this.props
    editor.change(c => c.setNodeByKey(node.key, { data: { checked } }))
  }

  render() {
    const { attributes, children, node, readOnly } = this.props
    const checked = node.data.get('checked')
    return (
      <div
        className={`check-list-item ${checked ? 'checked' : ''}`}
        contentEditable={false}
        {...attributes}
      >
        <span>
          <input type="checkbox" checked={checked} onChange={this.onChange} />
        </span>
        <span contentEditable={!readOnly} suppressContentEditableWarning>
          {children}
        </span>
      </div>
    )
  }
}

export default CheckListItem;