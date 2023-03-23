const getPosts = async () => {
  const apiResponse = await fetch("http://localhost:3000/posts");
  const posts = await apiResponse.json();
  console.log(posts);
};

const createPost = async (post) => {
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};

const addPost = async () => {
  const post = {
    title: "Post Arnia",
    author: "Marketing Arnia",
    image:
      "https://cdn.izap.com.br/linkcom.com.br/plus/images?src=barbara/unnamed-1.jpg&",
    text: "Escola de Programação",
  };

  await createPost(post);
};

const salvarPseudotime = async () => {
  const time = {
    nome: "Palmeiras",
    titulo: -2,
  };

  await fetch("http://localhost:3000/times", {
    body: JSON.stringify(time),
    method: "POST",
  });
};

salvarPseudotime();
