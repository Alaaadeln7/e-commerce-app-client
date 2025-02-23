import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import api from '../services/api';

const cache = new Map();
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

export const useApi = (endpoint, options = {}) => {
  const {
    method = 'GET',
    body = null,
    dependencies = [],
    useCache = true,
    invalidateCache = false,
  } = options;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const cacheKey = `${method}:${endpoint}:${JSON.stringify(body)}`;

  const fetchData = useCallback(async () => {
    // Check cache first
    if (useCache && !invalidateCache && cache.has(cacheKey)) {
      const cachedData = cache.get(cacheKey);
      if (Date.now() - cachedData.timestamp < CACHE_TIME) {
        setData(cachedData.data);
        setLoading(false);
        return;
      } else {
        cache.delete(cacheKey);
      }
    }

    try {
      setLoading(true);
      const response = await api({
        method,
        url: endpoint,
        data: body,
      });

      // Cache the response
      if (useCache) {
        cache.set(cacheKey, {
          data: response.data,
          timestamp: Date.now(),
        });
      }

      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
      toast.error(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [endpoint, method, body, useCache, invalidateCache, cacheKey]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...dependencies]);

  const refetch = useCallback(() => {
    return fetchData();
  }, [fetchData]);

  const clearCache = useCallback(() => {
    cache.delete(cacheKey);
  }, [cacheKey]);

  return {
    data,
    error,
    loading,
    refetch,
    clearCache,
  };
};
