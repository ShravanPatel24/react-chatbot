import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../Components/Options/Options";
import Quiz from "../Components/Quiz/Quiz";
import WeatherAPI from "../Components/WeatherAPI/WeatherAPI";

const config = {
  botName: "Learn To Code",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },

    {
      widgetName: "pythonQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is Python?",
            answer:
              "Python is a very popular general-purpose interpreted, interactive, object-oriented, and high-level programming language.",
            id: 1,
          },
          {
            question: "Defining a Function",
            answer: `Here is a syntax: 
              "def functionname( parameters ):
              "function_docstring"
              function_suite
              return [expression]"`,
            id: 2,
          },
        ],
      },
    },

    {
      widgetName: "reactQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is React?",
            answer:
              "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.",
            id: 1,
          },
          {
            question: "What is ES6?",
            answer: `ES6 stands for ECMAScript 6.

              ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.`,
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "weather",
      widgetFunc: (props) => <WeatherAPI {...props} />,
    },
  ],
};

export default config;
