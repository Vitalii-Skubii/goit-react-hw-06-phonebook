// import { Component } from 'react';
import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import styles from './App.module.css';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contacts-actions';

function App({ items, filter, onAdd, onRemove }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactForm
      // onAdd={this.contactsAddHandler}
      // uniqueCheck={this.checkContactUnique}
      />
      <h2 className={styles.title}>Contact List</h2>
      <ContactFilter />
      <ContactList
      // contacts={visibleContact}
      // onRemove={this.handleRemoveContact}
      />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    items: state.items,
    filter: state.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAdd: value => dispatch(contactsActions.contactsAdd(value)),
    onRemove: value => dispatch(contactsActions.contactsRemove(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
// class App extends Component {}
// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// contactsAddHandler = newContact => {
//   this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
// };
// checkContactUnique = name => {
//   const { contacts } = this.state;
//   const isUnique = !!contacts.find(contact => contact.name === name);
//   isUnique && alert('Contact is alredy in cotactList');
//   return !isUnique;
// };

// handleRemoveContact = id =>
//   this.setState(({ contacts }) => ({
//     contacts: contacts.filter(contact => contact.id !== id),
//   }));

// filterContactFilter = filter => this.setState({ filter });

// getFilteredContacts = () => {
//   const { contacts, filter } = this.state;
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

//   render() {
//     // const { filter } = this.state;
//     // const visibleContact = this.getFilteredContacts();
//     return (

//     );
//   }

// export default App;
