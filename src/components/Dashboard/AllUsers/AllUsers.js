import React, { useEffect, useState } from 'react';

import UserInfo from '../UserInfo/UserInfo';
import ascendant from '../../../resources/icons/ascendant.svg';
import descendant from '../../../resources/icons/descendant.svg';
import './AllUsers.scss';

const AllUsers = () => {
    const listItems = [];
    const [users, setUsers] = useState([]);
    const [sortedUsers, setSortedUsers] = useState([]);
    const [usersForPage, setUsersForPage] = useState(1);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {
                // function to count the page numbers for pagination
                const pageNumbers = Math.floor(data.length / 3);
                setPages(pageNumbers + 1);
                setUsers(data);
                setSortedUsers(data);
            })
    }, []);

    for (let i = 0; i < pages; i++) {
        listItems.push(<li id={i + 1} onClick={() => goToPage(i + 1)}>{i + 1}</li>)
    }

    const goToPage = (pageNumber) => {
        let tempUsers = [...sortedUsers];
        tempUsers = tempUsers.slice(pageNumber * 3 - 3, pageNumber * 3);
        setUsersForPage(tempUsers);
    }
    console.log(usersForPage);

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
                    usersForPage[0] && usersForPage.map((user, index) => <UserInfo key={index} index={index} user={user} />)
                }
                <ul className="pageNumbers">
                    <li>«</li>
                    {listItems}
                    <li>»</li>
                </ul>
            </div>
        </div>
    );
};

export default AllUsers;