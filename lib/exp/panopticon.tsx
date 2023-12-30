
// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as Polaris from '@cloudscape-design/components'
import * as React from 'react'
import { bufferToMnemonic } from './mnemonic'
import { Buffer } from 'buffer'
import { crc32 } from '@foxglove/crc'

export interface fingerprint {
  computed: {
    handle: number
    handleMneumonic: string[]
  }
  records: {
    userAgent: string | undefined
    timeIANA: string | undefined
    language: string | undefined
    languages: string | undefined
    hwCores: number | undefined
    hwTouchPoints: number | undefined
    hwDisplaySize: string | undefined
    webGLVendor: string | undefined
    webGLVersion: string | undefined
    webGLShading: string | undefined
    webGLRenderer: string | undefined
    webGLHwVendor: string | undefined
    webGLHwRender: string | undefined
    webGLExtensions: string | undefined
    featurePDF: boolean | undefined
    featureDoNotTrack: string | undefined
    featureCookies: boolean | undefined
    legacyAppVersion: string | undefined
    legacyProductSub: string | undefined
    legacyVendor: string | undefined
    mediaDevices: MediaDeviceInfo[] | undefined
    networkInfo: NetworkInformation | undefined
    fontData: FontData[] | undefined
  }
}

// https://wicg.github.io/netinfo/#-dfn-networkinformation-dfn-interface
interface NetworkInformation {
  type: string
  effectiveType: string
  downlinkMax: string
  downlink: string
  rtt: string
};

// https://wicg.github.io/netinfo/#-dfn-networkinformation-dfn-interface
interface FontData {
  postscriptName: string
  fullName: string
  family: string
  style: string
}

// Get user's fingerprint
export async function Inspect (): Promise<fingerprint> {
  const gl = document.createElement('canvas').getContext('webgl')
  const ext = gl?.getExtension('WEBGL_debug_renderer_info')

  let fontData: FontData[] | undefined
  try {
    // https://wicg.github.io/local-font-access/
    const localFonts = await (window as any).queryLocalFonts()
    fontData = localFonts !== undefined ? localFonts as FontData[] : undefined
  } catch (e: any) {
    console.debug('exp::Inspect: failed to grab local fonts:' + String(e))
  }

  let networkInfo: NetworkInformation | undefined
  try {
    // https://wicg.github.io/netinfo/#-dfn-networkinformation-dfn-interface
    const connection = (navigator as any).connection
    networkInfo = connection !== undefined ? connection as NetworkInformation : undefined
  } catch (e: any) {
    console.debug('exp::Inspect: failed to get NetworkInformation:' + JSON.stringify(e))
  }

  const records = {
    userAgent: navigator.userAgent,
    timeIANA: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    languages: navigator.languages.join(' '),
    hwCores: navigator.hardwareConcurrency,
    hwTouchPoints: navigator.maxTouchPoints,
    hwDisplaySize: `${window.screen.height}x${window.screen.width}x${window.screen.pixelDepth}_${window.screen.colorDepth}`,
    webGLVendor: gl?.getParameter(WebGLRenderingContext.VENDOR),
    webGLVersion: gl?.getParameter(WebGLRenderingContext.VERSION),
    webGLShading: gl?.getParameter(WebGLRenderingContext.SHADING_LANGUAGE_VERSION),
    webGLRenderer: gl?.getParameter(WebGLRenderingContext.RENDERER),
    webGLHwVendor: ext !== undefined && ext !== null ? gl?.getParameter(ext.UNMASKED_VENDOR_WEBGL) : undefined,
    webGLHwRender: ext !== undefined && ext !== null ? gl?.getParameter(ext.UNMASKED_RENDERER_WEBGL) : undefined,
    webGLExtensions: gl?.getSupportedExtensions() !== undefined ? 'sha256-' + Buffer.from(await crypto.subtle.digest('SHA-256', (new TextEncoder()).encode(gl?.getSupportedExtensions()?.join(' ')))).toString('base64') : undefined,
    featurePDF: navigator.pdfViewerEnabled,
    featureDoNotTrack: navigator.doNotTrack !== null ? navigator.doNotTrack : undefined,
    featureCookies: navigator.cookieEnabled,
    legacyAppVersion: navigator.appVersion !== '' ? navigator.appVersion : undefined,
    legacyProductSub: navigator.productSub !== '' ? navigator.productSub : undefined,
    legacyVendor: navigator.vendor !== '' ? navigator.vendor : undefined,
    mediaDevices: (await navigator.mediaDevices.enumerateDevices()).filter(x => x.deviceId !== '' || x.groupId !== '' || x.label !== ''),
    networkInfo,
    fontData
  }

  const values = Object.values(records).toString()
  const entropy = crc32(new TextEncoder().encode(values))

  const b = Buffer.alloc(4)
  b.writeUInt32LE(entropy, 0)

  const f: fingerprint = {
    computed: {
      handle: entropy,
      handleMneumonic: bufferToMnemonic(b)
    },
    records
  }

  console.debug('exp::Inspect: got print: ' + JSON.stringify(f))
  return f
}

export function Panopticon (): React.ReactElement {
  const [fingerprint, setFingerprint] = React.useState<fingerprint | undefined>()

  React.useEffect(() => {
    const run = async (): Promise<void> => {
      const finger = await Inspect()
      setFingerprint(finger)
    }
    void run()
  }, [])

  return (
    <>
      <Polaris.Container>
        <Polaris.SpaceBetween size='m' direction='vertical'>
          <Polaris.Header>
            Panopticon
          </Polaris.Header>
          <Polaris.TextContent>You are identified as: <b>{fingerprint?.computed.handle}</b> ({fingerprint?.computed.handleMneumonic.join('-')}), based on:</Polaris.TextContent>
          <Polaris.Textarea readOnly value={JSON.stringify(fingerprint?.records, null, ' ')} rows={24} />
        </Polaris.SpaceBetween>
      </Polaris.Container>
    </>
  )
}
