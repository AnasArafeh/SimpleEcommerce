import { Card, Grid, Typography } from "@mui/material";
import { IAppCard } from "./Models/IAppCard";
import './Styles/AppCard.scss'


const AppCard = ({ title, children, actions }: IAppCard) => {

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Card className="AppCard">
                    <Typography variant="h5" className="AppCardtitle">{title}</Typography>
                    {children}
                    {!!actions &&
                        <Grid container direction="row" textAlign="end">
                            <Grid item xs={12}>
                                {actions()}
                            </Grid>
                        </Grid>
                    }
                </Card>
            </Grid>
        </Grid>
    )
}


export default AppCard;