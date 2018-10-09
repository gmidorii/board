import * as React from 'react'
import { Message } from '../model/Model'
import { BoardHeader } from './BoardHeader'
import { BoardMessage } from './BoardMessage'
import { BoardBody } from './BoardBody'

export interface Props {}

export interface State {
  boardTitle: string
  messages: Message[]
}

export class Board extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      boardTitle: 'board title',
      messages: []
    }
  }

  handleMessage(message: string) {
    const current = this.state.messages.slice()
    this.setState({
      messages: [
        {
          id: String(current.length),
          user: 'John Doe',
          body: message,
          createdAt: new Date()
        }
      ].concat(current)
    })
  }

  clearMessage() {
    this.setState({
      messages: []
    })
  }

  render() {
    return (
      <div className="board">
        <div className="board-header">
          <BoardHeader title={this.state.boardTitle} />
        </div>
        <div className="body-message">
          <BoardMessage
            onClick={(message: string) => this.handleMessage(message)}
            onClear={() => this.clearMessage()}
          />
        </div>
        <div className="board-body">
          <BoardBody messages={this.state.messages} />
        </div>
      </div>
    )
  }
}
