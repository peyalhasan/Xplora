import { PlaceContext } from '../Context';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

const PlaceProvider = ({ children }) => {
    const { data: places, isLoading, isError, error } = useQuery({
        queryKey: ['places'],
        queryFn: async () => {
            const response = await api.get(`/places`);
            return response.data;
        }
    })
    return (
        <PlaceContext.Provider value={{ places, isLoading, isError, error }} >
            {children}
        </PlaceContext.Provider >
    );
};

export default PlaceProvider;