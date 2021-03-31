import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
const ContactItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.listItem} key={id}>
      {name}: {number}{' '}
      <button className={styles.btn} onClick={() => onRemove(id)}>
        Delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  onRemove: PropTypes.func,
};

export default ContactList;
