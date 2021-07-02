import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import UserInfo from '../UserInfo/UserInfo';
import ascendant from '../../../resources/icons/ascendant.svg';
import descendant from '../../../resources/icons/descendant.svg';
import './AllUsers.scss';
import { SearchContext } from '../../../App';

const AllUsers = () => {
    const listItems = [];

    const [searchTerm] = useContext(SearchContext);

    const [users, setUsers] = useState([]);
    const [sortedUsers, setSortedUsers] = useState([]);
    const [usersForPage, setUsersForPage] = useState([]);
    const [pages, setPages] = useState([]);
    const [pageId, setPageId] = useState([1]);
    const [pageSize, setPageSize] = useState(
        localStorage.getItem('pageSize') || 4
    );
    const [searchedUsers, setSearchedUsers] = useState([]);

    // handle form data
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // store pageSize in localStorage
        setPageSize(data.length);
        localStorage.setItem('pageSize', data.length);

        // count the temp page count for pagination
        const tempUsers = [...users];
        const tempPageNum = Math.floor(tempUsers.length / data.length);

        // set page count
        const reminder = tempUsers.length % data.length;
        reminder === 0 ?
            setPages(tempPageNum) :
            setPages(tempPageNum + 1);
    };

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

                // sort data depending in the local storage
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

    // funciton to sort data depending upon user selected criteria
    const sortData = (keyword, order, data) => {
        let toBeSorted;
        // determine which data to be sorted
        if (searchTerm !== "") {
            toBeSorted = [...searchedUsers];
        } else {
            data ? toBeSorted = [...data] : toBeSorted = [...users];
        }
        // store sorted data
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

        // store sorting criteria in local storage
        localStorage.setItem('keyword', keyword);
        localStorage.setItem('order', order);
    }

    // reload after setting sorting criteria
    useEffect(() => {
        goToPage(1);
    }, [sortedUsers, pageSize]);

    // update data depending on searchItem
    useEffect(() => {
        const tempArray = [...users];
        const newArray = tempArray.filter(user => {
            if (searchTerm === "") {
                return [];
            } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return user;
            }
        })
        setSearchedUsers(newArray);

        // store sorting criteria in local storage
        const keyword = localStorage.getItem('keyword');
        const sortBy = localStorage.getItem('order');

        sortData(keyword, sortBy, newArray);

        // count the temp page count for pagination
        const tempPageNum = Math.floor(newArray.length / pageSize);

        // set page count
        const reminder = newArray.length % pageSize;
        reminder === 0 ?
            setPages(tempPageNum) :
            setPages(tempPageNum + 1);

    }, [searchTerm]);

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
                    usersForPage.map((user, index) => <Link key={index} to={`/user/${user.id}`}><UserInfo user={user} /></Link>)
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
                            <h5>Users Per Page</h5>
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

export default AllUsers; // to Dashboard