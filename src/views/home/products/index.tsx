
import {
    Text,
    View,
  } from 'react-native';
import { useDispatch, useSelector, useStore } from 'react-redux';
import SearchInput from './SearchInput';
import reducer from './redux/reducers/typeSearch';
import CustomStore from '../../../redux/CustomStore';
import { useEffect } from 'react';
import { rootSaga } from './redux/sagas/SearchSaga';
import { GlobalState } from '../../../redux/Reducer';

type localState = {
  searchInputValue: string;
}

function Products() {
  const dispatch = useDispatch();
  const store = useStore() as CustomStore;

  useEffect(function registerSaga() {
    const task = store.run(rootSaga);
    return () => {
      if (task) {
        task.cancel();
      }
    }
  });
  
  const count: number = useSelector((state: GlobalState) => (state.count) );
  const searchInputValue = useSelector((state: localState) => (state.searchInputValue) );
  const onChangeText = (payload: string) => dispatch({ 
    type: 'type-search',
    payload,
    meta: {
      reducer,
    }
  });
  return (
      <View>
        <SearchInput 
          value={searchInputValue} 
          onChangeText={onChangeText}         
        />
        <Text>Home Screen {count}</Text>
        <Text>Valor do input {searchInputValue}</Text>
      </View>
  )

}
export default Products;