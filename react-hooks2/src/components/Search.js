import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {githubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(githubContext)

    const onSubmit = (event) => {
        if(event.key !== 'Enter') {
            return
        }

        github.clearUsers();

        if(value.trim()) {
            // console.log('make request with ', value);
            alert.hide();
            github.search(value.trim());
        } else {
            alert.show('enter user data')
        }
    }

    return (
        <div className='form-group'>
            <input
                onKeyPress={onSubmit}
                // value={value}
                onChange={event => setValue(event.target.value)}
                className='form-control'
                placeholder='Enter user nickname'
                type='text'/>
        </div>
    )
}