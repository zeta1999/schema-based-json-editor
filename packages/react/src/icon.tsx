import * as React from 'react'
import * as common from 'schema-based-json-editor'

/**
 * @public
 */
export class Icon extends React.Component<{
  icon: common.Icon;
  text: string;
  valid?: boolean;
  onClick: () => void;
  theme: common.Theme;
}, {}> {
  render() {
    if (this.props.valid) {
      if (this.props.icon.isText) {
        return (
          <button className={this.props.theme.button} onClick={this.props.onClick}>
            {this.props.text}
          </button>
        )
      } else {
        return (
          <button className={this.props.theme.button} onClick={this.props.onClick}>
            <i className={this.props.text}></i>
          </button>
        )
      }
    }
    return null
  }
}
