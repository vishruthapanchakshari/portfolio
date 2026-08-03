import { motion } from "framer-motion";
function About() {
  return (
    <motion.section
  id="about"
  className="max-w-7xl mx-auto px-8 py-28"
  initial={{
    opacity: 0,
    x: -100,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 1.2,
  }}
  viewport={{
    once: false,
  }}

    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-12">
        About Me
      </h2>

      <div className="bg-[#0B1120] border border-cyan-500/20 rounded-3xl p-10">
        <p className="text-lg md:text-xl text-gray-300 leading-10">
          I am an aspiring Artificial Intelligence & Data Science unsergraduate 
          with hads-on experience in developing Machine Learning, Natural Language Processing,
          and Generative AI solutions. I have worked on projects such as an 
          AI-powered Smart Resume Screening System and AIRA- Adaptive AI Voice 
          Interview Assistant, focusing on intelligent automation, candidate evaluation,
          and conversational AI. My expertise includes Python, Data Science,
          Machine Learning, NLP, and building end-to-end AI applications,from data 
          preprocessing and model development to deployment and user-friendly interfaces.
          I am passionate about leveraging AI to solve real-world challenges in recruitment,
          education, and business while continously expanding my knowledge in 
          emerging AI technologies.

          <br /><br />

          I have developed AI solutions including a Smart Resume Screening System and 
          AIRA - Adaptive AI Voice Interview Assistant using Machine Learning,NLP,and
          Generative AI.My technical skills include Python,Machine Learning,LLMs,Flask,
          Streamlit,MySQL,Git,Docker,and GitHub.
          I enjoy building intelligent applications that automate tasks and improve
          decision-making through AI. 

          built intelligent systems including AI-powered classroom monitoring,
          neurological disorder detection through gait analysis, and conversational
          AI assistants for restaurant automation. My technical stack includes
          Python, PyTorch, OpenCV, MongoDB, MySQL,LLMs, and Agentic AI frameworks.

          <br /><br />

          I am passionate about using AI to solve real-world problems through innovation
          and practical solutions. I enjoy building intelligent applications using 
          Machine Learning,Natural Language Processing, and Generative AI. My goal is to
          create AI-Powered systems that improve efficiency, automate tasks, and enhance
          user experiences.I am continously learning emerging technologies such as Large 
          Language Models (LLMs), Agentic AI, and Computer Vision.I aspire to become a
          skilled AI Engineer and contribute to impactful,imdustry-ready AI innovations.
      </p>    
      </div>
    </motion.section>
  );
}

export default About;