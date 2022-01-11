import { createContext, useReducer } from "react";
import { createRoutesFromChildren } from "react-router-dom";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com'
const GITHUB_TOKEN = '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'

export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    const initalState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initalState)

    // //searchUsers
    // const searchUsers = async(text) => {
    //     setIsLoading()

    //     const params = new URLSearchParams({
    //         q: text
    //     })


    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         },
    //     })

    //     const { items } = await response.json();
    //     // console.log(items)
    //     // setUsers(data);
    //     // setIsLoading(false);
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: items,
    //     })
    // }

    // // get single user
    // const getUser = async(login) => {
    //     setIsLoading()


    //     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         },
    //     })

    //     if (response.status === 404) {
    //         window.location = '/notfound'
    //     } else {
    //         const data = await response.json();
    //         console.log(data)
    //         // setUsers(data);
    //         // setIsLoading(false);
    //         dispatch({
    //             type: 'GET_USER',
    //             payload: data,
    //         })
    //     }

    // }

    // //get user repos
    // const getUserRepos = async(login) => {
    //     setIsLoading()

    //     const params = new URLSearchParams({
    //         sort: 'created',
    //         per_page: 10
    //     })


    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         },
    //     })

    //     const data = await response.json();
    //     // console.log(items)
    //     // setUsers(data);
    //     // setIsLoading(false);
    //     dispatch({
    //         type: 'GET_REPOS',
    //         payload: data,
    //     })
    // }


    // const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })


    // const setIsLoading = () => dispatch({ type: 'SET_LOADING' })

    return ( < GithubContext.Provider value = {
            {
                ...state,
                dispatch,
            }
        } > { children } 
        </GithubContext.Provider>
    )

}

export default GithubContext