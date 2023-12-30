// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

// Types for experimental browser constructs not yet in typescript core

// https://wicg.github.io/netinfo/#-dfn-networkinformation-dfn-interface
export interface NetworkInformation {
  type: string
  effectiveType: string
  downlink: number
  downlinkMax: number
  rtt: number
};

// https://wicg.github.io/local-font-access/
export interface FontData {
  postscriptName: string
  fullName: string
  family: string
  style: string
}

// https://wicg.github.io/local-font-access/
export async function windowQueryLocalFonts (): Promise<FontData[] | undefined> {
  let localfonts: FontData[] | undefined
  try {
    localfonts = (await (window as any).queryLocalFonts() as FontData[])
  } catch (e: any) {
    console.debug('exp::queryLocalFonts: failed to grab local fonts:' + String(e))
  }

  if (localfonts === undefined) {
    return undefined
  }

  return localfonts.map((x) => {
    return {
      postscriptName: x.postscriptName,
      fullName: x.fullName,
      family: x.family,
      style: x.style
    }
  })
}

// https://wicg.github.io/netinfo/#-dfn-networkinformation-dfn-interface
export function navigationConnection (): NetworkInformation | undefined {
  const conn = ((navigator as any)?.connection as NetworkInformation)
  if (conn === undefined) {
    return undefined
  }

  return {
    type: conn.type,
    effectiveType: conn.effectiveType,
    downlink: conn.downlink,
    downlinkMax: conn.downlinkMax,
    rtt: conn.rtt
  }
}
