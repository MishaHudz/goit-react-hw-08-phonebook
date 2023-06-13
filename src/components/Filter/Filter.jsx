import { changeFilter } from 'store/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styles';
import { useDispatch, useSelector } from 'react-redux';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          onChange={evt => dispatch(changeFilter(evt.target.value))}
          value={filter}
        />
      </FilterLabel>
    </>
  );
}
