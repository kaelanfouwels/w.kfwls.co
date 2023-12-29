// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as Polaris from '@cloudscape-design/components'

import { Navigation } from '../components/navigation'

const breadcrumbs = [
    {
        text: "Main",
        href: "#/main",
    },
    {
        text: "Error",
        href: "#/error",
    },
];

export function RoutingError(): React.ReactElement {

    const content = (
        <Polaris.ContentLayout header={<Polaris.Header variant='h1'>Error</Polaris.Header>}>
            <Polaris.Container>
                <Polaris.TextContent>You have been routed to nowhere... :'(</Polaris.TextContent>
            </Polaris.Container>
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
