import { useEffect, useState } from 'react';
import './App.css';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

function App() {

  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null
  })

  const [inputValue , setInputValue] = useState(null)

  const [account, setAccount] = useState(null)

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()

      if (provider) {
        setWeb3Api
          (
            {
              web3: new Web3(provider),
              provider
            }
          )
      } else {
        console.error("please install MetaMask")
      }
    }
    loadProvider()
  }, [])

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts()
      setAccount(accounts[0])

    }

    web3Api.web3 && getAccount()
  }, [web3Api.web3])


  return (
    <>
      <dev className="faucet-wrapper">
        <dev className="faucet">
          <span>
            <strong>Account :</strong>
            <h1>
              {account ? account :
                <button className="button is-warning is-light is-small" onClick={async () => {
                  web3Api.provider.request({method : "eth_requestAccounts"})
                }}>connect wallet</button>
              }
            </h1>
          </span>
          <dev className="balance-view is-size-2">
            Current Balance : <strong> 0 </strong> ETH
          </dev>
          <dev className="is-flex">
            <input onChange={(event) => {setInputValue(event.target.value)}} class="input is-link m-2" type="text" placeholder="input value"></input>
          </dev>
          <button 
            onClick={async () => 
            {
              web3Api.web3.eth.sendTransaction({
                from:  account,
                to: '0x7Bff6F916e007422519818Bb7896F9b3273Be786',
                value: inputValue * 10**18
                })
            }}
           className="button m-2 is-link is-light">Donate</button>
          <button className="button m-2 is-success is-light">Withdraw</button>
          {/* <p ></p> */}

        </dev>
      </dev>
    </>
  );
}

export default App;
