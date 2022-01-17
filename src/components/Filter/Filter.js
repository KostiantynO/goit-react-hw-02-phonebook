import { PropTypes, Container, Button } from 'common';

export const Filter = ({ filter, onChange, onClearFilter }) => (
  <Container>
    <label>
      Find contact by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>

    <Button display="if" onClick={onClearFilter}>
      Clear filter
    </Button>
  </Container>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};
