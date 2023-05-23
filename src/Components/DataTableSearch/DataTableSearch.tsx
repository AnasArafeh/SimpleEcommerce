import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputLabel, Typography } from '@mui/material';
import { IDataTableSearch } from './Models/IDataTableSearch';
import './Styles/DataTableSearch.scss'
import { SEARCH_TEXT } from '../../StateManagement/Interfaces/ISharedActions';
import { debounce } from '../../Helpers/HttpHelper';
import { useEffect, useState } from 'react';

const DataTableSearch = ({ setSearchText }: IDataTableSearch) => {

    const [text, setText] = useState("");

    const handleSearchChange = (e) => {
        let value = e.target.value;
        setText(value);

        const updateDebounce = debounce(() => setSearchText(SEARCH_TEXT, value), 750)
        updateDebounce();
    }

    return (
        <>
            <Box>
                <InputLabel id={"input-default-search"} className="dataTableSearchLabel">Search</InputLabel>
            </Box>
            <Typography component="div" className='dataTableSearch'>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    //placeholder="Search..."
                    inputProps={{ 'aria-label': 'search..' }}
                    value={text}
                    onChange={handleSearchChange}
                />
                <IconButton type="button" sx={{ p: '7px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Typography>
        </>
    );
}

export default DataTableSearch;
