export const dataTableStyles = {
    container: {
        width: '100%',
        overflow: 'hidden',
        borderRadius: "1rem",
        border: "0px solid rgba(0, 0, 0, 0.125)",
        backgroundColor: "rgb(255, 255, 255)",
        position: "relative",
        marginTop: "25px",
    },
    titleContainer: {
        paddingLeft: 24,
        paddingTop: 24,
        paddingBottom: 35,
        paddingRight: 24
    },
    title: {
        fontSize: "1.25rem",
        fontWeight: 500,
        color: "rgb(52, 71, 103)"
    },
    subTitle: {
        fontSize: "0.875rem",
        color: "rgb(103, 116, 142)",
        letterSpacing: "0.02857em",
        paddingLeft: 2,

    },
    loader: {
        display: "flex",
        padding: "20px 0px",
        justifyContent: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: 9999,
    },
    filters: {
        paddingLeft: "24px",
        paddingRight: "24px"
    },
    loaderCell: {
        border: "none",
        padding: 0
    },
    noResultCell: {
        border: "none"
    }
}