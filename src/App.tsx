import { useAccount, useConnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

import './App.css'
import { Balance } from './components/balance'
import { SendEth } from './components/sendEth'
import { Swap } from './components/swap'
import { MintButton, MyNFTs } from './components/myNFT'

function App() {

    const { address } = useAccount()
    const { connect } = useConnect()

    return (
        <div>
            {address ? (
                <p>Connected: {address}</p>
            ) : (
                <button onClick={() => connect({ connector: injected() })}>Connect Wallet</button>
            )}
            {address && (
                <>
                    <Balance />
                    <SendEth />
                    <Swap />
                    <MintButton />
                    <MyNFTs />
                </>
            )}
        </div>
    )
}

export default App
