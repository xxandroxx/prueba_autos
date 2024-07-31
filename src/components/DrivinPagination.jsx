import React from 'react'

const DrivinPagination = ({ setPage, page }) => {

    const handleNextPage = () => {
        setPage(page + 1);
        console.log(page);
    }

    const handlePrevPage = () => {
        if (page === 1) return;
        setPage(page - 1);
    }

    return (
        <div className='flex items-center justify-between w-1/4 mx-auto my-5'>
            <button disabled={page === 1} onClick={handlePrevPage} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} `}>
                Anterior
            </button>
            <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform">
                Siguiente
            </button>
        </div>
    )
}

export default DrivinPagination
