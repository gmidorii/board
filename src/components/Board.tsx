import * as React from 'react'
import { Message } from '../model/Model'

export interface BoardProps {}

export interface BoardState {
  boardTitle: string
  messages: Message[]
}

export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props)
    this.state = {
      boardTitle: 'board title',
      messages: []
    }
  }

  handleMessage(message: string) {
    const current = this.state.messages.slice()
    this.setState({
      messages: current.concat([
        {
          id: String(current.length),
          body: message
        }
      ])
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
        <div className="board-body">
          <BoardBody messages={this.state.messages} />
        </div>
        <div className="body-message">
          <BoardMessage
            onClick={(message: string) => this.handleMessage(message)}
            onClear={() => this.clearMessage()}
          />
        </div>
      </div>
    )
  }
}

export interface BoardHeaderProps {
  title: string
}
export interface BoardHeaderState {}

export class BoardHeader extends React.Component<
  BoardHeaderProps,
  BoardHeaderState
> {
  constructor(props: BoardHeaderProps) {
    super(props)
    this.state = {
      title: 'board title'
    }
  }

  render() {
    return <div>{this.props.title}</div>
  }
}

export interface BoardBodyProps {
  messages: Message[]
}
export interface BoardBodyState {}

export class BoardBody extends React.Component<BoardBodyProps, BoardBodyState> {
  constructor(props: BoardBodyProps) {
    super(props)
  }

  render() {
    const messages: JSX.Element[] = []
    this.props.messages.forEach(element => {
      messages.push(<div key={element.id}>{element.body}</div>)
    })

    return messages
  }
}

export interface BoardMessageProps {
  onClick(message: string): void
  onClear(): void
}
export interface BoardMessageState {}

export class BoardMessage extends React.Component<
  BoardMessageProps,
  BoardMessageState
> {
  inputId = 'messageInput'

  constructor(props: BoardMessageProps) {
    super(props)
  }

  extractMessage(): string {
    const elm: HTMLInputElement = document.getElementById(
      this.inputId
    ) as HTMLInputElement
    return elm.value
  }

  render() {
    return (
      <div>
        <input
          id={this.inputId}
          type="text"
          onKeyDown={event => {
            if (event.keyCode !== 13) {
              return
            }
            const value = this.extractMessage()
            if (value === '') {
              return
            }
            this.props.onClick(value)
          }}
        />
        <button onClick={() => this.props.onClick(this.extractMessage())}>
          submit
        </button>
        <button onClick={() => this.props.onClear()}>clear</button>
      </div>
    )
  }
}