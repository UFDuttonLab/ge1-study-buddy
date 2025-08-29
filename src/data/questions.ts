export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: 'Ecology Basics' | 'Life History' | 'Population' | 'Scientific Method';
}

export const questionBank: Question[] = [
  {
    id: 1,
    question: "What is ecology?",
    options: [
      "The study of chemical reactions",
      "The study of planets", 
      "The scientific study of interactions between organisms and their environment",
      "The study of evolution"
    ],
    correctAnswer: 2,
    explanation: "Ecology is the scientific study of how organisms interact with each other and with their environment.",
    topic: "Ecology Basics"
  },
  {
    id: 2,
    question: "Which is NOT a level of ecological organization?",
    options: ["Organism", "Population", "Molecule", "Community"],
    correctAnswer: 2,
    explanation: "The levels of ecological organization are organism, population, community, ecosystem, and biosphere.",
    topic: "Ecology Basics"
  },
  {
    id: 3,
    question: "What is the main non-living component of environments called?",
    options: ["Genetic", "Abiotic", "Biotic", "Organic"],
    correctAnswer: 1,
    explanation: "Abiotic refers to non-living parts of the environment, like temperature, light, and water.",
    topic: "Ecology Basics"
  },
  {
    id: 4,
    question: "Which of the following is a biotic component?",
    options: ["Sunlight", "Soil pH", "Other organisms", "Wind"],
    correctAnswer: 2,
    explanation: "Biotic components refer to the living organisms that influence the environment.",
    topic: "Ecology Basics"
  },
  {
    id: 5,
    question: "Which term describes the maximum number of individuals an environment can support?",
    options: ["r", "Carrying capacity", "Fertility rate", "Birth rate"],
    correctAnswer: 1,
    explanation: "Carrying capacity, or K, is the maximum stable population size an ecosystem can support.",
    topic: "Population"
  },
  {
    id: 6,
    question: "Which variable describes per capita population growth rate?",
    options: ["r", "K", "b", "N"],
    correctAnswer: 0,
    explanation: "The variable r represents the per capita, or individual, population growth rate in ecology models.",
    topic: "Population"
  },
  {
    id: 7,
    question: "What pattern of population dispersion is most common in nature?",
    options: ["Clumped", "Uniform", "Random", "Spiral"],
    correctAnswer: 0,
    explanation: "Most species show clumped dispersion because resources and social behaviors cause them to aggregate.",
    topic: "Population"
  },
  {
    id: 8,
    question: "What does a survivorship Type I curve show?",
    options: [
      "High early mortality, few survive to old age",
      "Constant mortality at all ages",
      "High survival at young ages, rapid mortality at old age",
      "Survivorship is unrelated to age"
    ],
    correctAnswer: 2,
    explanation: "Type I survivorship curves, seen in humans and many large mammals, have high early survival, with steep drop-off in older age.",
    topic: "Population"
  },
  {
    id: 9,
    question: "What best describes an r-selected species?",
    options: [
      "Slow development, low reproductive rate",
      "High parental care, few offspring",
      "Rapid development, many offspring, little parental care",
      "Long lifespan, stable populations"
    ],
    correctAnswer: 2,
    explanation: "r-selected species produce many offspring quickly, often with little parental investment, thriving in unpredictable environments.",
    topic: "Life History"
  },
  {
    id: 10,
    question: "Which is an example of a K-selected species trait?",
    options: [
      "Small body size",
      "Short time until maturity",
      "High juvenile mortality",
      "High parental care"
    ],
    correctAnswer: 3,
    explanation: "K-selected species usually have high parental care, longer lifespans, and larger body sizes.",
    topic: "Life History"
  },
  {
    id: 11,
    question: "What is the main trade-off in life history traits?",
    options: [
      "Energy between reproduction, growth, and survival",
      "Color vs. size",
      "Number of mutations",
      "Food vs. water"
    ],
    correctAnswer: 0,
    explanation: "Organisms must allocate limited resources between reproduction, growth, and survival.",
    topic: "Life History"
  },
  {
    id: 12,
    question: "The mark-recapture method estimates population size by:",
    options: [
      "Counting all individuals directly",
      "Measuring territory size",
      "Marking and recapturing a sample, then applying a formula",
      "Watching feeding rates"
    ],
    correctAnswer: 2,
    explanation: "Mark-recapture involves tagging captured individuals, releasing them, and seeing how many are re-caught to estimate total population.",
    topic: "Population"
  },
  {
    id: 13,
    question: "What is the formula for mark-recapture population estimate?",
    options: [
      "(# Marked × Total 2nd Sample) / # Marked Found in 2nd Sample",
      "Births – Deaths",
      "N = r × K",
      "r = b – d"
    ],
    correctAnswer: 0,
    explanation: "The Lincoln-Petersen formula for mark-recapture is (M1 × NS2) / M2, using the terms from the lecture slides.",
    topic: "Population"
  },
  {
    id: 14,
    question: "What is meant by \"fundamental niche\"?",
    options: [
      "Where a species actually lives, with competitors",
      "Potential environmental conditions a species can survive and reproduce",
      "All places on Earth",
      "Only where resources are limited"
    ],
    correctAnswer: 1,
    explanation: "The fundamental niche describes the possible environments a species could live in, not accounting for competitors.",
    topic: "Population"
  },
  {
    id: 15,
    question: "Which of the following is an example of a density-dependent factor controlling population size?",
    options: ["Flood", "Food availability", "Temperature", "Drought"],
    correctAnswer: 1,
    explanation: "Density-dependent factors like food become more limiting as population density increases; abiotic factors like flood are density-independent.",
    topic: "Population"
  },
  {
    id: 16,
    question: "Which mathematical model describes population growth with unlimited resources?",
    options: ["Logistic", "Exponential", "Cyclical", "Linear"],
    correctAnswer: 1,
    explanation: "The exponential model describes population growth when resources are not limiting.",
    topic: "Population"
  },
  {
    id: 17,
    question: "In the logistic growth equation, what does (K – N)/K represent?",
    options: [
      "Immigration rate",
      "The effect of population size relative to carrying capacity", 
      "Birth rate",
      "Survivorship"
    ],
    correctAnswer: 1,
    explanation: "In logistic growth, (K – N)/K slows growth as N approaches K, the carrying capacity.",
    topic: "Population"
  },
  {
    id: 18,
    question: "Which equation expresses population growth in exponential form?",
    options: [
      "ΔN/Δt = bN - dN",
      "ΔN/Δt = rN", 
      "ΔN/Δt = rmax N",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these equations express exponential population growth in different terms (per capita rates or maximum growth rate).",
    topic: "Population"
  },
  {
    id: 19,
    question: "What kind of survivorship curve would you expect for most trees and fish?",
    options: ["Type I", "Type II", "Type III", "None"],
    correctAnswer: 2,
    explanation: "Type III curves show high mortality early in life, common for organisms with many offspring and little parental care.",
    topic: "Population"
  },
  {
    id: 20,
    question: "Which scenario best favors the evolution of semelparity (\"big bang\" reproduction)?",
    options: [
      "High adult survival, stable environments",
      "Low adult survival, unpredictable environments",
      "Constant resource abundance",
      "Long lifespan"
    ],
    correctAnswer: 1,
    explanation: "Semelparity evolves where survival after reproduction is low and conditions are unpredictable, favoring one major reproductive event.",
    topic: "Life History"
  },
  {
    id: 21,
    question: "Which animal is semelparous?",
    options: ["Human", "House mouse", "Pacific salmon", "Elephant"],
    correctAnswer: 2,
    explanation: "Pacific salmon migrate to breed once and die soon after, a classic example of semelparity.",
    topic: "Life History"
  },
  {
    id: 22,
    question: "What is phenotypic plasticity?",
    options: [
      "Ability to mutate quickly",
      "Ability to change phenotype in response to environment",
      "Having many genes",
      "Always producing the same traits"
    ],
    correctAnswer: 1,
    explanation: "Phenotypic plasticity refers to the ability of a single genotype to produce different phenotypes in different environments.",
    topic: "Life History"
  },
  {
    id: 23,
    question: "What kind of population dispersion results from territorial behavior?",
    options: ["Uniform", "Random", "Clumped", "Stratified"],
    correctAnswer: 0,
    explanation: "Uniform dispersion often results from territoriality or competition for space among individuals.",
    topic: "Population"
  },
  {
    id: 24,
    question: "What is demography?",
    options: [
      "The study of animal behavior",
      "The study of atmospheric chemistry",
      "The study of the size and structure of populations",
      "The study of genes"
    ],
    correctAnswer: 2,
    explanation: "Demography studies population size, structure, and changes over time.",
    topic: "Population"
  },
  {
    id: 25,
    question: "What ecological process occurs when organisms move from one area to another without return?",
    options: ["Parasitism", "Migration", "Dispersal", "Predation"],
    correctAnswer: 2,
    explanation: "Dispersal is movement of individuals away from their origin or from centers of high population density, not necessarily returned.",
    topic: "Population"
  },
  {
    id: 26,
    question: "In the mark-recapture equation, what does M2 represent?",
    options: [
      "Number of marked individuals at the start",
      "Number of marked individuals recaptured",
      "Total number of recaptured animals",
      "Estimated total population"
    ],
    correctAnswer: 1,
    explanation: "M2 is the number of marked individuals found in the second capture.",
    topic: "Population"
  },
  {
    id: 27,
    question: "Which level of ecological organization includes all ecosystems on Earth?",
    options: ["Community", "Ecosystem", "Population", "Biosphere"],
    correctAnswer: 3,
    explanation: "The biosphere is the sum of all ecosystems on Earth.",
    topic: "Ecology Basics"
  },
  {
    id: 28,
    question: "What determines an organism's realized niche?",
    options: [
      "Only abiotic conditions",
      "Genetic makeup",
      "Interactions with competitors and predators",
      "Only food availability"
    ],
    correctAnswer: 2,
    explanation: "The realized niche is set by abiotic and biotic interactions, particularly competition and predation.",
    topic: "Population"
  },
  {
    id: 29,
    question: "When is phenotypic plasticity most favored?",
    options: [
      "In stable, predictable environments",
      "In unpredictable or variable environments", 
      "When mutation rates are high",
      "With no predators present"
    ],
    correctAnswer: 1,
    explanation: "Plasticity allows rapid coping with changing conditions and is favored when environments vary at short timescales.",
    topic: "Life History"
  },
  {
    id: 30,
    question: "Which pattern of population change best fits the current global human population?",
    options: ["Declining", "Stable", "Fluctuating randomly", "Exponential growth"],
    correctAnswer: 3,
    explanation: "Human populations have shown well-approximated exponential growth in recent centuries.",
    topic: "Population"
  },
  {
    id: 31,
    question: "What is the main energetic difference between large and small animals according to metabolic scaling?",
    options: [
      "Large animals have higher metabolic rate per gram",
      "Small animals have lower energy needs",
      "Large animals have lower metabolic rate per gram",
      "Both use the same energy per gram"
    ],
    correctAnswer: 2,
    explanation: "For mammals, metabolic rate per unit mass is lower in larger animals than in small animals.",
    topic: "Life History"
  },
  {
    id: 32,
    question: "Which equation represents the per capita rate of increase?",
    options: ["r = K – N", "r = b – d", "r = N / K", "r = m × q"],
    correctAnswer: 1,
    explanation: "The rate of population increase, r, equals the per capita birth rate (b) minus the per capita death rate (d).",
    topic: "Population"
  },
  {
    id: 33,
    question: "What do \"Allee effects\" describe?",
    options: [
      "Extra slow population growth at high density",
      "Reduction in survival or reproduction at low population size",
      "Uniform population growth",
      "Animals migrating seasonally"
    ],
    correctAnswer: 1,
    explanation: "Allee effects occur when populations at very low densities grow more slowly or decline further, often because of difficulty finding mates or lack of group behaviors.",
    topic: "Population"
  },
  {
    id: 34,
    question: "Which curve signifies constant mortality across the lifespan?",
    options: ["Type I", "Type II", "Type III", "Logistic"],
    correctAnswer: 1,
    explanation: "Type II survivorship curves have equal mortality at every age; this is seen in some bird and reptile species.",
    topic: "Population"
  },
  {
    id: 35,
    question: "Mark-recapture methods rely on which assumption?",
    options: [
      "All individuals are the same age",
      "No individuals die or are born between capture events",
      "Marked and unmarked individuals are captured equally",
      "The population is shrinking"
    ],
    correctAnswer: 2,
    explanation: "For mark-recapture estimates to be accurate, all individuals must have an equal chance of being captured.",
    topic: "Population"
  },
  {
    id: 36,
    question: "Which is a key assumption of the logistic growth model?",
    options: [
      "The environment and carrying capacity are constant",
      "Unlimited resources",
      "No competition for resources",
      "Constant immigration"
    ],
    correctAnswer: 0,
    explanation: "Logistic growth assumes a constant carrying capacity and no changes in environmental conditions.",
    topic: "Population"
  },
  {
    id: 37,
    question: "What does \"per capita\" mean in population ecology?",
    options: ["By individual", "By population", "By generation", "By family"],
    correctAnswer: 0,
    explanation: "\"Per capita\" refers to measurements on a per-individual basis.",
    topic: "Ecology Basics"
  },
  {
    id: 38,
    question: "Main difference between exponential and logistic growth?",
    options: [
      "Logistic growth considers carrying capacity; exponential does not",
      "Only logistic growth involves reproduction",
      "Exponential growth stops at low population size",
      "Logistic growth assumes unlimited resources"
    ],
    correctAnswer: 0,
    explanation: "Logistic growth incorporates the concept of limiting resources and carrying capacity, unlike exponential growth.",
    topic: "Population"
  },
  {
    id: 39,
    question: "Which environmental factor is most likely to affect all populations regardless of size?",
    options: ["Disease", "Competition", "Fire", "Food shortage"],
    correctAnswer: 2,
    explanation: "Abiotic factors like fire are density-independent and affect populations regardless of their size.",
    topic: "Population"
  },
  {
    id: 40,
    question: "What is one consequence if environmental change is faster than the limit of phenotypic plasticity?",
    options: [
      "Evolution speeds up",
      "Populations may go extinct",
      "Plasticity increases",
      "Carrying capacity rises"
    ],
    correctAnswer: 1,
    explanation: "If change exceeds the ability of organisms to respond plastically, they may suffer fitness declines and possibly extinction.",
    topic: "Life History"
  },
  {
    id: 41,
    question: "In the scientific method, what comes directly after a hypothesis?",
    options: ["Experiment", "Prediction", "Conclusion", "Analysis"],
    correctAnswer: 0,
    explanation: "After forming a hypothesis, scientists design and carry out experiments to test it.",
    topic: "Scientific Method"
  },
  {
    id: 42,
    question: "According to the course, which group would benefit most from group learning during exams?",
    options: [
      "Plants",
      "Ecologists in the same class",
      "Predatory mammals",
      "Fish"
    ],
    correctAnswer: 1,
    explanation: "The lectures highlight students working in groups for exercises and exams to enhance learning outcomes.",
    topic: "Scientific Method"
  },
  {
    id: 43,
    question: "Which event resulted in exponential population growth in whooping cranes?",
    options: [
      "Stable resources and no migration",
      "Recovery from near-extinction",
      "Introduction of new competitors",
      "Climate change"
    ],
    correctAnswer: 1,
    explanation: "Whooping cranes' exponential growth was observed as their population recovered from a very small number.",
    topic: "Population"
  },
  {
    id: 44,
    question: "Which of these animals exhibits iteroparity?",
    options: ["Pacific salmon", "Annual plant", "Human", "Century plant"],
    correctAnswer: 2,
    explanation: "Iteroparity means repeated reproductive cycles across a lifespan; humans are a classic example.",
    topic: "Life History"
  },
  {
    id: 45,
    question: "What is the principle of allocation?",
    options: [
      "Only energy is distributed",
      "Organisms must divide limited resources among competing life functions",
      "All organisms are equally adapted",
      "Ecosystems are stable"
    ],
    correctAnswer: 1,
    explanation: "The principle of allocation states that energy used for one function (e.g., reproduction) is unavailable for others (e.g., growth, defense).",
    topic: "Life History"
  },
  {
    id: 46,
    question: "Why are right whales slow to recover from population declines?",
    options: [
      "Short lifespan, many offspring",
      "9 years to sexual maturity, one calf at a time, long intervals",
      "Aggressive foragers",
      "Live in the open ocean"
    ],
    correctAnswer: 1,
    explanation: "Right whales' life history traits—late maturity, producing one calf at a time with long intervals—slow their population recovery.",
    topic: "Life History"
  },
  {
    id: 47,
    question: "Which species switches from omnivory to carnivory under unpredictable conditions?",
    options: ["House mouse", "Great tit", "Spadefoot toad", "Elephant"],
    correctAnswer: 2,
    explanation: "Spadefoot toads change their development strategy based on environmental unpredictability, switching diets to increase survival.",
    topic: "Life History"
  },
  {
    id: 48,
    question: "The term \"phenology\" refers to:",
    options: [
      "Rates of population growth",
      "Timing of life cycle events in relation to environmental cues",
      "Population dispersion",
      "Genetic drift"
    ],
    correctAnswer: 1,
    explanation: "Phenology studies the timing of biological events such as breeding or migration in response to environmental factors.",
    topic: "Life History"
  },
  {
    id: 49,
    question: "What determines whether transgenerational plasticity (TGP) occurs?",
    options: [
      "Offspring environment only",
      "Both parent and offspring environments",
      "Number of offspring",
      "Population density"
    ],
    correctAnswer: 1,
    explanation: "TGP occurs when offspring traits are influenced by the environments experienced by their parents (or previous generations).",
    topic: "Life History"
  },
  {
    id: 50,
    question: "Why is the mark-recapture formula reliable?",
    options: [
      "It counts all individuals",
      "It randomly samples the population, accounting for marked/unmarked ratios",
      "It uses aviary data",
      "It measures energy directly"
    ],
    correctAnswer: 1,
    explanation: "It's reliable because the ratio of marked to unmarked individuals estimates total population size in a way that can be mathematically justified.",
    topic: "Population"
  },
  {
    id: 51,
    question: "In niche theory, what is an \"n-dimensional hypervolume\"?",
    options: [
      "A time series graph",
      "A cube of air and water",
      "The multi-factoral space describing environmental conditions allowing a species to exist",
      "An organism's cell"
    ],
    correctAnswer: 2,
    explanation: "Hutchinson's niche theory describes a multidimensional space of environmental requirements, called a \"hypervolume.\"",
    topic: "Ecology Basics"
  }
];

// Utility function to get random questions
export const getRandomQuestions = (count: number = 8): Question[] => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Utility function to get questions by topic
export const getQuestionsByTopic = (topic: Question['topic']): Question[] => {
  return questionBank.filter(q => q.topic === topic);
};

export const topics = ['Ecology Basics', 'Life History', 'Population', 'Scientific Method'] as const;