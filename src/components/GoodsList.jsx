import {GoodsItem} from './GoodsItem'

function GoodsList(props) {
    const { goods = [], addToBasket= Function.prototype } = props;

    if (!goods.length) {
        return <h3>Здесь ничего нет</h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
        ))}
    </div>
}

export { GoodsList };