import * as React from 'react'
import {HeaderComponent} from './header'
import {ButtonComponent} from './button'

class AppComponent extends React.Component {
  render () {
    return <div>
      <HeaderComponent message='Hello 2' shouldShowSecondHeader={true} title='Dr' colour='green' />
      <p>Hello, World, 2</p>
      <ButtonComponent />
    </div>
  }
}

export {AppComponent}
