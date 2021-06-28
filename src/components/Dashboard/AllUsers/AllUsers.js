import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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
    const [pageSize, setPageSize] = useState(4);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setPageSize(data.length);

        // count the temp pages for pagination
        const tempUsers = [...users];
        const tempPageNum = Math.floor(tempUsers.length / data.length);

        // set pages
        const reminder = tempUsers.length % data.length;
        reminder === 0 ?
            setPages(tempPageNum) :
            setPages(tempPageNum + 1);
    };

    console.log('pages.........', pages)
    console.log('pageSize.........', pageSize)
    console.log('pageId.........', pageId)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {
                // count the temp pages for pagination
                const tempPageNum = Math.floor(data.length / pageSize);

                // set pages
                const reminder = data.length % pageSize;
                reminder === 0 ?
                    setPages(tempPageNum) :
                    setPages(tempPageNum + 1)

                setUsers(data);

                // sort data depending on the local storage
                if (localStorage.getItem('keyword') &&
                    localStorage.getItem('order')) {
                    const keyword = localStorage.getItem('keyword');
                    const sortBy = localStorage.getItem('order');
                    sortData(keyword, sortBy, data);

                } else {
                    setSortedUsers(data);
                    setUsersForPage(data.slice(0, 3));
                }
            });

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

    const sortData = (keyword, order, data) => {
        let toBeSorted;
        data ? toBeSorted = [...data] : toBeSorted = [...users]
        const sorted = toBeSorted.slice().sort((firstUser, secondUser) => {
            const keywordOfFirst = firstUser[keyword];
            const keywordOfSecond = secondUser[keyword];

            if (order === 'asc') {
                if (keywordOfFirst < keywordOfSecond) return -1;
                if (keywordOfFirst > keywordOfSecond) return 1;
            } else {
                if (keywordOfFirst < keywordOfSecond) return 1;
                if (keywordOfFirst > keywordOfSecond) return -1;
            }
            return 0;
        })
        setSortedUsers(sorted);
        setUsersForPage(sorted.slice(0, 3));

        // store sorting criteria on local storage
        localStorage.setItem('keyword', keyword);
        localStorage.setItem('order', order);
    }

    // reload after setting sorting criteria
    useEffect(() => {
        goToPage(1);
    }, [sortedUsers, pageSize])

    return (
        <div className="AllUsers">
            <div className="contentHolder">
                <h4>All Users</h4>
                <div className="header">
                    <span>
                        <strong>ID</strong>
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
                    usersForPage.map((user, index) => <UserInfo key={index} user={user} />)
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
                <div className="formHolder">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="titleHolder">
                            <h4>Post Title</h4>
                            <input
                                name="test"
                                type="number"
                                defaultValue={pageSize}
                                {...register('length', { min: 1, max: users.length })}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;