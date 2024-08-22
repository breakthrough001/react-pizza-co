import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import Button from '../../ui/Button';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button type="round" onClick={increaseItemQuantity(pizzaId)}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
