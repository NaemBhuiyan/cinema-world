function useURLQuery() {
  return new URLSearchParams(window.location.search);
}
export default useURLQuery;
