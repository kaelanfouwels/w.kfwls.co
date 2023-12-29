
// SPDX-FileCopyrightText: 2023 Kaelan Thijs Fouwels <kaelan.thijs@fouwels.com>
//
// SPDX-License-Identifier: MIT

import * as Polaris from '@cloudscape-design/components'
import * as React from 'react'
import { bufferToMnemonic } from './mnemonic'
import { Buffer } from 'buffer'
import { crc32 } from '@foxglove/crc'

export interface fingerprint {
  computedHandle: number | undefined
  computedHandleMneumonic: string[]
  userAgent: string | undefined
  timeIANA: string | undefined
  language: string | undefined
  hwCores: number | undefined
  webGLVendor: string | undefined
  webGLVersion: string | undefined
  webGLShading: string | undefined
  webGLHwVendor: string | undefined
  webGLHwRender: string | undefined
  featurePDF: boolean | undefined
}

// Get user's fingerprint
export async function Inspect (): Promise<fingerprint> {
  const gl = document.createElement('canvas').getContext('webgl')
  const ext = gl?.getExtension('WEBGL_debug_renderer_info')

  const f: fingerprint = {
    computedHandle: undefined,
    computedHandleMneumonic: [],

    userAgent: navigator.userAgent,
    timeIANA: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    hwCores: navigator.hardwareConcurrency,
    webGLVendor: gl?.getParameter(WebGLRenderingContext.VENDOR),
    webGLVersion: gl?.getParameter(WebGLRenderingContext.VERSION),
    webGLShading: gl?.getParameter(WebGLRenderingContext.SHADING_LANGUAGE_VERSION),
    webGLHwVendor: ext !== undefined && ext !== null ? gl?.getParameter(ext.UNMASKED_VENDOR_WEBGL) : undefined,
    webGLHwRender: ext !== undefined && ext !== null ? gl?.getParameter(ext.UNMASKED_RENDERER_WEBGL) : undefined,
    featurePDF: navigator.pdfViewerEnabled
  }

  const values = Object.values(f).toString()
  const entropy = crc32(new TextEncoder().encode(values))

  const b = Buffer.alloc(4)
  b.writeUInt32LE(entropy, 0)

  f.computedHandle = entropy
  f.computedHandleMneumonic = bufferToMnemonic(b)

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
          <Polaris.TextContent>You are identified as:</Polaris.TextContent>
          <Polaris.Textarea value={JSON.stringify(fingerprint, null, ' ')} rows={18} />
        </Polaris.SpaceBetween>
      </Polaris.Container>
    </>
  )
}
