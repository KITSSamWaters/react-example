import * as React from 'react'

class HeaderComponent extends React.Component {
  render() {
    return <header>
      <h1>This is the header</h1>
      {
        this.props.shouldShowSecondHeader && <h2>{this.props.message}</h2>
      }
      <p>{this.props.colour}</p>
    </header>
  }
}

export {HeaderComponent}
