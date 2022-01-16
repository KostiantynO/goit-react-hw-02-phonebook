export const Filter = ({ onChange }) => (
  <label>
    Find contact by name
    <input type="text" name="filter" onChange={onChange} />
  </label>
);
