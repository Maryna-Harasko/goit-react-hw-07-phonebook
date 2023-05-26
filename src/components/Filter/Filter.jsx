import React from "react";
import { FilterContainer, FilterLabel, FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from '../../store/selector';
import { filterContact } from "store/filter/reducer";

export const Filter = () => {
  const dataFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  return(
    <FilterContainer>
      <FilterLabel>Find contacts by name
        <FilterInput 
          type="text" 
          name="name" 
          value={dataFilter} 
          onChange={event=>dispatch(filterContact(event.currentTarget.value))} 
        />
      </FilterLabel>
   </FilterContainer>
  )
}
