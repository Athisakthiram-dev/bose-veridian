import HomeLeft from "../../assets/images/homeLeft.png"
import HomeRight from "../../assets/images/homeRight.png"
import "@fontsource/dm-sans";  // or import specific weights
import "@fontsource/ibm-plex-serif";




export const Styles = {
    background: {
        position: "relative",
        width: "1175px",
        height: "540px", // Full viewport height
        backgroundColor: "#009065", // Match the green background
        overflow: "hidden", // Prevent scrollbars for the images
        marginLeft: "15px"
        
    },

    leftImg: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "470px",
        height: "540px",
        zIndex: 1,
        backgroundImage: `url(${HomeLeft})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden"
    },

    rightImg: {
        position: "absolute",
        right: 0,
        top: 0,
        width: "470px",
        height: "540px",
        zIndex: 1,
        backgroundImage: `url(${HomeRight})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden"
    },

    centerContent: {
        position: "relative",
        zIndex: 2, // Ensures content is above background images
        textAlign: "center",
        color: "white",
    },

    investTypo: {
        border: "none",
        backgroundColor: "#F9C300",
        display: "inline-flex",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "3px",
        paddingBottom: "1px",
        position: "relative",
        top: "120px",
        '& .MuiTypography-root': {
            fontFamily: "DM Sans",
            fontWeight: 800,
            fontSize: "12px",
            color: "#FFFFFF",
            textAlign: "center",
        }
        
    },

    heading: {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "190px",
        paddingRight: "165px",
        position: "relative",
        top: "100px",
        // mb: 2, // Margin bottom for spacing
        // '& .MuiTypography-root': {
        //     fontFamily: "IBM Plex Serif",
        //     fontWeight: 700,
        //     fontSize: "48px",
        //     color: "#F5F7FA",
        //     textAlign: "center",
        // }
        fontFamily: "IBM Plex Serif",
        fontWeight: 700,
        fontSize: "40px",
        color: "#F5F7FA",
        textAlign: "center",
    },

    btn: {
        border: "none",
        backgroundColor: "#0000004D",
        display: "inline-flex",
        paddingLeft: "30px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "15px",
        fontFamily: "DM Sans",
        fontWeight: 600,
        fontSize: "18px",
        color: "#FFFFFF",
        textAlign: "center",
        position: "relative",
        top: "120px"
    },

    btnArrow: {
        paddingLeft: "10px",
        paddingTop: "5px",
        paddingRight: "10px",
        width: "15px",
        height: "15px",
        fontFamily: "DM Sans",
        fontWeight: 600,
        fontSize: "18px",
        color: "#FFFFFF",
        textAlign: "center",
    }
}