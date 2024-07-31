import React, { useEffect, useState } from 'react'
import { getCars } from '../helpers/getCars';
import DrivinTable from './DrivinTable';
import DrivinPagination from './DrivinPagination';
import Spinner from './spinner/Spinner';
import DrivinFilter from './DrivinFilter';
import DrivinMap from './DrivinMap';
import { LoadScript } from '@react-google-maps/api';

const DrivinTableScreen = () => {

    const API_KEY = 'AIzaSyCK_GdMtQ4um7Wc4Td-7qSWA48xfXeFVnA';

    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [showMap, setShowMap] = useState(false);

    const getCarsFunction = async (page) => {
        setLoading(true);
        const allCars = await getCars(page);
        setCars(allCars.sort());
        setLoading(false);
    }

    useEffect(() => {
        getCarsFunction(page);
    }, [page]);


    const handleModal = () => {
        setOpenModal(true);
    }

    const handleFilter = (filters) => {
        let result = [...cars];

        if (filters.class) {
            result = result.filter(car => car.class.toLowerCase().includes(filters.class.toLowerCase()));
        }
        if (filters.make) {
            result = result.filter(car => car.make.toLowerCase().includes(filters.make.toLowerCase()));
        }
        if (filters.model) {
            result = result.filter(car => car.model.toLowerCase().includes(filters.model.toLowerCase()));
        }
        if (filters.year) {
            result = result.filter(car => car.year === parseInt(filters.year));
        }
        if (filters.transmission) {
            result = result.filter(car => car.transmission.toLowerCase().includes(filters.transmission.toLowerCase()));
        }

        setCars(result);
    };


    return (
        <div>
            <h1 className='text-center text-4xl font-bold py-5'>Tabla de vehículos</h1>

            <div className='w-4/5 mx-auto'>
                <button
                    onClick={handleModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Filtro
                </button>
            </div>

            {
                loading ? (<Spinner />) :
                    (
                        <>
                            <DrivinTable cars={cars} setCars={setCars} showMap={showMap} setShowMap={setShowMap} />
                            <DrivinPagination setPage={setPage} page={page} />
                        </>
                    )
            }

            {
                openModal && (<DrivinFilter cars={cars} setOpenModal={setOpenModal} handleFilter={handleFilter} />)
            }

            {
                <LoadScript googleMapsApiKey={API_KEY}>
                    <DrivinMap showMap={showMap} setShowMap={setShowMap} />
                </LoadScript>
            }

        </div>
    )
}

export default DrivinTableScreen
