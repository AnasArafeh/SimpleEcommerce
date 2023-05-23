import { Box, IconButton, Tooltip } from "@mui/material";
import { ITableButton } from "./Models/ITableButton";
import './Styles/TableButton.scss'


const TableButton = ({ onClick, title, children }: ITableButton) => {

    return (
        <Tooltip title={title}>
            <IconButton onClick={onClick} className="TableIconButton">
                {children}
            </IconButton>
        </Tooltip>
    )
}


export default TableButton;