import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, removeItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item, key) => {
        const { title, id } = item;
        return (
          <article key={key} className="grocery-item">
            <p className="title">{title}</p>

            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
