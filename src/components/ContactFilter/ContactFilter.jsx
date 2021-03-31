import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Search contact"
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
