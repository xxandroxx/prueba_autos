import React, { useState } from 'react'

const DrivinTable = ({ cars, setCars, showMap, setShowMap }) => {

    const [sortOrder, setSortOrder] = useState({
        column: null,
        direction: 'asc',
    });

    const orderSort = (column) => {
        const sortedCars = [...cars].sort((a, b) => {
            if (a[column] < b[column]) {
                return sortOrder.direction === 'asc' ? -1 : 1;
            }
            if (a[column] > b[column]) {
                return sortOrder.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setCars(sortedCars);

        setSortOrder({
            column,
            direction: sortOrder.direction === 'asc' ? 'desc' : 'asc',
        });
    };


    const handleOpenMap = () => {
        setShowMap(true);
    }

    const iconSort = (column) => {
        if (sortOrder.column === column) {
            if (sortOrder.direction === 'asc') {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M16 9l-4 -4" />
                        <path d="M8 9l4 -4" />
                    </svg>
                );
            } else {
                return (

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M16 15l-4 4" />
                        <path d="M8 15l4 4" />
                    </svg>
                );
            }
        }

    };

    return (
        <div className="w-4/5 mx-auto mt-8">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">
                            <span>#</span>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('class')} className='flex items-center'>
                                <span>Tipo de auto</span>
                                {iconSort('class')}
                            </div>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('fuel_type')} className='flex items-center'>
                                <span>Tipo de combustible</span>
                                {iconSort('fuel_type')}
                            </div>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('make')} className='flex items-center'>
                                <span>Marca</span>
                                {iconSort('make')}
                            </div>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('model')} className='flex items-center'>
                                <span>Modelo</span>
                                {iconSort('model')}
                            </div>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('year')} className='flex items-center'>
                                <span>Año</span>
                                {iconSort('year')}
                            </div>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('transmission')} className='flex items-center'>
                                <span>Tipo de transmisión</span>
                                {iconSort('transmission')}
                            </div>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('city_mpg')} className='flex items-center'>
                                <span>Consumo en ciudad</span>
                                {iconSort('city_mpg')}
                            </div>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('highway_mpg')} className='flex items-center'>
                                <span>Consumo en carretera</span>
                                {iconSort('highway_mpg')}
                            </div>
                        </th>
                        <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600 cursor-pointer">
                            <div onClick={() => orderSort('combination_mpg')} className='flex items-center'>
                                <span>Consumo mixto</span>
                                {iconSort('combination_mpg')}
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                        <tr onClick={handleOpenMap} key={car.id} className="text-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                            <td className="py-2 px-4 border-b">#{index + 1}</td>
                            <td className="py-2 px-4 border-b">{car.class}</td>
                            <td className="py-2 px-4 border-b">{car.fuel_type}</td>
                            <td className="py-2 px-4 border-b">{car.make}</td>
                            <td className="py-2 px-4 border-b">{car.model}</td>
                            <td className="py-2 px-4 border-b">{car.year}</td>
                            <td className="py-2 px-4 border-b">{car.transmission}</td>
                            <td className="py-2 px-4 border-b">{car.city_mpg}</td>
                            <td className="py-2 px-4 border-b">{car.highway_mpg}</td>
                            <td className="py-2 px-4 border-b">{car.combination_mpg}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DrivinTable
