// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as React from 'react'
import * as Polaris from '@cloudscape-design/components'

export function Navigation (): React.ReactElement {
  const [activeHref] = React.useState('#/')

  const items: Polaris.SideNavigationProps.Item[] = [
    {
      type: 'link',
      text: 'Main',
      href: '#/main',
      external: false
    },
    { type: 'divider' },
    {
      type: 'link',
      text: 'Source',
      href: 'https://github.com/fouwels/www',
      external: true
    }
  ]

  return (
    <>
      <Polaris.SideNavigation activeHref={activeHref} items={items} />
    </>
  )
}
