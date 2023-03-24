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
    titulo: document.getElementById("txTitulo").value,
    autor: document.getElementById("txtAutor").value,
    imagem: document.getElementById("txtimg").value,
    texto: document.getElementById("txtArea").value,
  };

  await createPost(post);
  const titulo = post.titulo;
  const autor = post.autor;
  const imagem = post.imagem;
  const texto = post.texto;

  const div = document.getElementById("noticia");
  div.innerHTML += `
    <div>
   <img src="${imagem}" alt="imagem">
    <div>
    <h1>${titulo}</h1>
    <p> ${texto}</p>
    </div>
    </div>
  `;
};
