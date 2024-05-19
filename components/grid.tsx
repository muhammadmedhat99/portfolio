import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, index) => (
          <BentoGridItem
          id={item.id}
          key={index}
          title={item.title}
          description={item.description}
          // remove icon prop
          // remove original classname condition
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
