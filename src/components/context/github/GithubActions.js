import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

//searchUsers
export const searchUsers = async (text) => {
  // setIsLoading()

  const params = new URLSearchParams({
    q: text,
  });

  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  // })

  // const { items } = await response.json();
  // // console.log(items)
  // // setUsers(data);
  // // setIsLoading(false);
  // return items

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// get user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    // per_page: 10
  });

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};

// get single user
export const getUser = async (login) => {
  // setIsLoading()

  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = '/notfound';
    return null;
  } else {
    const data = await response.json();
    console.log(data);
    // setUsers(data);
    // setIsLoading(false);
    // dispatch({
    //     type: 'GET_USER',
    //     payload: data,
    // })
    return data;
  }
};

//get user repos
export const getUserRepos = async (login) => {
  // setIsLoading()

  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();
  // console.log(items)
  // setUsers(data);
  // setIsLoading(false);
  // dispatch({
  //     type: 'GET_REPOS',
  //     payload: data,
  // })
  return data;
};
