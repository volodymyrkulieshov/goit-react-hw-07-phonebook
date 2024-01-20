import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onRemoveContact = () => dispatch(deleteContact());
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contact} key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              className={css.deleteButton}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
// ------------------------------------
// import { useDispatch, useSelector } from 'react-redux';
// import css from './ContactList.module.css';
// import { deleteContact } from '../../redux/contactsSlice';
// import { getFilteredContacts } from '../../redux/selectors';
// const ContactList = () => {
//   const contacts = useSelector(getFilteredContacts);
//   const dispatch = useDispatch();
//   const onRemoveContact = () => dispatch(deleteContact());
//   return (
//     <ul className={css.contactList}>
//       {contacts.map(contact => (
//         <li className={css.contact} key={contact.id}>
//           {contact.name + ' : ' + contact.number}
//           {
//             <button
//               className={css.deleteButton}
//               type="button"
//               name="delete"
//               onClick={() => onRemoveContact(contact.id)}
//             >
//               delete
//             </button>
//           }
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
