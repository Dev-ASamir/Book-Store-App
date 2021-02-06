import {useEffect, useState} from 'react';
import axios from 'axios';
import {I18nManager} from 'react-native';

export const useFetch = ({url}) => {
  const [state, setstate] = useState({
    loading: true,
    error: false,
    data: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          method: 'GET',
          headers: {
            'Accept-Language': I18nManager.isRTL ? 'ar' : 'en',
          },
        };
        const response = await axios.get(url, headers);
        if (response.data) {
          setstate({
            ...state,
            data: response.data,
            loading: false,
            error: false,
          });
        } else {
          setstate({...state, error: true, data: null, loading: false});
        }
      } catch (error) {
        console.log(error);
        setstate({...state, error: true, loading: false});
      }
    };
    fetchData();
  }, []);
  return state;
};
