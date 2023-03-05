/* eslint-disable @typescript-eslint/no-explicit-any */
function useFetch<T extends (...args: any) => any>(
  cb: T
): { result: ReturnType<T> } {
  function execute() {
    const y = cb();
    return y;
  }

  const result = execute();

  return { result };
}

export default useFetch;
