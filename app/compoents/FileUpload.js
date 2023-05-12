import { upload } from '@spheron/browser-upload'

const response = await fetch(`<BACKEND_URL>/initiate-upload`) // get the temporary access token from server
const resJson = await response.json()
const token = resJson.uploadToken

let currentlyUploaded = 0

const { uploadId, bucketId, protocolLink, dynamicLinks } = await upload(files, {
  token,
  onChunkUploaded: (uploadedSize, totalSize) => {
    currentlyUploaded += uploadedSize
    console.log(`Uploaded ${currentlyUploaded} of ${totalSize} Bytes.`)
  },
})
