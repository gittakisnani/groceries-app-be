import Link from "next/link";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <div className="w-full h-[80%] flex flex-col items-center justify-center">
        <p className="text-3xl py-4"> OOPS! 404 | Page not found. </p>
        <Link href={'/'}><a className="text-slate-700 underline">Back to home</a></Link>
    </div>
  )
}

NotFound.getLayout = (page, products, categories) => (<Layout products={products} cats={categories}>{page}</Layout>)
export default NotFound