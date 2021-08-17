const get = async (url, params) => {
  const res = await fetch(url, {
    method: 'GET',
    // body: JSON.stringify({ ...params }),

    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
  const data = await res.json()
}

const post = async (url, params) => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ ...params }),
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
  const data = await res.json()
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
