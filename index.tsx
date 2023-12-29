// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as ReactDom from 'react-dom/client'
import * as ReactRouter from 'react-router-dom'

import { Main } from './lib/views/main'
import { RoutingError } from './lib/views/error'
import { Header } from './lib/components/header'
import { Experiments } from './lib/views/experiments'

function banner (): undefined {
  console.log(
    '** additional logs emitted at verbose/debug log levels **'
  )
}
banner()
const router = ReactRouter.createHashRouter([
  {
    path: '',
    element: <><Header /><Main /></>,
    errorElement: <><Header /><RoutingError /></>
  },
  {
    path: '/main',
    element: <><Header /><Main /></>,
    errorElement: <><Header /><RoutingError /></>
  },
  {
    path: '/experiments',
    element: <><Header /><Experiments /></>,
    errorElement: <><Header /><RoutingError /></>
  }
])

const root = document.getElementById('root')
if (root === null) {
  throw new Error('could not get element id root?')
}

const reactRoot = ReactDom.createRoot(root)
reactRoot.render(<ReactRouter.RouterProvider router={router} />)
