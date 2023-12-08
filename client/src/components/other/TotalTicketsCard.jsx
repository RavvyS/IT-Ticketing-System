import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function TotalTicketsCard() {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-list-icon-png-image_3728045.jpg"
            srcSet="https://png.pngtree.com/png-clipart/20190516/original/pngtree-list-icon-png-image_3728045.jpg"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="primary.plainColor">
          322 Cases
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
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
        All-Out
      </CardOverflow>
    </Card>
  );
}