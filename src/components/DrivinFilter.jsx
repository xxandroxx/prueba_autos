import React, { useState } from 'react'

const DrivinFilter = ({ cars, setOpenModal, handleFilter }) => {

    const [filters, setFilters] = useState({
        class: '',
        make: '',
        model: '',
        year: '',
        transmission: '',
    });


    const uniqueClass = [...new Set(cars.map(car => car.class))];
    const uniqueMake = [...new Set(cars.map(car => car.make))];
    const uniqueModel = [...new Set(cars.map(car => car.model))];
    const uniqueYear = [...new Set(cars.map(car => car.year))];
    const uniqueTransmission = [...new Set(cars.map(car => car.transmission))];

    const handleChange = e => {

        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }))

    }

    const handleSubmit = e => {
        e.preventDefault();
        handleFilter(filters);
        setOpenModal(false);

    }

    const handleResetFilters = () => {
        setFilters({
            class: '',
            make: '',
            model: '',
            year: '',
            transmission: ''
        })
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="p-4 max-w-md w-full bg-white shadow-md rounded-lg">
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="car-class" className="text-gray-700 font-semibold">Tipo de auto:</label>
                        <select id="car-class" name="class" onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Tipo de auto...</option>
                            {uniqueClass.map(car => (
                                <option key={car} value={car}>{car}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="car-make" className="text-gray-700 font-semibold">Marca:</label>
                        <select id="car-make" name="make" onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Marca...</option>
                            {uniqueMake.map(car => (
                                <option key={car} value={car}>{car}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="car-model" className="text-gray-700 font-semibold">Modelo:</label>
                        <select id="car-model" name="model" onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Modelo...</option>
                            {uniqueModel.map(car => (
                                <option key={car} value={car}>{car}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="car-year" className="text-gray-700 font-semibold">Año:</label>
                        <select id="car-year" name="year" onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Año...</option>
                            {uniqueYear.map(car => (
                                <option key={car} value={car}>{car}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="car-transmission" className="text-gray-700 font-semibold">Tipo de transmisión:</label>
                        <select id="car-transmission" name="transmission" onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Transmisión...</option>
                            {uniqueTransmission.map(car => (
                                <option key={car} value={car}>{car}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button onClick={handleCloseModal} type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Cerrar
                        </button>
                        <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Guardar filtros
                        </button>
                        <button onClick={handleResetFilters} type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Reiniciar filtros
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DrivinFilter
