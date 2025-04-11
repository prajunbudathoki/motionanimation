import { motion, useScroll } from "motion/react";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  return(
  <>
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        backgroundColor: "#008000",
      }}
    />
    <PageContent />
  </>
  )
}

function PageContent() {
//   console.log("rendering");
  return (
    <>
      <div className="max-w-[500px] flex flex-col items-center m-auto">
        <h1>Heading 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Doloremque voluptatem
          reprehenderit vero libero
          necessitatibus, molestiae a nisi quis
          aperiam, esse similique tempore
          assumenda reiciendis eligendi, nulla
          impedit perspiciatis mollitia eaque?
        </p>
        <br />
        <h2>Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nam enim, libero iure
          eum est reprehenderit voluptatem
          repellat, impedit atque incidunt
          voluptate deleniti nisi iusto dicta esse
          magni suscipit, autem eos!
        </p>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nam enim, libero iure
          eum est reprehenderit voluptatem
          repellat, impedit atque incidunt
          voluptate deleniti nisi iusto dicta esse
          magni suscipit, autem eos!
        </p>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime sint reiciendis
          minus delectus nulla repellendus fuga
          autem illo tempore inventore, officia
          laborum amet quibusdam optio porro
          ipsum, neque dolor exercitationem
          officiis eum iste odit? Ratione
          voluptates pariatur odio deleniti, ullam
          exercitationem nihil. Voluptas
          asperiores nobis, ad magnam
          necessitatibus porro quae.
        </p>
        <h4>Heading 5</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime sint reiciendis
          minus delectus nulla repellendus fuga
          autem illo tempore inventore, officia
          laborum amet quibusdam optio porro
          ipsum, neque dolor exercitationem
          officiis eum iste odit? Ratione
          voluptates pariatur odio deleniti, ullam
          exercitationem nihil. Voluptas
          asperiores nobis, ad magnam
          necessitatibus porro quae.
        </p><h4>Heading 6</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime sint reiciendis
          minus delectus nulla repellendus fuga
          autem illo tempore inventore, officia
          laborum amet quibusdam optio porro
          ipsum, neque dolor exercitationem
          officiis eum iste odit? Ratione
          voluptates pariatur odio deleniti, ullam
          exercitationem nihil. Voluptas
          asperiores nobis, ad magnam
          necessitatibus porro quae.
        </p><h4>Heading 7</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime sint reiciendis
          minus delectus nulla repellendus fuga
          autem illo tempore inventore, officia
          laborum amet quibusdam optio porro
          ipsum, neque dolor exercitationem
          officiis eum iste odit? Ratione
          voluptates pariatur odio deleniti, ullam
          exercitationem nihil. Voluptas
          asperiores nobis, ad magnam
          necessitatibus porro quae.
        </p><h4>Heading 8</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime sint reiciendis
          minus delectus nulla repellendus fuga
          autem illo tempore inventore, officia
          laborum amet quibusdam optio porro
          ipsum, neque dolor exercitationem
          officiis eum iste odit? Ratione
          voluptates pariatur odio deleniti, ullam
          exercitationem nihil. Voluptas
          asperiores nobis, ad magnam
          necessitatibus porro quae.
        </p>
      </div>
    </>
  );
}
