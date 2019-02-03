import React from 'react';
import './GitHubStats.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch, faStar, faUsers } from '@fortawesome/free-solid-svg-icons'


export default (props) => {

    function openRepo() {
        console.log('Track: goToRepo');

        window.open(props.stats.html_url, '_blank');
    }

    return (
        <div className='gitHubStats__container' onClick={openRepo.bind(this)}>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FontAwesomeIcon icon={faCode} /></p>
                <p className='gitHubStats__description'>{props.language}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FontAwesomeIcon icon={faCodeBranch} /></p>
                <p className='gitHubStats__description'>{props.stats.forks_count}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FontAwesomeIcon icon={faStar} /></p>
                <p className='gitHubStats__description'>{props.stats.stargazers_count}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FontAwesomeIcon icon={faUsers} /></p>
                <p className='gitHubStats__description'>{props.stats.watchers_count}</p>
            </div>
        </div>
    );
}
