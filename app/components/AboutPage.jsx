export default function AboutPage({content, title}) {
  console.log(content);
  console.log(title);
  return (
    <>
      <section className="w-full gap-4">
        <img
          className="w-full h-screen object-cover"
          src="../images/heroes/flowerHero.jpg"
        ></img>
        <img
          className="object-cover h-52"
          src="../images/mouaAbtimg2.webp"
        ></img>
      </section>
      <p>{title}</p>
      <div>{content}</div>
      <p>WOWHOWHOWHOWHWIO</p>
    </>
  );
}
