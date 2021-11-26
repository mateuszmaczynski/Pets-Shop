import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';
import {addToCart, removeFromCart} from '../actions/cart';
import {Message} from '../components';
import {ethers} from "ethers";
import Shop from '../artifacts/contracts/Shop.sol/Shop.json'
import axios from 'axios';

const CartPage = () => {
  const [ethValue, setEthValue] = useState(0);
  const dispatch = useDispatch();
  const {state} = useLocation();
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

  useEffect(() => {
    getEthValue();
  }, []);

  const getEthValue = () => {
    axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot')
      .then(({data}) => {
        setEthValue(data.data.amount)
      })
      .catch((err) => console.error('error =', err))
  };

  const countItems = () => {
    let number = cartItems.reduce((acc, currentValue) => acc + currentValue.quantity, 0)
    return number > 1 ? number + ' items' : number ? number + ' items' : null;
  }

  const countValue = () => {
    const valueUSD = cartItems.reduce((acc, currentValue) => acc + currentValue.price * currentValue.quantity, 0)
    const value = valueUSD / Number(ethValue);
    return value.toFixed(10);
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const buildOrderObject = () => {
    let items = [];
    //Build tuple "AA" - product's code, 1 - count of current product
    cartItems.map(({code, quantity}) => items.push([code, quantity]));
    return items;
  };

  async function connect() {
    await window.ethereum.request({method: 'eth_requestAccounts'});
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(0)
    const contract = new ethers.Contract("0x7628f5daBB0234e8e6a9ebC0968e4715F3b9b501", Shop.abi, signer);
    const listItems = buildOrderObject();
    const totalValue = countValue();
    const address = await signer.getAddress();
    contract.buy(listItems, {
      from: address.toString(),
      value: ethers.utils.parseEther(totalValue)
    })
      .then(() => {
        alert('transaction success')
      })
      .catch((err) => {
        console.log('error', err.message)
      })
  }
  return (
    <>
      <div className='flex-row-top'>
        <div className='flex-col'>
          <div className='text-large'>
            <div className='medium-right-low'>
              Shopping Cart
            </div>
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
                            onChange={(e) => (
                              dispatch(
                                addToCart({
                                  code: item?.code,
                                  name: item?.name,
                                  image: item?.image,
                                  price: item?.price,
                                  countInStock: item?.countInStock,
                                  id: item?.id
                                }, item.id, Number(e.target.value))
                              ))}>
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
                            onClick={() => removeFromCartHandler(item.id)}>
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
              <div className='text-medium'>Subtotal {countItems()} {ethValue && ` : ${countValue()} ETH`}</div>
              <button className='button button__wide margin-top-medium' onClick={() => connect()}>
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
