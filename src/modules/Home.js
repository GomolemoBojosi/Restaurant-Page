function home() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('content-container');
  homeDiv.innerHTML = `
    <h1>Welcome to Burger Haven</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eius quasi dolore provident facere, blanditiis harum
    pariatur quos atque, cum magni enim hic deleniti laboriosam repellendus velit deserunt, debitis a.
    Autem obcaecati reprehenderit adipisci iusto nulla non similique. Sit aliquid amet sed nemo culpa explicabo atque,
    nobis ea vero impedit ducimus delectus minima, repudiandae voluptatum voluptas eaque voluptatem rem ullam.<p/>
  `;

  return homeDiv;
}

export default home;