import React from 'react';

const Profile = (props) => {
    const { repositories, repositoriesLoading, repositoriesError, users} = props;
    return (
        <div className="card">
            {console.log(users, 'users')}
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={repositories?.owner?.avatar_url} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <a href={`${repositories?.owner?.html_url}`} className="title is-4">{users?.name}</a>
                    </div>
                </div>
                <div className="content">
                    <a href={`${repositories?.owner?.html_url}`}>
                        <strong>
                            @{users?.login}
                        </strong>
                       </a> <br/>
                </div>

                <div className="content">
                    <a href={`${repositories?.owner?.html_url}`}>{repositories?.owner?.html_url}</a> <br/>
                </div>
            </div>
        </div>
    );
};

export default Profile;