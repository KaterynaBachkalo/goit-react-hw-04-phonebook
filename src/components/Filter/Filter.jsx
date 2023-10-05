import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
