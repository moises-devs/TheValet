import React from "react";
import SectionCard from "../UI/SectionCard";
import ChefCard from "./ChefCard";
import styles from "./Chef.module.css";
import chef1 from "../../images/Avatar/image-1.jpg";
import chef2 from "../../images/Avatar/image-2.jpg";
import chef3 from "../../images/Avatar/image.jpg";
export default function Chef() {
  return (
    <SectionCard title={"Our Cheff"} subtitle={"Meet"}>
      <div className={`${styles['img-wrapper']} animate`}>
        <ChefCard
          name={"John Dogget"}
          position={"Head Chef"}
          description={'loremhere'}
          src={chef1}
        />
                <ChefCard
          src={chef2}
          name={"John Dogget"}
          position={"Head Chef"}
          description={'loremhere'}
        />
                <ChefCard
          src={chef3}
          name={"John Dogget"}
          position={"Head Chef"}
          description={'loremhere'}
        />
      </div>
    </SectionCard>
  );
}
