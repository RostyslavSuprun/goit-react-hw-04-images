export default async function getImages(inputValue, page = 1) {
  const url = 'https://pixabay.com/api/';
  const API_KEY = '31253077-0a51af2ed3c94e9419b38a769&';

  return await fetch(
    `${url}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
