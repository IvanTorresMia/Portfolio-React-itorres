import React from 'react'
import Con from '../../Components/AboutMeCon'
import Cards from '../../Components/AboutMeCards'
import StoryCard from '../../Components/StoryCard'
function AboutMe() {

    return (

        <div className="container rounded">
            <Con />
            <Cards />
            <StoryCard />
        </div>
    )
}

export default AboutMe;