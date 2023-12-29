// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as Polaris from '@cloudscape-design/components'

import { Navigation } from '../components/navigation'

export function Experiments (): React.ReactElement {
  const breadcrumbs = [
    {
      text: 'Experiments',
      href: '#/experiments'
    },
    {
      text: 'Main',
      href: '#/experiments'
    }
  ]
  const content = (
    <Polaris.ContentLayout header={<Polaris.Header variant='h1'>Experiments</Polaris.Header>}>
      <Polaris.Container>
        <Polaris.TextContent>
          None active
        </Polaris.TextContent>
      </Polaris.Container>
    </Polaris.ContentLayout>
  )
  return (
    <Polaris.AppLayout
      breadcrumbs={
        <Polaris.BreadcrumbGroup items={breadcrumbs} ariaLabel='Breadcrumbs' />
      }
      navigation={<Navigation />}
      tools={<Polaris.HelpPanel>Nothing to see here</Polaris.HelpPanel>}
      content={content}
    />
  )
}
