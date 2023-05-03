import { SpheronClient, ProtocolEnum } from '@spheron/storage'
export async function GET(request) {
  get('/initiate-upload', async (req, res, next) => {
    try {
      const bucketName = 'example-browser-upload' // use your preferred name
      const protocol = ProtocolEnum.IPFS // use your preferred protocol
      const token = process.env.SPHERON_TOKEN // add your access token in .env or paste it here

      const client = new SpheronClient({ token })

      const { uploadToken } = await client.createSingleUploadToken({
        name: bucketName,
        protocol,
      })

      res.status(200).json({
        uploadToken,
      })
    } catch (error) {
      console.error(error)
      next(error)
    }
  })
  return new Response('Hello, Next.js!')
}
