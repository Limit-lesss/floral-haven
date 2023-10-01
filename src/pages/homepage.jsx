import React from 'react';
import { NavMenu } from '../components/navbar';
import { SectionOne } from '../components/sectionOne';
import { SectionTwo } from '../components/sectionTwo';
import { SectionThree } from '../components/sectionThree';
import { SectionFour } from '../components/sectionFour';
import { SectionFive } from '../components/sectionFive';
import { SectionSix } from '../components/sectionSix';
import { SectionSeven } from '../components/sectionSeven';

export const HomePage = () => {
    return(
        <>
            <NavMenu/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
        </>
    );
}