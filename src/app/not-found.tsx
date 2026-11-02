import Link from 'next/link'
 function NotFound() {
  return (
    <div className='flex   flex-col items-center justify-center h-[20vw] gap-3.5'> 
      <h2 className='font-bold text-2xl text-[#5f059f]'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-[#5f059f]'><button className="btn btn-soft text-[#5f059f]">Back to Home</button></Link>
    </div>
  )
}

export default NotFound