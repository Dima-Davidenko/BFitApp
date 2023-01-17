import {
  Box,
  Button,
  TextField,
  FormControl,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from '@mui/material';

export default function CalculatorForm() {
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
              <FormLabel id="radio-buttons-group-label" required>
                Blood type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
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
}
