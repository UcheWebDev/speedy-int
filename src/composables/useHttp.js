import { CapacitorHttp } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { BASE_URL } from '@/config';

export const useHttp = () => {
    const httpRequest = async (method, endpoint, data = {}, additionalHeaders = {}) => {
        try {
            const { value: authToken } = await Preferences.get({ key: 'token' });
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                ...additionalHeaders,
            };
            const url = `${BASE_URL}${endpoint}`;
            const requestOptions = {
                method: method,
                url: url,
                headers: headers,
            };

            if (method !== 'GET' && method !== 'HEAD') {
                requestOptions.data = data;
            }

            const response = await CapacitorHttp.request(requestOptions);
            return response
        } catch (e) {
            throw new Error(e.message || 'An error occurred while making the request.');
        }
    }

    return {
        httpRequest
    }
}