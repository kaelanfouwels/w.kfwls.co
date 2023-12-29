// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as ReactDom from 'react-dom/client'
import * as ReactRouter from 'react-router-dom'

import { Main } from './lib/views/main'

function banner (): undefined {
  console.log(
    '** additional logs emitted at verbose/debug log levels **'
  )
}
banner()

const router = ReactRouter.createHashRouter([
  {
    path: '',
    element: <Main />
  }
])

const root = document.getElementById('root')
if (root === null) {
  throw new Error('could not get element id root?')
}

const reactRoot = ReactDom.createRoot(root)
reactRoot.render(<ReactRouter.RouterProvider router={router} />)
