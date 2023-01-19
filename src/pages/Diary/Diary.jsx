import React, { useState } from 'react';
import { Container } from '@mui/system';
import Calendar from 'components/Calendar/Calendar';
import AddProductForm from 'components/AddProductForm/AddProductForm';
import DaySummary from 'components/DaySummary/DaySummary';
import { Box, Button, useMediaQuery, useTheme, Icon } from '@mui/material';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import AddIcon from '@mui/icons-material/Add';

const Diary = () => {
  const [isAddForm, setIsAddForm] = useState(false);
  const theme = useTheme();
  const matchesTabletDown = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <Container
      sx={{
        display: {
          laptop: 'flex',
        },
        alignItems: {
          mobile: 'center',
        },
        justifyContent: {
          laptop: 'space-around',
        },
        width: {
          laptop: 1280,
        },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          height: '100vh',
          padding: {
            mobile: 2.5,
            tablet: 4,
            laptop: 1,
          },
          width: {
            mobile: 320,
            tablet: 768,
            laptop: 763,
          },
        }}
      >
        {matchesTabletDown && (
          <>
            {isAddForm ? (
              <AddProductForm isFormActive={setIsAddForm} />
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Calendar />
                <DiaryProductsList />
                <Button
                  type="button"
                  onClick={() => setIsAddForm(true)}
                  sx={{
                    minWidth: '0px',
                    width: '48px',
                    height: '48px',
                    lineHeight: '0px',
                    borderRadius: '100%',
                    padding: 0,
                  }}
                >
                  <Icon>
                    <AddIcon />
                  </Icon>
                </Button>
              </Box>
            )}
          </>
        )}
        {!matchesTabletDown && (
          <>
            <Calendar />
            <AddProductForm />
            <DiaryProductsList />
          </>
        )}
      </Container>
      <Container
        sx={{
          backgroundColor: '#F0F1F3',
          display: 'flex',
          alignItems: { mobile: 'start', laptop: 'center' },

          padding: {
            mobile: 2.5,
            tablet: 4,
            laptop: 1,
          },
          width: {
            mobile: 320,
            tablet: 768,
            laptop: '640px',
          },
          height: {
            mobile: 443,
            tablet: 326,
            laptop: '100vh',
          },
          // justifyContent: 'center',
        }}
      >
        <DaySummary />
      </Container>
    </Container>
  );
};

export default Diary;
