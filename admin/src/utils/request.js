import { message } from 'antd'
const baseUrl = '/api/admin'

const urlMerge = url => baseUrl + url

const handlerError = (status, data) => {

  if (status >= 400 && status <= 600) {
    message.error(data.message)
    return false
  } else {
    return true
  }
}

const get = async (url, params) => {
  const res = await fetch(urlMerge(url), {
    method: 'GET',
    // body: JSON.stringify({ ...params }),

    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })

  const data = await res.json()
}

const post = async (url, params) => {
  const res = await fetch(urlMerge(url), {
    method: 'POST',
    body: JSON.stringify({ ...params }),
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
  const data = await res.json()
  return handlerError(res.status, data) && data
}

const put = async (url, params) => {
  const res = await fetch(url, {
    method: 'PUT',
    // body: JSON.stringify({ ...params }),

    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
  const data = await res.json()
}

const Delete = async (url, params) => {
  const res = await fetch(url, {
    method: 'DELETE',
    // body: JSON.stringify({ ...params }),

    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
  const data = await res.json()
}

export default {
  get,
  post,
  put,
  delete: Delete
}
