import { motion } from "framer-motion";

export default function Heading({
  titleColor,
  subtitleColor,
  title,
  subtitle,
  description,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center px-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className={`border-l-3 border-[${titleColor}] text-[${titleColor}] font-bold px-3 mx-auto text-sm uppercase tracking-tight`}
        variants={itemVariants}
      >
        {title}
      </motion.div>
      <motion.div
        className={`w-full flex flex-col justify-center items-center pt-2 text-[${titleColor}] gap-4`}
        variants={itemVariants}
      >
        <motion.h2
          className={`font-bold text-3xl md:text-5xl capitalize tracking-tight text-[${subtitleColor}] text-center`}
          variants={itemVariants}
        >
          {subtitle}
        </motion.h2>
        <motion.p
          className={`w-full sm:w-3/4 md:w-1/2 text-center text-sm tracking-tight text-[${subtitleColor}]`}
          variants={itemVariants}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
