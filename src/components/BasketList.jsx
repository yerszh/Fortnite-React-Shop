import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {
        order =[], 
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity
    } = props;
    
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
      <ul class="collection basket-list ">
        <li className="collection-item active blue-grey lighten-1">Basket</li>
        {
            order.length ? order.map(item => (
                <BasketItem 
                    key={item.id} 
                    {...item} 
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}

                />
            )) : <li className="collection-item ">Empty</li>
        }
        <li className="collection-item active blue-grey lighten-1">
            Total: {totalPrice} KZT 
        </li>
        <li className="collection-item active blue-grey lighten-1">
            <button className="btn btn-small white" style={{color: 'rgb(0, 0, 0)'}}>Order</button>
        </li>
        <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
    </ul>
    )
}

export {BasketList}