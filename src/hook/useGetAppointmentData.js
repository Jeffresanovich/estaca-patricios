import { useGetAllAppointmentQuery } from "../services/patriciosStakeApi";

const useGetAppointmentData = () => {
  const { data, isLoading, isFetching, refetch } = useGetAllAppointmentQuery();

  return {
    data,
    isLoading,
    isFetching,
    refetch,
  };
};

export default useGetAppointmentData;
