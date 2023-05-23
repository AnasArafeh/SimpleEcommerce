import { Button } from "@mui/material";
import { IAppButton } from "./Models/IAppButton";
import "./Styles/AppButton.scss"


const AppButton = ({ onClick, label, variant, disabled = false }: IAppButton) => {
    return (
        <Button onClick={onClick} variant={variant} className="AppButton" disabled={disabled} classes={{ disabled: "disabledButton" }}>
            {label}
        </Button>
    )
}


export default AppButton;


