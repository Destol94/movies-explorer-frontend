const BASE_URL = 'http://localhost:3001';

export const registration = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "name": `${name}`,
      "email": `${email}`,
      "password": `${password}`
    })
  })
  return checkResposne(res);
}

export const autorization = async (email, password) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": `${email}`,
      "password": `${password}`
    })
  })
  return checkResposne(res);
}

export const saveMovie = async (movie) => {
  const res = await fetch(`${BASE_URL}/movies`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...movie })
  })
  return checkResposne(res);
}

const checkResposne = res => {
  return res.ok ? res.json() : Promise.reject(`${res.statusText}`);
}