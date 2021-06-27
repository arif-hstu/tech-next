import React, { useEffect, useState } from 'react';

import UserInfo from '../UserInfo/UserInfo';
import ascendant from '../../../resources/icons/ascendant.svg';
import descendant from '../../../resources/icons/descendant.svg';
import './AllUsers.scss';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [sortedUsers, setSortedUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);

    const sortData = (keyword, order) => {
        const toBeSorted = [...users];
        const sorted = toBeSorted.slice().sort((firstUser, secondUser) => {
            const nameOfFirst = firstUser[keyword];
            const nameOfSecond = secondUser[keyword];

            if (order === 'asc') {
                if (nameOfFirst < nameOfSecond) return -1;
                if (nameOfFirst > nameOfSecond) return 1;
            } else {
                if (nameOfFirst < nameOfSecond) return 1;
                if (nameOfFirst > nameOfSecond) return -1;
            }
            return 0;
        })
        setSortedUsers(sorted);
    }

    const countPageNumbers = (userNumber) => {

    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setSortedUsers(data);
            })


    }, []);

    return (
        <div className="AllUsers">
            <div className="contentHolder">
                <h4>All Users</h4>
                <div className="header">
                    <span>
                        <strong>No</strong>
                        <strong>Name
                            <span>
                                <img
                                    src={ascendant}
                                    alt="Ascending"
                                    onClick={() => sortData('name', 'asc')}
                                />
                                <img
                                    src={descendant}
                                    alt="Descending"
                                    onClick={() => sortData('name', 'desc')}
                                />
                            </span>
                        </strong>
                        <strong>Email
                            <span>
                                <img
                                    src={ascendant}
                                    alt="Ascending"
                                    onClick={() => sortData('email', 'asc')}
                                />
                                <img
                                    src={descendant}
                                    alt="Descending"
                                    onClick={() => sortData('email', 'desc')}
                                />
                            </span>
                        </strong>
                        <strong>Website</strong>
                    </span>
                </div>
                {
                    users[0] && sortedUsers.map((user, index) => <UserInfo key={index} index={index} user={user} />)
                }
                <ul className="pageNumbers">
                    {
                        users.map((user, index) => <li key={index} >{index + 1}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AllUsers;