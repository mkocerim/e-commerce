import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../hooks/useApi";
import { updateFullCart } from "../../../redux/cartSlice";

function CartTableItem(props) {
  const api = useApi();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);

  console.log("CART TABLE ITEM PROPS", props);
  console.log("CART TABLE ITEM CARTSTATE", cartState);



  const onQuantityChange = (event) => {
    console.log(">> ON QUANTITY CHANGE", event.target.value);

    const patchData = {
      quantity: parseInt(event.target.value),
    };

    const patchApi = api.create({
      baseURL: api.defaults.baseURL,
      headers: {
        "content-type": "application/merge-patch+json",
        accept: "application/json",
        authorization: api.defaults.headers.common["Authorization"],
      },
    });

    patchApi
      .patch(`shop/orders/${cartState.tokenValue}/items/${props.id}`, patchData)
      .then((response) => {
        console.log(">> PATCH RESPONSE", response);
      })
      .catch((err) => {
        console.log("PATCH ERR", err);
      });
  };

  const onDeleteBtnClick = (event) => {
    api
      .delete(`shop/orders/${cartState.tokenValue}/items/${props.id}`)
      .then((response) => {
        console.log("CART ITEM DELETE RESP", response);
      });
    api
      .get(`shop/orders/${cartState.tokenValue}`)

      .then((response) => {
        dispatch(updateFullCart(response.data));
      })
      .catch((err) => {
        console.log(">>", err);
      })

      .catch((err) => {
        console.log("CART ITEM DELETE ERR", err);
      });
  };
  return (
    <tr>
      <td>
        <a href="#">
          <img src="/images/cart_product_1.png" alt="" />
        </a>
        <span>
          <a href="#">{props.name}</a>
        </span>
      </td>
      <td>
        {props.unitPrice} &nbsp;{cartState.currencyCode}
      </td>
      <td>
        <div className="product-quantity">
          <div className="quantity">
            <input
              type="number"
              className="input-text qty text"
              step="1"
              min="1"
              max="10"
              name="quantity"
              defaultValue={props.quantity}
              title="Qty"
              size="4"
              pattern="[0-9]*"
              onChange={onQuantityChange}
            />
          </div>
        </div>
      </td>
      <td>
        {props.subtotal} &nbsp;{cartState.currencyCode}
      </td>
      <th scope="row">
        <button
          href="#"
          onClick={onDeleteBtnClick}
          className="btn-close btn-link"
        >
          <i className="fa fa-times-circle-o"></i>
        </button>
      </th>
    </tr>
  );
}

export default CartTableItem;
