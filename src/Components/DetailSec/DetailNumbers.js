import React from "react";
import styles from "./DetailNumber.module.css";
import DetailItem from "./DetailItem.js";
export default function DetailNumbers() {
  return (
    <section className={`${styles.container} animate`}>
      <div className={styles['text-wrapper']}>
      <p className={styles["container-heading"]}>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
        elementum dui, sed dignissim lectus. Donec porttitor, metus sed iaculis
        pulvinar, justo massa cursus magna, ut consectetur nisl est fermentum
        augue. Etiam volutpat a dui ac egestas. Ut metus felis.
      </p>
      <div className={styles["detail-wrapper"]}>
        <DetailItem
          title={"Satisfied guest"}
          src={"https://cdn.lordicon.com/cjyxqyly.json"}
          amount={1550}
          icon={"icon here"}
          trigger={"loop"}
          colors={"primary:#c67d53,secondary:#feba1c,tertiary:#f4c89c"}
          width={'100px'}
          height={'80px'}
        />
        <DetailItem
          title={"Lunches every day"}
          amount={125}
          icon={"icon here"}
          src={"https://cdn.lordicon.com/ibzzbohe.json"}
          trigger={"loop"}
          colors={"outline:#121331,primary:#646e78,tertiary:#ee6d66"}
          width={'100px'}
          height={'80px'}
        />
        <DetailItem
          title={"Family tables"}
          amount={35}
          icon={"icon here"}
          src={"https://cdn.lordicon.com/pmpgqwuc.json"}
          trigger={"loop"}
          colors={"outline:#121331,primary:#d59f80,secondary:#feba1c,tertiary:#242424,quaternary:#e8e230,quinary:#a660"}
          width={'100px'}
          height={'80px'}
        />
        <DetailItem
          title={"Team members"}
          amount={18}
          icon={"icon here"}
          src={"https://cdn.lordicon.com/okyfhqcr.json"}
          trigger={"loop"}
          colors={"primary:#3a3347,secondary:#feba1c,tertiary:#5c0e0a,quaternary:#f9c9c0"}
          width={'100px'}
          height={'80px'}

        />
      </div>
      </div>
    </section>
  );
}
