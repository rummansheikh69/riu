import Carousel from "./ui/carousel";
export function About() {
  const slideData = [
    {
      title: "CREATE WALLET",
      desc: "Download Phantom wallet and create a new wallet. or login to an existing wallet",
      src: "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753328207/raw_kfcrjy.webp",
    },
    {
      title: "BUY SOL",
      desc: "Purchase Solana (SOL) on your wallet",
      src: "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753328207/raw6_knd01e.webp",
    },
    {
      title: "CONNECT WALLET",
      desc: "Connect your Phantom wallet to Bonk.fun",
      src: "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753328207/raw3_yi7ada.webp",
    },
    {
      title: "SWAP $AXY",
      desc: "Swap the SOL you have in your wallet for $AXY",
      src: "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753328207/raw1_ezjqwi.webp",
    },
  ];
  return (
    <div id="howtobuy" className="relative overflow-hidden w-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
