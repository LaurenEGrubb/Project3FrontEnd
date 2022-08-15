import { async } from 'q'
import Client from './api'

export const GetAlbums = async () => {
  try {
    const res = await Client.get('api/album/')
    return res.data
  } catch (e) {
    throw e
  }
}

export const NewAlbum = async (data, userId) => {
  try {
    const res = await Client.post(`api/album/${userId}`, data)
    return res.data
  } catch (e) {
    throw e
  }
}

export const AlbumPhotos = async (albumId) => {
  try {
    const res = await Client.get(`api/album/details/${albumId}`)
    return res.data
  } catch (e) {
    throw e
  }
}
