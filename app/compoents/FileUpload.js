'use client'
import react from 'react'
import SpheronClient, { ProtocolEnum } from '@spheron/storage'

const client = new SpheronClient({ token })

let currentlyUploaded = 0

const { uploadId, bucketId, protocolLink, dynamicLinks } = await client.upload(
  filePath,
  {
    protocol: ProtocolEnum.IPFS,
    name,
    onUploadInitiated: (uploadId) => {
      console.log(`Upload with id ${uploadId} started...`)
    },
    onChunkUploaded: (uploadedSize, totalSize) => {
      currentlyUploaded += uploadedSize
      console.log(`Uploaded ${currentlyUploaded} of ${totalSize} Bytes.`)
    },
  }
)
