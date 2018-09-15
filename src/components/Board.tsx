import * as React from 'react'

export interface BoardProps {}

export interface BoardState {
  boardTitle: string
}

export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props)
    this.state = {
      boardTitle: 'board title'
    }
  }

  render() {
    return (
      <div className="board">
        <div className="board-header">
          <BoardHeader title={this.state.boardTitle} />
        </div>
        <div className="board-body">
          <BoardBody />
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

export interface BoardBodyProps {}
export interface BoardBodyState {
  messages: string[]
}

export class BoardBody extends React.Component<BoardBodyProps, BoardBodyState> {
  constructor(props: BoardBodyProps) {
    super(props)
    this.state = {
      messages: ['Hi', 'Hello']
    }
  }

  render() {
    const messages: JSX.Element[] = []
    this.state.messages.forEach(element => {
      messages.push(<div>{element}</div>)
    })

    return messages
  }
}
