import { useState } from 'react';

import {getUserInfo, fetchRecipantListValue} from '../Repositories/HomeRepository'

export default function HomeViewModel() {

    const [error, setError] = useState("")
    const [data, setData] = useState("")
    const [recipantList, setRecipantList] = useState([]);

    async function fetchUserInfo() {
        const {result, error} = await getUserInfo()
        console.log("Result", result)
        setData(result)
        setError(error)
    }

    async function fetchRecipantList() {
        const {result, error} = await fetchRecipantListValue()
        setRecipantList(result)
        setError(error)
    }

    return {
        error,
        data,
        recipantList,
        fetchUserInfo,
        fetchRecipantList,
    }
}