import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ba0714694amsh4195a62414c40ebp135fb2jsn63814c37f83b'//process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    },
  });
    
  return data;
}