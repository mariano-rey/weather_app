import { useCallback, useEffect, useRef } from "react";
import axios from "redaxios";
import { useHttpReducer } from "./Reducer";
import { Props, ACTIONS } from "./types";

const useHttp = ({ url }: Props) => {
  const cancelRequest = useRef(false);
  const [state, dispatch] = useHttpReducer();

  const execRequest = useCallback(async () => {
    dispatch({ type: ACTIONS.LOADING });
    try {
      const res = await axios.get(url);
      if (cancelRequest.current) {
        return;
      }
      dispatch({ type: ACTIONS.SUCCESS, data: res.data });
    } catch (error) {
      if (cancelRequest.current) {
        return;
      }
      dispatch({ type: ACTIONS.ERROR, err: error as Error });
    }
  }, [url, dispatch]);

  useEffect(() => {
    cancelRequest.current = false;
    execRequest();
    return () => {
      cancelRequest.current = true;
    };
  }, [execRequest]);

  return state;
};

export default useHttp;
