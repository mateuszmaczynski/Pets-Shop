import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {addToCart, removeFromCart} from '../actions/cart';
import {Message} from '../components';
import { ethers } from "ethers";
import Shop from '../artifacts/contracts/Shop.sol/Shop.json'

const CartPage = (props) => {
  const dispatch = useDispatch();
  const {state} = useLocation();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart;
  const productId = state?.productData?.id;
  let quantity = state?.productData?.quantity || 1;
  const productData = state?.productData;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productData, productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  async function connect () {

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner(0)
    const contract = new ethers.Contract("0x7628f5daBB0234e8e6a9ebC0968e4715F3b9b501", Shop.abi, signer);

    //Tuple "AA" - product's code, 1 - count of current product
    const tup = [["AA", 1], ["GG", 1]]; // <- TODO Connect with the cart

    const address = await signer.getAddress();
    contract.buy(tup, {from: address.toString(), value: ethers.utils.parseEther("0.00001")}).then(function(result){
      alert('transaction success')})
	.catch(function(e){
   //Error handling
      console.log('error')
   });
  };

  const checkoutHandler = () => {
    navigate(`/shipping`);
  };

  const countItems = () => {
    const number = cartItems.reduce((acc, currentValue) => acc + currentValue.quantity, 0)
    return number > 1 ? number + ' items' : number + ' item'
  }

  const countValue = () => {
    const value = cartItems.reduce((acc, currentValue) => acc + currentValue.price*currentValue.quantity, 0)
    return value.toFixed(2) + '$'
  }
  return (
    <>
      <div className='flex-row-top'>
        <div className='flex-col'>
          <div className='text-large'>
            Shopping Cart
            {cartItems.length == 0 ? (
              <Message>
                Cart is empty. <Link to='/'>Go Shopping</Link>
              </Message>
            ) : (
              <div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <div className='flex-row-between row-low text-small margin-medium border-bottom'>
                        <div className='flex-item-center col-very-narrow'>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='image-small'
                          />
                        </div>
                        <div className='flex-item-center col-wide'>
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </div>
                        <div className='flex-item-center col-very-narrow'>
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                addToCart({
                                  name: item?.name,
                                  image: item?.image,
                                  price: item?.price,
                                  countInStock: item?.countInStock,
                                  id: item?.id
                                }, item.id, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className='flex-item-center col-very-narrow'>
                          ${item.price}
                        </div>
                        <div className='col-very-narrow'>
                          <button
                            className='button__default'
                            type='button'
                            onClick={() => removeFromCartHandler(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex-row-end margin-bottom-medium'>
        <div className='flex-col-2-no-grow'>
          <div className='card-box'>
            <div className='flex-row-between'>
              <div className='text-medium'>Subtotal {countItems()}: {countValue()}</div>
              <button className='button button__wide margin-top-medium'
onClick={() => connect()}
>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default CartPage;
