import { useState, useEffect } from "react";

const useActiveSection = (sectionIds, offset = 0) => {
  const [active, setActive] = useState(sectionIds[0] || "");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
      setActive(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          if (active !== id) {
            setActive(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, active]);

  return { active, scrollToSection, setActive };
};

export default useActiveSection;
