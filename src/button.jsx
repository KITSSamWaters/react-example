import * as React from 'react'
import axios from 'axios'

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

  render() {
    return <button onClick={this.getContentFromApi}>
      Get Content
    </button>
  }
}

export {ButtonComponent}
