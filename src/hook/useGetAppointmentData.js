import { useGetAllAppointmentQuery } from "../services/patriciosStakeApi";

const useGetAppointmentData = () => {
  const { data, isLoading, isFetching, refetch } = useGetAllAppointmentQuery();

  const convertDataResponse = () => {
    const convertArray = [];
    for (const key in data) {
      convertArray.push({ ...data[key], key });
    }
    return convertArray;
  };

  return {
    appointmen: convertDataResponse(),
    data,
    isLoading,
    isFetching,
    refetch,
  };
};

export default useGetAppointmentData;
