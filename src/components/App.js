import { Component } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import styles from './App.module.css';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  contactsAddHandler = newContact => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };
  checkContactUnique = name => {
    const { contacts } = this.state;
    const isUnique = !!contacts.find(contact => contact.name === name);
    isUnique && alert('Contact is alredy in cotactList');
    return !isUnique;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  filterContactFilter = filter => this.setState({ filter });

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getFilteredContacts();
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm
          onAdd={this.contactsAddHandler}
          uniqueCheck={this.checkContactUnique}
        />
        <h2 className={styles.title}>Contact List</h2>
        <ContactFilter filter={filter} onChange={this.filterContactFilter} />
        <ContactList
          contacts={visibleContact}
          onRemove={this.handleRemoveContact}
        />
      </div>
    );
  }
}

export default App;
