
import { CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import React from 'react';

interface Card{
    title: string,
    onClick?: () => void;
}

export const RouteCard: React.FC<Card> = ({title, onClick}) => {
    return (
      <Box sx={{ p:2, minWidth: 275 }} onClick={onClick} >
        <Card variant="outlined">
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
        </Card>
      </Box>
    );
}