
import { Divider, Paper, Typography, Grid } from '@mui/material';
import { IAppPaper } from './Models/IAppPaper';
import './Styles/AppPaper.scss'
import { spacing } from '@mui/system';


const AppPaper = ({ title, subTitle, buttonComponent, children }: IAppPaper) => {

    return (
        <Paper className="TablePaperContainer" >
            <Grid container className="TableTitleContainer" justifyContent="space-between">
                <Grid item xs={12} sm={6} md={5}>
                    <Typography className="TableTitle">
                        {title}
                    </Typography>
                    <Typography className="TableSubTitle">
                        {subTitle}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                    {!!buttonComponent && buttonComponent()}
                </Grid>
            </Grid>
            {children}
        </Paper>
    );
}

export default AppPaper;