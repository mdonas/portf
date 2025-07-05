// src/pages/IconGallery.jsx
const icons = import.meta.glob("../icons/techIcons/icon*.jsx", { eager: true });
import IconCard from "./IconCard";
const IconGallery = () => {
  return (
    <>
      <div className="py-3 row justify-content-around">
        {Object.entries(icons).map(([path, module], index) => {
          const IconComponent = module.default;
          return (
            <IconCard
              key={index}
              icon={<IconComponent />}
              label={path
                .split("/")
                .pop()
                .replace(".jsx", "")
                .replace("icon", "")}
            />
          );
        })}
      </div>
    </>
  );
};

export default IconGallery;
