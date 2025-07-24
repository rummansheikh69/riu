import { MdArrowOutward } from "react-icons/md";
import { About } from "./components/About";
import { RiUserCommunityLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  return (
    <div className=" bg-main text-white">
      {/* navbar  */}
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        className=" fixed z-50 w-full"
      >
        <div className=" px-5 md:px-20 w-full ">
          <div className=" px-5 py-2 rounded-2xl w-full bg-subMain drop-shadow-2xl mt-5 flex items-center justify-between">
            <h1 className=" hero text-4xl text-white md:text-5xl">$RIU</h1>
            <div className=" hidden md:flex items-center gap-5">
              <a href="/" className=" heading">
                HOME
              </a>
              <a href="#about" className=" heading">
                ABOUT
              </a>
              <a href="#howtobuy" className=" heading">
                HOW TO BUY
              </a>
            </div>
            <a
              href="https://letsbonk.fun/token/2DToEdM71ZC8ymitrXMgLaracPdxkTu6WnQBQLiubonk"
              className=" relative w-32 md:w-40 h-10 md:h-12 bg-button rounded-md overflow-hidden border-4 border-black flex items-center justify-center"
            >
              <div className=" size-5 rounded-full bg-black absolute -top-2 -right-2" />
              <div className=" size-5 rounded-full bg-black absolute -top-2 -left-2" />
              <div className=" size-5 rounded-full bg-black absolute -bottom-2 -left-2" />
              <div className=" size-5 rounded-full bg-black absolute -bottom-2 -right-2" />
              <p className=" text-black heading">BUY NOW</p>
            </a>
          </div>
        </div>
      </motion.div>
      {/* navbar end */}

      {/* hero  */}
      <div className=" relative h-screen bg-[url('https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753334247/download_yx2jeq.webp')] bg-center ">
        <div className=" absolute bottom-0 w-full h-32 bg-gradient-to-b to-subMain/90 from-transparent"></div>
        <div className=" flex flex-col w-full h-full items-center justify-end">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            className=" z-40 w-80 border border-zinc-400 md:w-1/2 py-2 px-4 bg-white/50 rounded-xl md:mb-20 flex items-center justify-between"
          >
            <p className=" heading text-black truncate">
              2DToEdM71ZC8ymitrXMgLaracPdxkTu6WnQBQLiubonk
            </p>
            <a
              target="_blank"
              href="https://letsbonk.fun/token/2DToEdM71ZC8ymitrXMgLaracPdxkTu6WnQBQLiubonk"
              className=" p-2 border border-zinc-400 rounded-md bg-subMain"
            >
              <MdArrowOutward />
            </a>
          </motion.div>
        </div>
      </div>
      {/* hero end */}

      {/* about  */}
      <div id="about" className=" min-h-screen relative">
        <div className=" w-full h-32 bg-gradient-to-t to-subMain/90 from-transparent"></div>
        <div className=" px-5 md:px-20 mt-10 flex flex-col md:flex-row items-center  gap-5">
          <div className=" w-full md:w-1/2 ">
            <h1 className=" heading text-3xl text-center md:text-5xl text-red-600">
              ABOUT RIU
            </h1>
            <p className=" mt-5 lawra text-zinc-200 leading-7 text-lg">
              RIU began as a mischievous street cat wrapped in meme chaos and
              arcane energy. By day, he’s the internet’s favorite cursed feline
              — but by night, he joins his shadowy team to perform black magic
              on the Solana blockchain, summoning gains, flipping tokens, and
              hexing liquidity. Don’t be fooled by the whiskers — RIU isn’t just
              a meme. He’s a dark ritual in motion, and the spell has just
              begun. Welcome to RIU: the black magic degenerate of Solana. 🐾🖤
            </p>
            <div className=" flex items-center gap-5 mt-5">
              <a
                target="_blank"
                href="https://twitter.com/riusol"
                className=" px-2 h-8 flex items-center justify-center border border-zinc-400 rounded-md bg-button"
              >
                <FaTwitter className=" text-black" />
              </a>
              <a
                target="_blank"
                href="https://discord.com/invite/riusol"
                className=" px-2 h-8 border border-zinc-400 rounded-md bg-button flex items-center gap-2"
              >
                <RiUserCommunityLine className=" text-black" />{" "}
                <span className=" text-black">Community</span>
              </a>
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <About />
          </div>
        </div>
      </div>
      {/* about end */}

      {/* how to buy  */}
      <div className=" relative min-h-screen">
        <div className=" hidden md:block  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <img
            src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753353350/d_ty8fu7.png"
            alt=""
            className=" w-full h-full object-contain"
          />
        </div>

        <h1 className="  hero text-3xl text-center md:text-5xl block md:hidden my-10">
          How To Buy
        </h1>
        <div className=" px-5 md:px-44 md:grid grid-cols-2 gap-10">
          <div className="  mt-5 md:mt-20 py-6 px-5 md:px-14 md:h-40 bg-gradient-to-t to-subMain rounded-md from-transparent">
            <h1 className=" heading text-3xl text-center">Create A Wallet</h1>
            <p className=" mt-5 lawra text-zinc-200 text-center">
              Download Phantom Or Your Wallet Of Choice From The App Store Or
              Google Play Store For Free. Desktop users, Download The Google
              Chrome Extension By Going To Phantom App.
            </p>
          </div>
          <div className="  mt-5 md:mt-20 py-6 px-5 md:px-14 md:h-40 bg-gradient-to-t to-subMain rounded-md from-transparent">
            <h1 className=" heading text-3xl text-center">Go To Bonk.fun</h1>
            <p className=" mt-5 lawra text-zinc-200 text-center">
              Connect To Bonk. Go Bonk.fun In Google Chrome Or Any Browser
              Inside Your Phone. Connect Your Wallet. When Phantom Prompts You
              For A Wallet Signature, Sign.
            </p>
          </div>
          <div className="  mt-5 md:mt-20 py-6 px-5 md:px-14 md:h-40 bg-gradient-to-t to-subMain rounded-md from-transparent">
            <h1 className=" heading text-3xl text-center">Get Some SOL</h1>
            <p className=" mt-5 lawra text-zinc-200 text-center">
              Have SOL In Your Wallet To Switch To $RIU If You Dont Have Any
              SOL, You Can Buy SOL From An Exchange Or Cross Chain Swap And Send
              It To Your Wallet.
            </p>
          </div>
          <div className="  mt-5 md:mt-20 py-6 px-5 md:px-14 md:h-40 bg-gradient-to-t to-subMain rounded-md from-transparent">
            <h1 className=" heading text-3xl text-center">SWAP</h1>
            <p className=" mt-5 lawra text-zinc-200 text-center">
              Switch SOL For $RIU.
            </p>
          </div>
        </div>
      </div>
      {/* how to buy end */}

      {/* footer  */}
      <div className=" relative h-screen  flex md:items-center px-5 md:px-24">
        <div className=" absolute top-1/2 -translate-y-1/2 bottom-0 md:right-0">
          <div className="">
            <img
              src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753328221/s_fetimk.png"
              className=" w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className=" w-full md:w-1/2 md:mt-0 mt-10 absolute md:static bottom-5 ">
          <h1 className=" hero text-3xl md:text-5xl">
            Join The Biggest Memecoin Launchpool You Have Ever Seen
          </h1>
        </div>
      </div>
      {/* footer end */}
    </div>
  );
}

export default App;
