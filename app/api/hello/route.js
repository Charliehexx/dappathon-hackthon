import { NextResponse } from 'next/server'
import { SpheronClient, ProtocolEnum } from '@spheron/storage'

export async function GET(request) {
  console.log(request)
  try {
    const bucketName = 'dappathon' // use your preferred name
    const protocol = ProtocolEnum.IPFS // use your preferred protocol
    const token = process.env.SPHERON_TOKEN // add your access token in .env or paste it here

    const client = new SpheronClient({ token })

    const { uploadToken } = await client.createSingleUploadToken({
      name: bucketName,
      protocol,
    })

    return NextResponse.json({ uploadToken })
  } catch (error) {
    console.error(error)
    next(error)
  }
}
