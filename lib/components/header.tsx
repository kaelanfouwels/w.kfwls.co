// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as React from 'react'
import * as Polaris from '@cloudscape-design/components'
import { PolarisTopNavigation } from '../../localisation/en-gb'

export function Header (): React.ReactElement {
  const identity: Polaris.TopNavigationProps.Identity = {
    href: '#',
    title: 'Fouwels',
    logo: {
      src: 'favicon-32x32.png',
      alt: 'Fouwels Icon'
    }
  }

  const utilities: Polaris.TopNavigationProps.Utility[] = [
    {
      type: 'button',
      text: 'Visitor',
      iconName: 'user-profile'
    }
  ]

  return (
    <Polaris.TopNavigation
      identity={identity}
      utilities={utilities}
      i18nStrings={PolarisTopNavigation}
    />
  )
}
