import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'hmm5oomy',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:'skLahob9TPzIqzGgr3ydbRnBwNWMppPyWkVc9FFS0ZCxapyHuAOGsutompk7cMc3Ae7jzOrFtSiuHv8f7PaEnF2XptihA2QDP1S5K4Jv6oquXA8MuqnQfGOi9Cp4doArJjP6Bv4tm2Z6MhgioXzzs3FH8QqmHeEzXgql1xU8L9SAAiIIGnmU',
});



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
