import axios from '@/utils/axios';
import { GET_EXAM } from './endpoints';

export const getExams = async () => {
  const response = await axios.get(GET_EXAM);
  return response.data;
};
