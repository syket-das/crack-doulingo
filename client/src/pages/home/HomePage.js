import React from 'react'
import { Container } from 'react-bootstrap'
import Carousels from '../../components/carousel/Carousels'
import OverViewTests from '../../components/overViewTests/OverviewTests'
import './homePage.css'

const HomePage = () => {
    return (
        <>
        {/* <Container> */}
            <Carousels /> 
            <OverViewTests />
        {/* </Container> */}
        </>
    )
}

export default HomePage
