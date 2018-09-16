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
      messages: [
        {
          id: String(current.length),
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
    return <h3>{this.props.title}</h3>
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
      messages.push(
        <div key={element.id} className="message">
          <div>Date: {element.createdAt.toLocaleString()}</div>
          <div>
            Body:
            <br />
            {element.body}
          </div>
        </div>
      )
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
  private inputId = 'messageInput'
  private submitId = 'messageSubmit'
  private clearId = 'messageClear'
  private messagePlaceHolder = 'Ctrl + Enter => submit'

  constructor(props: BoardMessageProps) {
    super(props)
  }

  extractMessage(): string {
    const elm: HTMLInputElement = document.getElementById(
      this.inputId
    ) as HTMLInputElement
    return elm.value
  }

  clearInput(): void {
    const elm: HTMLInputElement = document.getElementById(
      this.inputId
    ) as HTMLInputElement
    elm.value = ''
  }

  isCtrlorMetaEnter(event: React.KeyboardEvent<HTMLTextAreaElement>): boolean {
    return event.keyCode !== 13 || (!event.metaKey && !event.ctrlKey)
  }

  render() {
    return (
      <div>
        <div>
          <textarea
            id={this.inputId}
            placeholder={this.messagePlaceHolder}
            onKeyDown={event => {
              if (this.isCtrlorMetaEnter(event)) {
                return
              }
              const value = this.extractMessage()
              if (value === '') {
                return
              }
              this.props.onClick(value)
              this.clearInput()
            }}
          />
        </div>
        <button
          id={this.submitId}
          onClick={() => {
            this.props.onClick(this.extractMessage())
            this.clearInput()
          }}
        >
          submit
        </button>
        <button
          id={this.clearId}
          onClick={() => {
            this.props.onClear()
            this.clearInput()
          }}
        >
          clear
        </button>
      </div>
    )
  }
}
