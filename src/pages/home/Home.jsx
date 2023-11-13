import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profiles/ProfileSide'

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <div className="postside">Post</div>
            <div className="RightSide">RightSide</div>
        </div>
    )
}

export default Home