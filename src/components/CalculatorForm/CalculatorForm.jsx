import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUserId } from 'redux/auth/authSelectors';
import {
  useDailyRateMutation,
  useUserDailyRateMutation,
} from 'redux/diet/dietApi';

const CalculatorForm = ({ showModalHandler }) => {
  const [postDailyRate] = useDailyRateMutation({
    fixedCacheKey: 'dailyRate',
  });
  const [postUserDailyRate, resultUser] = useUserDailyRateMutation();
  const userId = useSelector(selectUserId);
  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = {};
    for (const [key, value] of formData.entries()) {
      body[key] = value;
    }
    // console.log(body);
    postDailyRate(body);
    postUserDailyRate({ id: userId, body });
    showModalHandler();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: {
          laptop: '520px',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginBottom: {
            mobile: '34px',
            tablet: '68px',
          },
          fontSize: {
            tablet: '34px',
          },
        }}
      >
        Calculate your daily calorie intake right now
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width: '100%',
        }}
        onSubmit={handleFormSubmit}
      >
        <Box
          sx={{
            display: 'flex',
            width: '50%',
            marginBottom: {
              mobile: '40px',
              tablet: '60px',
            },
            justifyContent: 'flex-start',
            flexDirection: {
              mobile: 'column',
              tablet: 'row',
            },
          }}
        >
          <Box
            sx={{
              marginRight: {
                tablet: '32px',
              },
            }}
          >
            <TextField
              id="form__input-height"
              name="height"
              label="Height"
              required
              sx={{
                width: 240,
                marginBottom: {
                  mobile: '32px',
                  tablet: '40px',
                },
              }}
            />
            <TextField
              id="form__input-age"
              name="age"
              label="Age"
              required
              sx={{
                width: 240,
                marginBottom: {
                  mobile: '32px',
                  tablet: '40px',
                },
              }}
            />
            <TextField
              id="form__input-current-weight"
              name="weight"
              label="Current weight"
              required
              sx={{
                width: 240,
                marginBottom: {
                  mobile: '32px',
                  tablet: '0px',
                },
              }}
            />
          </Box>
          <Box>
            <TextField
              id="form__input-desired-weight"
              name="desiredWeight"
              label="Desired weight"
              required
              sx={{
                width: 240,
                marginBottom: {
                  mobile: '32px',
                  tablet: '40px',
                },
              }}
            />
            <FormControl
              sx={{
                width: 240,
              }}
            >
              <FormLabel id="bloodType-label" required>
                Blood type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-bloodType-label"
                defaultValue="female"
                name="bloodType"
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label={<Typography variant="caption">1</Typography>}
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label={<Typography variant="caption">2</Typography>}
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label={<Typography variant="caption">3</Typography>}
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label={<Typography variant="caption">4</Typography>}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: {
              laptop: 'flex-end',
            },
          }}
        >
          <Button type="submit" variant="contained">
            Start loosing weight
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CalculatorForm;
