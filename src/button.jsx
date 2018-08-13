import * as React from 'react'
import axios from 'axios'
import classNames from 'classnames'
import * as styles from './button.styles'

class ButtonComponent extends React.Component {
  getContentFromApi() {
    axios.get('/api').then(
      (res) => {
        console.log('The api said', res.data)
      }
    ).catch(
      () => console.log('The api broke')
    )
  }

  getButtonClassNames() {
    const c = [
      styles.button
    ]
    if(this.props.isSuperButton) {
      c.push(styles.superButton)
    }
    return c
  }

  render() {
    return <button onClick={this.getContentFromApi} className={classNames(this.getButtonClassNames())}>
      <p>Get Content</p>
    </button>
  }
}

export {ButtonComponent}
