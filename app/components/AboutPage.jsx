export default function AboutPage({content, title}) {
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
      <p className="text-3xl font-customReg">{title}</p>
      <div className=" text-3xl font-customSemiBold">{content}</div>
      <p className=" text-3xl font-customMedium">Wohohohohowowowoohohoho</p>

      <img
        className="rounded-full w-96 h-96"
        src="../images/MouaLogo.png"
      ></img>
    </>
  );
}
