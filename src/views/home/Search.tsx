import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useDispatch, useSelector, useStore } from 'react-redux';
import CustomStore from '../../redux/CustomStore';
import { useEffect } from 'react';
import { productActions } from './redux/actions/productsAction';
import { rootSaga } from './redux/sagas/rootSaga';
import { selector } from './redux/sagas/searchSaga';

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const store = useStore() as CustomStore;
  useEffect(function registerSaga() {
    const task = store.run(rootSaga);
    return () => {
      if (task) {
        task.cancel();
      }
    }
  }, [store]);
  const searchInputValue: string = useSelector(selector) || '';
  const actions = productActions(dispatch);
  const onChangeText = actions.onChangeTypeSearch;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(event.target.value);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' position="static">
        <Toolbar>
          <TextField
            value={searchInputValue}
            onChange={onChange}
            placeholder="Busca..."
            fullWidth
            hiddenLabel
            focused
            sx={{
              '& .MuiInput-underline:after': {
                borderBottomColor: '#E4E4E5',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E4E4E5',
                },
                '&:hover fieldset': {
                  borderColor: '#E4E4E5',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E4E4E5',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
