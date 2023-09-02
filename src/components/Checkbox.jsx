import { ToggleButton } from 'react-bootstrap';

const Checkbox = ({ className, id, checked, onChange }) => (
  <ToggleButton
    className={className}
    id={id}
    type="checkbox"
    checked={checked}
    value={checked ? 'on' : 'off'}
    variant={checked ? 'primary' : 'outline-secondary'}
    onChange={onChange}
  >
    {checked && <i className="bi bi-check-lg"></i>}
  </ToggleButton>
);

export default Checkbox;
