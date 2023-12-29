// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as React from 'react'
import * as Polaris from '@cloudscape-design/components'
import { PolarisTopNavigation } from '../../localisation/en-gb'
import { Inspect } from '../exp/panopticon'

export function Header (): React.ReactElement {
  const [identifier, setIdentifier] = React.useState<string | undefined>()

  React.useEffect(() => {
    const run = async (): Promise<void> => {
      const fingerprint = await Inspect()
      setIdentifier(String(fingerprint.computedHandle))
    }
    void run()
  }, [])

  const identity: Polaris.TopNavigationProps.Identity = {
    href: '#',
    title: 'Fouwels',
    logo: {
      src: 'favicon-192x192.png',
      alt: 'Fouwels Icon'
    }
  }

  const utilities: Polaris.TopNavigationProps.Utility[] = [
    {
      type: 'button',
      text: identifier === undefined ? 'Identifier Not Known' : identifier,
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
