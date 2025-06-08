import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

export function SendEth() {
    const { sendTransaction } = useSendTransaction()

    const handleSend = async () => {
        sendTransaction({
            to: '0x331Fc151E940EDE4781b0CfaD436A4Ca14541111',
            value: parseEther('0.0001'),
        })
    }

    return (
        <div>
            <button onClick={handleSend}>Send ETH</button>
        </div>
    )
}