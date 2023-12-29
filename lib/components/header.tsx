// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as React from 'react'
import * as Polaris from '@cloudscape-design/components'
import { PolarisTopNavigation } from '../../localisation/en-gb'

import { Candidate, Knock } from '../exp/knock'

export function Header (): React.ReactElement {
  const [candidate, setCandidate] = React.useState<Candidate | undefined>()

  React.useEffect(() => {
    void Knock((c: Candidate) => {
      setCandidate(c)
    })
  }, [])

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
      text: candidate === undefined ? 'Identifier Not Known' : `${candidate?.transport ?? ''} ${candidate?.port ?? ''} ${candidate?.priority ?? ''} ${candidate?.connectionAddress ?? ''}`,
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
