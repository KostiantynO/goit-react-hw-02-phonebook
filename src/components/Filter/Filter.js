import { PropTypes, Container, Label } from 'common';
import { ClearFilterButton } from 'common/components/Button';

export const Filter = ({ value, onChange, onClearFilter }) => (
  <Container>
    <Label label="Find contact by name">
      <input type="text" name="filter" value={value} onChange={onChange} />
    </Label>

    <ClearFilterButton display="if" onClick={onClearFilter}>
      Clear filter
    </ClearFilterButton>
  </Container>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};
