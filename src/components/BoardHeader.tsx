import * as React from 'react'

export interface Props {
  title: string
}
export interface State {}

export class BoardHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      title: 'board title'
    }
  }

  render() {
    return <h3>{this.props.title}</h3>
  }
}
