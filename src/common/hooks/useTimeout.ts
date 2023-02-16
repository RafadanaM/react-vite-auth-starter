import { useEffect, useRef } from "react";

/**
 * execute callback function after a certain delay
 * @param {VoidFunction} callback function to execute
 * @param {number} [delay=500] amount of delay in ms, defaults to 500
 */
const useTimeout = (callback: VoidFunction, delay = 500) => {
  const callbackRef = useRef<VoidFunction | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setTimeout(() => {
      callbackRef.current?.();
    }, delay);

    return () => clearTimeout(id);
  }, [delay]);
};

export default useTimeout;
