import React from 'react';
import { SubscriptionContext } from '../Context';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

const SubscriptionProvider = ({ children }) => {
    const { data: plans, isLoading } = useQuery({
        queryKey: ['plans'],
        queryFn: async () => {
            const response = await api.get('/packages')
            return response.data
        }
    })
    return (
        <SubscriptionContext.Provider value={{ plans, isLoading }}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export default SubscriptionProvider;