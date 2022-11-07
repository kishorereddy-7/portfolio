import { useState } from 'react';
import CV from './../assets/Kishore-Frontend.pdf';
import Profile from '../assets/profile.jpg';
import * as S from './style';
import { Tabs, Tab } from '@mui/material';


const About = () => {
    const [currentTab, setCurrentTab] = useState(0)

    const handleChange = (e, k) => {
        console.log("iam .. ", e, k)
        setCurrentTab(k)
    }

    return (
        <div>
            <div style={{ textAlign: "center" }} >
                <h1>About Me</h1>
            </div>
            <S.StyledCard>
                <div>
                  <h3>Name: Venkata Kishore Reddy</h3>
                  <h3>Location: Noida</h3>
                </div>
                <div>
                    <Tabs value={currentTab} onChange={handleChange} >
                        <Tab label="one" index={0} >hello 1</Tab>
                        <Tab label="two" index={1} >hello 2</Tab>
                    </Tabs>
                </div>
            </S.StyledCard>
        </div>

    )
}

export default About