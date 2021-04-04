import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
const Filter = ({ filter, onChange }) => (
  <input
    className={styles.input}
    type="text"
    name="filter"
    value={filter}
    // onChange={({ target }) => onChange(target.value)}
    onChange={onChange}
    placeholder="Search contact"
  />
);

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
