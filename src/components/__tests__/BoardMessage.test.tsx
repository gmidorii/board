import * as React from 'react'
import * as render from 'react-test-renderer'
import { BoardMessage } from '../BoardMessage'

test('message snapshort', () => {
  const com = render.create(
    <BoardMessage
      onClick={() => {
        return 'hoge'
      }}
      onClear={() => {
        return 'hoge'
      }}
    />
  )
  expect(com.toJSON()).toMatchSnapshot()
})
