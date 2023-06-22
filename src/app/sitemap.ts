
// type POST = {
//   id: string;
//   title: string;
//   description: string;
// };


export default async function sitemap()  {

  const baseUrl = 'https://your-domain.vercel.app';

  // For Dynamic Routes
  // const res = await fetch(`${baseUrl}/posts`);
  // const allPosts = (await res.json()) as POST[];
  // const posts = allPosts.map((post) => ({
  //   url: `${baseUrl}/posts/${post.id}`,
  //   lastModified: new Date().toISOString(),
  // }));

  // For Static Routes
  const routes = ['', '/about', '/sign-in', '/sign-up'].map((route) => ({
    url: `${baseUrl}/posts/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    ...routes,
    //  ...posts
    ];
};
