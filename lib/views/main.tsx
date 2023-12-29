// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as Polaris from '@cloudscape-design/components'

import { Navigation } from '../components/navigation'

export function Main (): React.ReactElement {
  const breadcrumbs = [
    {
      text: 'Main',
      href: '#/main'
    },
    {
      text: 'Dashboard',
      href: '#/main'
    }
  ]
  const content = (
    <Polaris.ContentLayout header={<Polaris.Header variant='h1'>Main</Polaris.Header>}>
      <Polaris.Container />
    </Polaris.ContentLayout>
  )
  return (
    <Polaris.AppLayout
      breadcrumbs={
        <Polaris.BreadcrumbGroup items={breadcrumbs} ariaLabel='Breadcrumbs' />
      }
      navigation={<Navigation />}
      tools={<Polaris.HelpPanel />}
      content={content}
    />
  )
}
