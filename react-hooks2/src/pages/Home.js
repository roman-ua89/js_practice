import React, {useContext} from 'react';
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {githubContext} from '../context/github/githubContext';

export const Home = () => {
    // const cards = new Array(15).fill('').map((_, i) => i);
    const {loading, users} = useContext(githubContext)
    return (
        <React.Fragment>
            <Search/>

            <div className='row'>

                {loading
                    ? <p className="text-center">Loading</p>
                    : users.map(user => {
                        return (
                            <div className='col-sm-4 mb-4' key={user.id}>
                                <Card user={user} />
                            </div>
                        )
                    })
                }

            </div>
        </React.Fragment>
    )
}