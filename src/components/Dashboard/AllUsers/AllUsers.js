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
    const [pageId, setPageId] = useState([1]);
    const [pageSize, setPageSize] = useState(8);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {
                // count the page numbers for pagination
                const tempPageNum = Math.floor(data.length / pageSize);

                // count page number
                const reminder = data.length % pageSize;
                reminder === 0 ?
                    setPages(tempPageNum) :
                    setPages(tempPageNum + 1)


                setUsers(data);
                setSortedUsers(data);
                setUsersForPage(data.slice(0, 3))
            })
    }, []);

    // create list items for pagination
    for (let i = 0; i < pages; i++) {
        listItems.push(<li key={i + 1} id={i + 1} onClick={() => goToPage(i + 1)}>{i + 1}</li>)
    }

    // get the user data for each page
    const goToPage = (pageNumber) => {
        let tempUsers = [...sortedUsers];
        tempUsers = tempUsers.slice(pageNumber * pageSize - pageSize, pageNumber * pageSize);
        setUsersForPage(tempUsers);
        setPageId(pageNumber);
    }

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

    // reload after setting sorting criteria
    useEffect(() => {
        goToPage(1);
    }, [sortedUsers])

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
                    usersForPage[0] &&
                    usersForPage.map((user, index) => <UserInfo key={index} index={index} user={user} />)
                }
                <ul className="pageNumbers">
                    <li onClick={() =>
                        pageId === 1 ?
                            goToPage(1) :
                            goToPage(pageId - 1)
                    }>«</li>
                    {listItems}
                    <li
                        onClick={() =>
                            pageId < pages ?
                                goToPage(pageId + 1) :
                                goToPage(pages)
                        }
                    >»</li>
                </ul>
            </div>
        </div>
    );
};

export default AllUsers;