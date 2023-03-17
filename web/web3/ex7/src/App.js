import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { loadContract } from "./utils/load-contract";

function App() {

  const [web3Api, setWeb3Api] = useState({
    provider: null,
    isProviderLoaded: false,
    web3: null,
    contract: null
  })

  const [balance, setBalance] = useState(null)

  const [account, setAccount] = useState(null)

  const [shouldReload, reload] = useState(false)

  const canConnectToContract =account && web3Api.contract

  const reloadEffect = useCallback(() => reload(!shouldReload), [shouldReload])

  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api
      const balance = await web3.eth.getBalance(contract.address)

      setBalance(web3.utils.fromWei(balance, "ether"))
    }

    web3Api.contract && loadBalance()
  }, [web3Api, shouldReload])

  useEffect(() => {
    const loadProvider = async () => {

      const provider = await detectEthereumProvider()


      const setAccountListener = provider => {
        provider.on("accountsChanged", account => window.location.reload())
        provider.on("chainChanged", account => window.location.reload())

      }

      if (provider) {
        const contract = await loadContract("Faucet", provider)
        setAccountListener(provider);
        setWeb3Api
          (
            {
              web3: new Web3(provider),
              provider,
              contract,
              isProviderLoaded: true
            }
          )
      } else {
        
        setWeb3Api((api) =>
        {
          return{
            ...api,
            isProviderLoaded : true
          }
        })
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

  const addFunds = useCallback(async () => {
    const { contract } = web3Api
    await contract.addFunds({
      from: account,
      value: "1000000000000000000"
    })

    reloadEffect()
  }, [web3Api, account, reloadEffect])

  const WithdrawFunds = async () => {
    const { contract } = web3Api
    const withdrawAmount = "1000000000000000000"

    await contract.withdraw(withdrawAmount, {
      from: account
    })

    reloadEffect()
  }

  // console.log(account)
  return (
    <>
      <dev className="faucet-wrapper hero is-success is-fullheight">
        <dev className="faucet">
          { web3Api.isProviderLoaded ?
            <span className="account--container hero is-info is-primary is-bold">
              <strong>Account :</strong>
              <h1>
                {account ? 
                  <h1>{account}</h1>
                 :
                  !web3Api.provider ?
                    <>
                      <dev className="nofitMetaMask">
                        Wallet is not detected ! {` `}
                        <av rel="noreferrer" target="_blank" href="https://docs.metamask.io">
                          install MetaMask
                        </av>

                      </dev>
                    </> :
                    <button className="button is-warning ml-2 is-light is-small" onClick={async () => {
                      web3Api.provider.request({ method: "eth_requestAccounts" })
                    }}>connect wallet</button>
                }
              </h1>
            </span> :
            <span>Looking for Web3...</span>
          }
          <dev className="balance-view is-size-2">
            Current Balance : <strong> {balance} </strong> ETH
          </dev>
          {
            !canConnectToContract &&
            <i className="is-block">
              Connect to Ganache
            </i>
          }
          <button disabled={!canConnectToContract} onClick={() => { addFunds() }} className="button m-2 is-link is-light">Donate 1 ETH</button>
          <button disabled={!canConnectToContract} onClick={() => { WithdrawFunds() }} className="button m-2 is-success is-light">Withdraw</button>

        </dev>

      <h1 className="dev" >Developer Soheil Vafaei</h1>
      </dev>
    </>
  );
}

export default App;
