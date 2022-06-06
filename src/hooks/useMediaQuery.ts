import useWindowSize from "./useWindowSize";

const useMediaQuery = () => {
  const { width } = useWindowSize();
  return { isMobile: width <= 480, isTablet: width <= 780 };
};

export default useMediaQuery;
