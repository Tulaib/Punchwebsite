/* eslint-disable */
import { Check_Authentication, Check_ProviderTiming } from '@/functions';
import axios from 'axios';

export const BASEURL = 'https://emrnexttestapi.dataqhealth.com/api/';
// export const BASEURL = 'https://emrnextapi.dataqhealth.com/api/';
import SnackbarUtils from '@/content/snackbar';

// export const BASEURL ='https://ewvillabd.com/api/v1/'

export async function getApiRequestHeader() {
  // const authToken =  await getToken();
  // const token = JSON.parse(localStorage.getItem('emr_token'));
  return {
    Accept: 'application/json',
    // Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
    // 'Access-Control-Allow-Credentials':true
  };
}

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 60000,
  withCredentials: true
});

export async function updateHeaders() {
  const header = await getApiRequestHeader();

  instance.defaults.headers = header;
  axios.defaults.withCredentials = true;
}

export async function request({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }

  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
    // response?.request?.responseURL === "https://emrnexttestapi.dataqhealth.com/api/create_provider_available_time" ?
    // Check_ProviderTiming(response)
    // : ''
  } catch (error) {
    if (error.response) {
      Check_Authentication(error.response);
    } else {
      SnackbarUtils.error('Something Went Wrong', false);
    }
    throw error.response;
  }

  return response;
}

export async function newRequest({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;

  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }

  if (
    response?.data?.status
      ? response.status.toString().indexOf('2') !== 0
      : response.data.status.toString().indexOf('2') !== 0
  ) {
    throw { response };
  } else {
    return response.data;
  }
}

export async function get(url, params, featureAndAction, config) {
  for (var key in params) {
    url = url + '' + params[key];
  }
  return request({ method: 'get', url, data: { featureAndAction }, ...config });
}

export async function del(url, params, config) {
  return request({ method: 'delete', url, data: { params }, ...config });
}

export async function post(url, data, featureAndAction, config) {
  return request({ method: 'post', url, data, ...config });
}

export async function put(url, data, config) {
  return newRequest({ method: 'put', url, data, ...config });
}
export async function patch(url, data, config) {
  return newRequest({ method: 'patch', url, data, ...config });
}
export const independentRequest = async (url, method, data) => {
  const promise = axios[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};
