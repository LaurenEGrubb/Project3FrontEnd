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

// export const NewAlbum = async (data, userId) => {
//   try {
//     const res = await Client.post(`api/album/${userId}`, data)
//     return res.data
//   } catch (e) {
//     throw e
//   }
// }
export const NewAlbum = async (data, userId) => {
  try {
    const res = await Client.post(`add-image/${userId}`, data)
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

// export const PostPhoto = async (data, albumId) => {
//   try {
//     const res = await Client.post(`api/photo/${albumId}`, data)
//     return res.data
//   } catch (e) {
//     throw e
//   }
// }
export const PostPhoto = async (data, albumId) => {
  try {
    const res = await Client.post(`add-image/photo/${albumId}`, data)
    return res.data
  } catch (e) {
    throw e
  }
}

export const EditAlbum = async (data, albumId) => {
  try {
    const res = await Client.put(`api/album/${albumId}`, data)
    return res.data
  } catch (e) {
    throw e
  }
}
