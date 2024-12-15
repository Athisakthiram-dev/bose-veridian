import "@fontsource/dm-sans";  // or import specific weights
import "@fontsource/ibm-plex-serif";

export const Styles = {
    navBox: {
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 1000,
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
    },

    logo: {
        width: '60px',
        height: '60px',
        paddingBottom: "25px"
    },

    tabList: {
        '& .MuiTab-root': {
            fontFamily: "IBM Plex Serif", // Set font family
            fontSize: '16px', // Font size for tabs
            fontWeight: 500, // Font weight for tabs (default state)
            color: '#009065', // Default color for tab text
            // transition: 'color 0.3s ease, font-weight 0.3s ease', // Smooth transition
          },
          '& .Mui-selected': {
            fontWeight: 'bold', // Make the selected tab bold
            color: '#009065', // Green color for selected tab
            
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#009065', // Green indicator
            height: '3px', // Thickness of the indicator
            width: '60%', // Adjust the width of the indicator
            left: '20%', // Center the indicator
            transition: 'width 0.3s ease', // Smooth transition for width change
          },
          display: 'flex',
          justifyContent: 'space-between',
          flex: 1,
          paddingLeft: "300px",
          paddingBottom: "50px",
      },
      
      
}