import * as React from 'react'

export interface Props {
  onClick(message: string): void
  onClear(): void
}
export interface State {}

export class BoardMessage extends React.Component<Props, State> {
  private inputId = 'messageInput'
  private submitId = 'messageSubmit'
  private clearId = 'messageClear'
  private messagePlaceHolder = 'Ctrl + Enter => submit'

  constructor(props: Props) {
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
