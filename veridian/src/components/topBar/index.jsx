import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import VeridianLogo from "../../assets/images/VeridianLogo.png";
import { Link, Element } from 'react-scroll';
import { Styles } from './style.jsx';
import Home from "../../screens/home/index"
import AboutUs from "../../screens/aboutUs/index"


export default function Navbar() {
  // State to track the active tab
  const [value, setValue] = React.useState("1");

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
        <TabContext value={value}>
            {/* Sticky Navigation */}
            <Box sx={Styles.navBox}>
                <img src={VeridianLogo} alt="Veridian Logo" style={Styles.logo} />
                <TabList
                    onChange={handleChange}
                    aria-label="Navigation Tabs"
                    sx={Styles.tabList}
                >
                    <Tab
                        label={<Link to="section-1" smooth={true} offset={-100} duration={500}>Home</Link>}
                        value="1"
                    />
                    <Tab
                        label={<Link to="section-2" smooth={true} offset={-100} duration={500}>About Us</Link>}
                        value="2"
                    />
                    <Tab
                        label={<Link to="section-3" smooth={true} offset={-100} duration={500}>Our Team</Link>}
                        value="3"
                    />
                    <Tab
                        label={<Link to="section-4" smooth={true} offset={-100} duration={500}>Investment Approach</Link>}
                        value="4"
                    />
                    <Tab
                        label={<Link to="section-5" smooth={true} offset={-100} duration={500}>Contact Us</Link>}
                        value="5"
                    />
                </TabList>
            </Box>

            {/* Sections */}
            <Box>
                <Element name="section-1">
                    <Home />
                </Element>

                <Element name="section-2">
                    <AboutUs />
                </Element>

                <Element name="section-3">
                    <Box>
                        <h2>Our TEAM</h2>
                    </Box>
                </Element>

                <Element name="section-4">
                    <Box>
                        <h2>Investment Approach</h2>
                    </Box>
                </Element>

                <Element name="section-5">
                    <Box>
                        <h2>Contact Us</h2>
                    </Box>
                </Element>
            </Box>
        </TabContext>
    </Box>
  );
}