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
    return <BoardHeader title={this.state.boardTitle} />
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
