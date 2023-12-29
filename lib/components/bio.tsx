// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as React from 'react'
import * as Polaris from '@cloudscape-design/components'

export function Bio (): React.ReactElement {
  /* Conference Papers:

  CIRED 2021 - Enabling cybersecurity features using a layered connectivity to promote secure remote operation and maintenance (2021)

  Mentions:

  IET Prize 2018 - Winner (2018)

  BMJ 2013;347:f4437 - Can they hack it? Yes they can. (2013)

  The Independent - Parliament 2012: How to hack the House of Commons without anyone trying to stop you (2012)

  Posts:

  No I can't recover your bitcoin wallet

  Releases:

  Migrated to fouwels.app */

  return (
    <>
      <Polaris.Container>
        <Polaris.Header>
          Papers
        </Polaris.Header>
        <ul>
          <li>
            CIRED 2021 - <a href='https://www.researchgate.net/publication/357762875_Enabling_cybersecurity_features_using_a_layered_connectivity_to_promote_secure_remote_operation_and_maintenance'><i>Enabling cybersecurity features using a layered connectivity to promote secure remote operation and maintenance</i></a> (2021)
          </li>
          <li>
            NGGT - <a href='https://www.nationalgas.com/document/136341/download#page=13'> <i>I40 Secure Connectivity</i> </a> (2021)
          </li>
          <li>
            NGGT - <a href='https://www.nationalgas.com/document/132081/download#page=10'> <i>Secure AGI</i> </a> (2020)
          </li>
          <li>
            NGGT - <a href='https://www.nationalgas.com/document/132081/download#page=11'> <i>Open Source SCADA</i></a> (2019)
          </li>
          <li>
            IET Prize 2018 - <a href='https://conferences.theiet.org/achievement/scholarships/student/index.cfm'> <i>Winner</i> </a> (2018)
          </li>
          <li>
            BMJ 2013;347:f4437 - <a href='http://www.bmj.com/content/347/bmj.f4437'> <i>Can they hack it? Yes they can.</i> </a> (2013)
          </li>
          <li>
            The Independent - <a href='http://www.independent.co.uk/life-style/gadgets-and-tech/features/parliament-2012-how-to-hack-the-house-of-commons-without-anyone-even-trying-to-stop-you-8386762.html'> <i>Parliament 2012: How to hack the House of Commons without anyone trying to stop you</i> </a> (2012)
          </li>
        </ul>

        <Polaris.Header>
          Posts
        </Polaris.Header>

        <ul>
          <li>
            <a href='https://medium.com/@kaelanfouwels/bitcoin-memdump-shit-d461caa120ec'><i>No I can't recover your bitcoin wallet</i></a>
          </li>
          <li>
            Releases: <a href='https://releases.fouwels.app'><i>Migrated to fouwels.app</i></a>
          </li>
        </ul>
      </Polaris.Container>
    </>
  )
}
