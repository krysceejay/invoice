import axios from 'axios'
const baseUrl = process.env.BASE_URL

export const getData = async (url, token) => {
    const { data } = await axios.get(`${baseUrl}/${url}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        },
    })

    return data
}

export const postData = async (url, post, token) => {
    const { data } = await axios.post(`${baseUrl}/${url}`, post, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        },
    })
    
    return data
}

export const putData = async (url, post, token) => {
    const { data } = await axios.put(`${baseUrl}/${url}`, post, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        },
    })
    
    return data
}

export const deleteData = async (url, token) => {
    const { data } = await axios.delete(`${baseUrl}/${url}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        },
    })
    
    return data
}


export const patchData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}