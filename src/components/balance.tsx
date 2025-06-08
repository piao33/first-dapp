import { useAccount, useBalance } from 'wagmi'

export function Balance() {
    const { address } = useAccount()
    const { data: ethBalance } = useBalance({ address })
    // const { data: usdcBalance } = useBalance({ address })

    return (
        <div>
            <h1>Balance</h1>
            <p>ETH Balance: {ethBalance?.value  ? (Number(ethBalance.value) / 10 ** ethBalance.decimals).toLocaleString() : 0}</p>
            {/* <p>USDC Balance: {usdcBalance?.value ? (Number(usdcBalance.value) / 10 ** usdcBalance.decimals).toLocaleString() : 0}</p> */}
        </div>
    )

}