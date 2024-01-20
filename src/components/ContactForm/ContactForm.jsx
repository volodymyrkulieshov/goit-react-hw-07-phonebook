import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  // Обработка изменения значений полей формы.
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="example">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={css.label} htmlFor="example">
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// -----------------------------
// import { useState } from 'react';
// import css from './ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFilteredContacts } from '../../redux/selectors';
// import { addContact } from '../../redux/contactsSlice';

// const ContactForm = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const contacts = useSelector(getFilteredContacts);
//   const dispatch = useDispatch();

//   const handleChange = evt => {
//     const { name, value } = evt.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     const isInContacts = contacts.some(
//       contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
//     );
//     if (isInContacts) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     dispatch(addContact({ name, number }));

//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={css.contactForm} onSubmit={handleSubmit}>
//       <label className={css.label} htmlFor="example">
//         Name
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           required
//         />
//       </label>

//       <label className={css.label} htmlFor="example">
//         Number
//         <input
//           className={css.input}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           required
//         />
//       </label>

//       <button className={css.button} type="submit">
//         Add contact{' '}
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
