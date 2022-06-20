const ejecutarCodigo = () => {
  // 1.
  //alert('Hola mundo');

  // 2.
  let titulo1 = document.getElementById("titulo1");
  titulo1.textContent = "Album de fotos";

  // 3.
  let arrTextMuted = document.getElementsByClassName("text-muted");
  arrTextMuted[1].innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`;

  // 4.
  let arrP = document.getElementsByTagName("p");
  arrP[2].setAttribute("class", "d-none");

  // 5. reto
  const urls = [
    {
      url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "camino",
    },
    {
      url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "energia",
    },
    {
      url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "papá",
    },
    {
      url: "https://images.unsplash.com/photo-1653971858341-865fca7c6d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      alt: "sala",
    },
    {
      url: "https://images.unsplash.com/photo-1654032693719-ada7186b1ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      alt: "buho",
    },
    {
      url: "https://images.unsplash.com/photo-1648737966282-b193f74a1503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      alt: "personas",
    },
    {
      url: "https://images.unsplash.com/photo-1653971858526-97f2ba1914c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      alt: "sala2",
    },
    {
      src: "https://images.unsplash.com/photo-1654041562793-1bd2430585cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      url: "bosque",
    },
    {
      url: "https://images.unsplash.com/photo-1654023316132-3665072d427b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "playa",
    },
  ];

  let svgs = document.getElementsByTagName("svg");
  console.log(svgs.length);
  for (let i = 1; i < svgs.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", urls[i - 1]["url"]);
    img.setAttribute("alt", urls[i - 1]["alt"]);

    svgs[i].replaceWith(img);
  }
};

ejecutarCodigo();
