import React from 'react';
import { List, ListItem } from '@mui/material';
import BasicCard from './BasicCard';

const CardList = () => {
    const renderCardList = (): JSX.Element => {
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem  alignItems="flex-start">
                    <BasicCard/>
                </ListItem>
            </List>
        )
    }

    return (
        <>
        {renderCardList()}
        </>
    )
}

export default CardList;