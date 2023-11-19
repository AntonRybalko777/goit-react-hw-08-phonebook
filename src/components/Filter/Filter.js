import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/FiltersSlice';
import { Container } from './Filter.styled';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <TextField
        fullWidth
        size="small"
        id="filled-basic"
        label="Find contacts by name"
        variant="filled"
        onChange={evt => {
          dispatch(changeFilter(evt.target.value));
        }}
      />
    </Container>
  );
};
