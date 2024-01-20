import { getContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subTitle} e>
        Contacts
      </h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <span>Your phonebook is empty. Add first contact!</span>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
