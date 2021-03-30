import React from 'react';
import classes from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unfollow, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <Paginator currentPage = {currentPage}
                   onPageChanged = {onPageChanged}
                   totalItemsCount = {totalUsersCount}
                   pageSize = {pageSize} />
        <div>
            {
                users.map(u => <User user = {u}
                                     key = {u.id}
                                     followingInProgress = {followingInProgress}
                                     unfollow = {unfollow}
                                     follow = {follow} />)
            }
        </div>

    </div>
}

export default Users;