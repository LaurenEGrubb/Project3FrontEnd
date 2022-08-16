import Client from './api'

// export const ProfileServices = async () => {
export const GetAlbumsByUser = async (userId) => {
  try {
    const res = await Client.get(`api/album/${userId}`)
    return res.data
  } catch (e) {
    throw e
  }
}

export const DeleteAlbum = async (albumId) => {
  try {
    const res = await Client.delete(`api/album/${albumId}`)
    return res.data
  } catch (e) {
    throw e
  }
}
