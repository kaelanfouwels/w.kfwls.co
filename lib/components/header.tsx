// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as React from 'react'
import * as Polaris from '@cloudscape-design/components'
import { PolarisTopNavigation } from '../../localisation/en-gb'
import { Inspect } from '../exp/panopticon'
import * as PolarisStyles from '@cloudscape-design/global-styles'

export function Header (): React.ReactElement {
  const [identifier, setIdentifier] = React.useState<string | undefined>()
  const [dark, setDark] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

  React.useEffect(() => {
    const run = async (): Promise<void> => {
      const fingerprint = await Inspect()
      setIdentifier(String(fingerprint.computed.handle))
    }
    void run()
  }, [])

  React.useEffect(() => {
    dark ? PolarisStyles.applyMode(PolarisStyles.Mode.Dark) : PolarisStyles.applyMode(PolarisStyles.Mode.Light)
  })

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
      onClick: () => {
        setDark(!dark)
      },
      iconName: (() => {
        return dark ? 'star' : 'star-filled'
      })()
    },
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
