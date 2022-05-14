import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Apni_Dukaan - Launch your Online Dukaan </title>
      </Head>

      <div className="fixed bg-white z-50 h-20 w-full border-b flex justify-around items-center">
        <div className="flex items-center">
          <Image src='/logo.svg' height={50} width={50} alt="" objectFit="contain" />
          <h1 className="font-bold mt-3 text-xl hidden lg:block">Apni Dukaan</h1>
        </div>
        <Link href="/login" passHref>
          <button className="btn lg:btn-wide">Start For Free</button>
        </Link>
      </div>

      <div className="w-full lg:w-9/12 mx-auto flex min-h-screen justify-center items-center flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-6">
          <h1 className="text-5xl font-bold max-w-lg">Start
            selling
            online.</h1>
          <p className="my-4 max-w-lg">Dukaan is the easiest way to start, run and grow your online business.</p>
          <Link href="/login" passHref>
            <button className="btn btn-wide">Start For Free</button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2"></div>
      </div>

      <div className="bg-gray-100 flex justify-center items-center">
        <div className="w-full lg:w-9/12 my-24 p-6">
          <h1 className="text-3xl font-bold">The easiest way to sell anything online.</h1>
          <p className="text-base my-2">Start your brand new eCommerce store and impress your customers, with Apni Dukaan!</p>
          <div className="mt-8 flex lg:flex-row flex-col gap-4">
            <div className="bg-white shadow-md rounded-lg p-3">
              <img src={"https://mydukaan.io/_next/static/images/food-631d92f5be77ef7b69d62ebffd6a1ffc.png"} height={100} width={300} className="rounded-lg" />
              <h1 className="mt-2 font-bold px-2">Start Selling Food</h1>
            </div>
            <div className="bg-white shadow-md rounded-lg p-3">
              <img src="https://mydukaan.io/_next/static/images/laptop-c4f2113653f097c4e9953af978e21088.png" height={100} width={300} />
              <h1 className="mt-2 font-bold px-2">Sell Laptop Online</h1>
            </div>
            <div className="bg-white shadow-md rounded-lg p-3">
              <img src={"https://mydukaan.io/_next/static/images/books-e734120e2ee4c9e894ab760e5e283eaa.png"} height={100} width={300} className="rounded-lg" />
              <h1 className="mt-2 font-bold px-2">Start Selling Books</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="min-h-screen w-full lg:w-8/12 my-24 p-6">
          <h1 className="text-3xl font-bold">Your dream business just three steps away!</h1>
          <div className="flex lg:flex-row flex-col mt-16 items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <img src="https://mydukaan.io/images/create-store-new.svg" width={400} />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="font-semibold">STEP 1 </h3>
              <h2 className="font-bold mb-4">Name your store</h2>
              <p>The nights you’ve lost, the fights you’ve fought... to find the perfect name
                <br /> Now is the time to make it happen
                <br />Name your store, choose a category and say a prayer.</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse mt-16 items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <h3 className="font-semibold">STEP 2 </h3>
              <h2 className="font-bold mb-4">Add your products</h2>
              <p>Bakery or boutique, art or apparel...now it’s time to sell.
                <br /> Let the world know what you have to offer.
                <br />Add your products, set the price and wish you good luck!</p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="https://mydukaan.io/images/product-listing.svg" width={400} />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col mt-16 items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <img src="https://mydukaan.io/images/start-selling.svg" width={400} />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="font-semibold">STEP 3 </h3>
              <h2 className="font-bold mb-4">Start selling</h2>
              <p>The moment of truth. The leap of faith.
                <br /> This is where it all begins. Your store is ready for the world.
                <br />Start sharing and taking orders. Kaching!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-9/12 mx-auto">
        <Footer />
      </div>
    </div>
  )
}