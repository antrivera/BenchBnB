export const fetchBenches = (filters, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: filters,
    success,
    error: () => console.log('fetch error')
  });
};

export const createBench = (data, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/benches',
    data,
    success,
    error: () => console.log('create error')
  });
};
