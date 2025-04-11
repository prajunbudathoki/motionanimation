import { motion } from "motion/react";

const data= [
  ["🤦‍♂️", 340, 10],
  ["⚠️", 20, 40],
  ["⭐", 60, 90],
  ["😒", 80, 120],
];

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function ScrollTriggered() {
  return (
    <div className="mx-auto max-w-[500px] pb-24 mt-24 w-full">
      {data.map(([emoji, a, b], indx) => (
        <Card key={emoji} i={indx} emoji={emoji} hueA={a} hueB={b} />
      ))}
    </div>
  );
}

function Card({ emoji, a, b, indx }) {
  const background = `linear-gradient(306deg, ${hue(a)}, ${hue(b)})`;

  return (
    <motion.div
      className="flex justify-center items-center relative pt-5 -mb-28"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div
        className="absolute inset-0"
        style={{
          background,
        }}
      />
      <motion.div
        variants={cardVariants}
        className="w-[300px] h-[430px] text-[164px] flex justify-center items-center rounded-[20px] bg-gray-100 shadow-[0_0_1px_rgba(0,0,0,0.075)"
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}
