import { useId } from 'react';
import PropTypes from 'prop-types';

import { Label, Input } from './FilterStyled';



export const Filter = ({ value, onChange }) => {
  const filterId = useId();
  return (
    <Label>
      Find contacts by name
      <Input
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        required
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};