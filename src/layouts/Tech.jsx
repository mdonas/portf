import IconGallery from "../components/IconGallery";
import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx";

function Tech() {
  const [techRef, techVisible] = useScrollAnimation();

  return (
    <>
      <section className="py-6" id="tech" ref={techRef}>
        <h1
          className={`text-center text-white fw-bold mb-3 scroll-animate ${
            techVisible ? "visible" : ""
          }`}
        >
          Tecnologías
        </h1>
        <div
          className={`scroll-animate-scale stagger-animation-1 ${
            techVisible ? "visible" : ""
          }`}
        >
          <IconGallery />
        </div>
      </section>
    </>
  );
}

export default Tech;
