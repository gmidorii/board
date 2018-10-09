import * as React from 'react'
import * as render from 'react-test-renderer'
import { BoardBody } from '../BoardBody'

test('body snapshot', () => {
  const d = new Date('2018-09-16T15:00:00')
  const com = render.create(
    <BoardBody
      messages={[{ id: 'id', user: 'user', body: 'body', createdAt: d }]}
    />
  )
  expect(com.toJSON()).toMatchSnapshot()
})
