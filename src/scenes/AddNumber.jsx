import { useState } from 'react'

const AddNumber = () => {
  const [number, setNumber] = useState(false)
  const [isStatus, setIsStatus] = useState(true)

  const status = () => {
    setIsStatus(!isStatus)

    // setTimeout(() => {
    //   setIsStatus((state) => !state)
    // }, 1000);
  }

  return (
    <div className="flex flex-wrap gap-6 p-4 max-w-6xl mx-auto">
      <input disabled value={number} className="text-black w-full rounded-md p-4 text-right bg-white"/>
      <button className="p-4 bg-red px-4 rounded-md hover:bg-yellow transition duration-500"
      onClick={() => setNumber(!number)}>
        Add
      </button>

      {/* {number !== 0 ? <button className="bg-red px-4 rounded-md hover:bg-yellow transition duration-500" onClick={() => setNumber((prev) => prev-1)}>Min</button> : "" } */}

      <button 
        disabled={(number < 1)}
        className={`${number === 0 ? "cursor-not-allowed" : "cursor-pointer"} p-4 bg-red px-4 rounded-md hover:bg-yellow transition duration-500`}
        onClick={() => setNumber((prev) => prev-1)}>
        Min
      </button>


      <h1 className={`w-full bg-yellow ${isStatus === false ? "bg-green-500" : null} p-6 rounded-md text-4xl transition duration-200 ease-linear`}>
        Status {isStatus !== true ? "is ON" : "is OFF"}
      </h1>
      
      <button className='bg-red rounded-md p-4 text-right' onClick={status}>
        Switch!
      </button>
    </div>
  )
}

export default AddNumber