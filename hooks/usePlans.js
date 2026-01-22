import { useContext } from "react"
import { SubscriptionContext } from "../Context"

import React from 'react';
const usePlans = () => {
    return useContext(SubscriptionContext)
};

export default usePlans;