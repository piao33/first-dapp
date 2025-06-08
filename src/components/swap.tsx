import { useReadContract, useWriteContract } from 'wagmi'
import { UNISWAP_ROUTER_ABI } from "./abi.ts"

export function Swap() {
    const { data: storedValue, refetch  } = useReadContract({
        address: '0x21f6323bb3342e073F05AD91262801dE44be44Ee',
        abi: [UNISWAP_ROUTER_ABI[0]],
        functionName: 'get',
    })

    const { writeContract } = useWriteContract()

    const handleSet = (value: number) => {
        writeContract({
            address: '0x21f6323bb3342e073F05AD91262801dE44be44Ee',
            abi: [UNISWAP_ROUTER_ABI[1]],
            functionName: 'set',
            args: [value]
        })
    }

    return (
        <div>
            <p>
                <button onClick={() => refetch()}>获取交易：</button>
                {storedValue ? Number(storedValue).toLocaleString() : 0}
            </p>
            <button onClick={() => handleSet(12321)}>设置123个gas</button>
        </div>
    )
}