const getPosts = async () => {
  const apiResponse = await fetch("http://localhost:3000/posts");
  const posts = await apiResponse.json();
  console.log(posts);
};

const createPost = async (post) => {
    await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
  }

const addPost = async () => {
  const post = {
    titulo: document.getElementById("txTitulo").value,
    autor: document.getElementById("txtAutor").value,
    imagem: document.getElementById("txtimg").value,
    texto: document.getElementById("txtArea").value
  };

  await createPost(post);
};
