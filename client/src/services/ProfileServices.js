import Client from './api'
import { useParams } from 'react-router-dom'

// export const ProfileServices = async () => {
export const GetAlbumsByUser = async (userId) => {
  try {
    const res = await Client.get(`api/album/${userId}`)
    return res.data
  } catch (e) {
    throw e
  }
}
// }
