import React from 'react'
import {getUserId, getUserName} from "../reducks/users/selectors"
import {useSelector} from "react-redux"

const Homes = () => {
    const selector = useSelector(state => state);
    const uid = getUserId(selector)
    const userName = getUserName(selector)
    return(
        <div>
            <div className="module-spacer--medium" />
            <div className="module-spacer--medium" />
            <h2>Homes</h2>
            <p>ユーザーID：{uid}</p>
            <p>ユーザー名：{userName}</p>
        </div>
        
    )
}

export default Homes