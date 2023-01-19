import React, { useState } from 'react';
import { Container } from '@mui/system';
import Calendar from 'components/Calendar/Calendar';
import AddProductForm from 'components/AddProductForm/AddProductForm';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';

const Diary = () => {
  const [isAddForm, setIsAddForm] = useState(false);
  const theme = useTheme();
  const matchesTabletDown = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
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
          laptop: 1280,
        },
      }}
    >
      {matchesTabletDown && (
        <>
          {isAddForm ? (
            <AddProductForm isFormActive={setIsAddForm} />
          ) : (
            <>
              <Calendar /> <DiaryProductsList />
              <Button type="button" onClick={() => setIsAddForm(true)}>
                Add
              </Button>
            </>
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
  );
};

export default Diary;
