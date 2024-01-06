// Kood mis kuvab package json
const packageJsonUrl = 'https://dummyjson.com/quotes';

fetch(packageJsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch package.json: ${response.statusText}`);
    }
    return response.json();
  })
  .then(packageJson => {
    console.log(packageJson);
  })
  .catch(error => {
    console.error('Error:', error);
  });
