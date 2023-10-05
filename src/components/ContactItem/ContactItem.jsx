import css from "./ContactItem.module.css"

export const ContactItem = ({id, name, number, deleteContact}) => {
    return (
        <li className={css.item}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
    )
}