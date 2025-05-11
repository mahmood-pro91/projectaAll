
import React from 'react';
import { Button, Stack, Typography } from '@mui/material';



export default function MuiTopography() {
  return (
    <div>
        <h1>Topography</h1>
        <Typography variant="h1" gutterBottom>h1 Heading</Typography>
        <Typography variant="h2" gutterBottom>h2 Heading</Typography>
        <Typography variant="h3" gutterBottom>h3 Heading</Typography>
        <Typography variant="h4" gutterBottom>h4 Heading</Typography>
        <Typography variant="h5" gutterBottom>h5 Heading</Typography>
        <Typography variant="h6" gutterBottom>h6 Heading</Typography>
        <Typography variant="subtitle1" gutterBottom>subtitle1</Typography>
        <Typography variant="subtitle2" gutterBottom>subtitle2</Typography>
        <Typography variant="body1" gutterBottom>body1</Typography>
        <Typography variant="body2" gutterBottom>body2</Typography>
        
        <Stack direction="row" spacing={10}>
            <Button variant="contained" color="info">contained</Button>
            <Button variant="outlined" color="primary">outlined</Button>
            <Button variant="text" color="primary">text</Button>
        </Stack>
    </div>
  );
}