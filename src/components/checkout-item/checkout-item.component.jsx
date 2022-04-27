import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const deleteHandler = () => {};

  return (
    <div>
      <h1>{item.name}</h1> <span>{item.price}</span>
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default CheckoutItem;
