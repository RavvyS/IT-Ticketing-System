import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';


export default function PendingTicketsCard() {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3756/3756719.png"
            srcSet="https://cdn-icons-png.flaticon.com/512/3756/3756719.png"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="warning.plainColor">
          122 Cases
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="warning"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        Pending
      </CardOverflow>
    </Card>
  );
}
