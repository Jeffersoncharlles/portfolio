import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function QrCode (){

    return (
        <>
        <Head>
            <title>QrCode | Jefferson Charlles</title>
            <meta name="description" content="QrCode Jefferson Charlles" />
        </Head>
            <main className="w-screen h-screen flex justify-center items-center mx-auto ">
              <section className='mx-4 border w-[480px] h-[640px] flex justify-center items-center flex-col'>
                <div className=' mb-8'>
                    <Link className='flex flex-col items-center' href="/">
                        <img 
                            src="https://github.com/jeffersoncharlles.png" 
                            alt="jefferson charlles" 
                            className='w-20 h-20  rounded-full'
                        />
                        <span className='mt-4 text-sm text-zinc-500'>Jefferson Charlles</span>
                    </Link>
                </div>
                <div className='flex flex-col border p-10 gap-4'>
                    <a className='hover:text-blue-300/90 text-3xl cursor-pointer px-8 py-2 border border-zinc-100/10 transition-colors' href="https://github.com/Jeffersoncharlles">GitHub</a>
                    <a className='hover:text-blue-300/90 text-3xl cursor-pointer px-8 py-2 border border-zinc-100/10 transition-colors' href="https://www.linkedin.com/in/jeffersoncharlles">Linkedin</a>
                    <a className='hover:text-blue-300/90 text-3xl cursor-pointer px-8 py-2 border border-zinc-100/10 transition-colors' href="https://www.instagram.com/jeffersoncharllesoficial/">Instagram</a>
                    <a className='hover:text-blue-300/90 text-3xl cursor-pointer px-8 py-2 border border-zinc-100/10 transition-colors' href="https://www.jefferdeveloper.com/">Meu Portfolio!</a>
                </div>
              </section>
            </main>
        </>
    );
}

