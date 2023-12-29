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
      text: 'Contact (Email)',
      href: 'mailto:kaelan.thijs@fouwels.com',
      external: false
    },
    { type: 'divider' },
    {
      type: 'link',
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kaelanfouwels/',
      external: true
    },
    {
      type: 'link',
      text: 'Twitter',
      href: 'https://twitter.com/kaelanfouwels',
      external: true
    },
    {
      type: 'link',
      text: 'StackExchange',
      href: 'https://stackoverflow.com/users/2045964/kaelan-fouwels',
      external: true
    },
    {
      type: 'link',
      text: 'Keybase',
      href: 'https://keybase.io/kae',
      external: true
    },
    { type: 'divider' },
    {
      type: 'link',
      text: 'GitHub',
      href: 'https://github.com/fouwels',
      external: true
    },
    {
      type: 'link',
      text: 'Git.fouwels.com',
      href: 'https://git.fouwels.com/explore/repos',
      external: true
    },
    { type: 'divider' },
    {
      type: 'link',
      text: 'Nuget',
      href: 'https://www.nuget.org/profiles/kaelanfouwels',
      external: true
    },
    {
      type: 'link',
      text: 'NPM',
      href: 'https://www.npmjs.com/~kaelanfouwels',
      external: true
    },
    { type: 'divider' },
    {
      type: 'link',
      text: 'Experiments',
      href: '#/experiments',
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
