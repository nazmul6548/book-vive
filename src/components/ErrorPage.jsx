import { Link } from "react-router-dom"


function ErrorPage() {
  return (
    <div className="flex flex-col text-center justify-center items-center min-h-screen">
        <div>
        <h1 className="text-4xl font-bold pb-5">Oops!</h1>
        <p className="font-bold pb-5">Sorry, an unexpected error has occurred.</p>
        </div>
        <Link to='/'><button className="bg-zinc-300 p-4 rounded-xl">Go Home</button></Link>
    </div>
  )
}

export default ErrorPage