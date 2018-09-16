import * as React from 'react'
import * as render from 'react-test-renderer'
import { BoardHeader } from '../BoardHeader'

test('Header message', () => {
  const com = render.create(<BoardHeader title="hoge" />)
  expect(com.toJSON()).toMatchSnapshot()
})
