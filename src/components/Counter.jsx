import React, { useState, innerHTML, querySelector } from 'react'

const Counter = () => {

    const [count, setcount] = useState(0)



    if (count < 0) {
        setcount(0)
    }
    

    return (
        <>
            <div>
                <div className='bg-slate-700 w-[500px] h-[100px] mt-36 m-auto hover:rounded-xl'>
                    <h1 className='text-white text-center text-5xl pt-5'>{count}</h1>
                </div>
                <div className='mt-10 flex gap-7 justify-center'>
                    <div>
                        <button onClick={() => setcount((count) => count - 1)} className='bg-zinc-600 text-white rounded-xl px-8 py-3'>DECREMENT</button>
                    </div>
                    <div>
                        <button onClick={() => setcount((count) => count + 1)} className='bg-gray-500 text-white rounded-xl px-8 py-3'>INCREMENT</button>
                    </div>
                </div>
                <h1 className='text-white text-center text-3xl mt-5'>{count % 2 == 0 ? count + " juft" : count + " toq"}</h1>
                <div className='text-center mt-[200px]'>
                        <button onClick={() => setcount(0)} className='bg-red-950 text-white px-8 py-3 rounded-xl items-end'>Restart</button>
                </div>
            </div>

        </>
    )
}


export default Counter