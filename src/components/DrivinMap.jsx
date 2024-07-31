import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';


const DrivinMap = ({ showMap, setShowMap }) => {
    const [mapCoords, setMapCoords] = useState({ lat: 51.505, lng: -0.09 });

    useEffect(() => {
        if (showMap) {
            const randomLat = 51.505 + (Math.random() - 0.5) * 0.1;
            const randomLng = -0.09 + (Math.random() - 0.5) * 0.1;
            setMapCoords({ lat: randomLat, lng: randomLng });
        }
        console.log(mapCoords);
    }, [showMap]);

    return (
        <>
            {showMap && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="p-4 max-w-md w-full bg-white shadow-md rounded-lg">
                        <button
                            onClick={() => setShowMap(false)}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Cerrar
                        </button>
                        <div className="h-96 mt-4">
                            <GoogleMap
                                mapContainerStyle={{ height: '100%', width: '100%' }}
                                center={mapCoords}
                                zoom={13}
                            >
                                <Marker position={mapCoords} />
                            </GoogleMap>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DrivinMap;
