import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function SolvedTicketsCard() {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://i.pinimg.com/564x/45/bf/dd/45bfdd61a51c71aca7e0e7cd1f4edd35.jpg"
            srcSet="https://i.pinimg.com/564x/45/bf/dd/45bfdd61a51c71aca7e0e7cd1f4edd35.jpg"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          250 Cases
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="success"
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
        Solved
      </CardOverflow>
    </Card>
  );
}
