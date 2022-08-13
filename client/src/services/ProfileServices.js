import Client from './api'

export const GetAlbumsByUser = async () => {
  try {
    const res = await Client.get('api/album/:user_id')
    return res.data
  } catch (e) {
    throw e
  }
}
