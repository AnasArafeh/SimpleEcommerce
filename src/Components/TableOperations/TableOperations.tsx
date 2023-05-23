
import { Divider, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { ITableOperations } from './Models/ITableOperations';
import './Styles/TableOperations.scss'


const TableOperations = ({ searchComponent, filterComponent, paginationComponent, children }: ITableOperations) => {
    return (
        <>
            <Grid container className="TableFilters">
                <Grid item xs={12} sm={4} md={3} lg={3} pr={2} sx={{ mb: 2 }}>
                    {!!searchComponent && searchComponent()}
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mb: 2 }}>
                    {!!filterComponent && filterComponent()}
                </Grid>
            </Grid>
            <Divider sx={{ height: 20 }} orientation="horizontal" />
            {children}
            {!!paginationComponent && paginationComponent()}
        </>
    );
}

export default TableOperations;