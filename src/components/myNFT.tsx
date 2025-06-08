import { useAccount, useWriteContract, useReadContract } from 'wagmi'
import MyNFTABI from '../assets/js/MyNFTABI.json' // 导出 Remix 中的 ABI

export function MintButton() {
    const { address } = useAccount()
    const { writeContract } = useWriteContract()
    console.table(MyNFTABI)
    const handleMint = () => {
        writeContract({
            address: '0xCDfbA56BeAEF51469cE9E18061cc1f29DD46c7D6',
            abi: MyNFTABI,
            functionName: 'mintNFT',
            args: [
                address,
                "https://lime-nearby-firefly-908.mypinata.cloud/ipfs/bafkreicpwvrd6fd43x2febwhig7troffzgxxs62llcbzywgsdwtowy7shu" // 你的元数据 URI
            ]
        })
    }

    return (
        <p>
            <button onClick={handleMint}>Mint NFT</button>
        </p>
    )
}

export function MyNFTs() {
    const { address } = useAccount()
    const { data: balance } = useReadContract({
      address: '0xCDfbA56BeAEF51469cE9E18061cc1f29DD46c7D6',
      abi: MyNFTABI,
      functionName: 'balanceOf',
      args: [address!]
    })
  
    return <div>You own {Number(balance)} NFTs</div>
  }