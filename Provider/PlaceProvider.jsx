import { PlaceContext } from '../Context';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { useMemo, useState } from 'react';

const PlaceProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: place, isLoading, isError, error } = useQuery({
        queryKey: ['places'],
        queryFn: async () => {
            const response = await api.get(`/places`);
            return response.data;
        }
    })
    const places = useMemo(() => {
        if (!searchTerm || searchTerm.trim() === '') return place;

        const cleanSearch = searchTerm.toLowerCase().trim();

        return place.filter(place => {
            const title = place.title ? String(place.title).toLowerCase() : "";
            return title.includes(cleanSearch);
        });
    }, [searchTerm, place]);
    return (
        <PlaceContext.Provider value={{ places, isLoading, isError, error, setSearchTerm }} >
            {children}
        </PlaceContext.Provider >
    );
};

export default PlaceProvider;