import Client from './api'

export const GetAlbums = async () => {
  try {
    const res = await Client.get('api/album')
    return res.data
  } catch (e) {
    throw e
  }
}
