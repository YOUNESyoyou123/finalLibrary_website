import AlgoImg from "/src/assets/images/AlgoBook.jpg";
import Patterns from "/src/assets/images/DesignPatterns.jpg";
import operatingSystem from "/src/assets/images/Operating.jpg";
import AiBook from "/src/assets/images/Ai_book.jpg";

const computerScienceBooks = [
  {
    id: 1,
    bookName: "Design Patterns: Elements of Reusable Object-Oriented Software",
    bookImg: Patterns,
    count: 10,
    id_subbook: "CS101",
    Categorie: "Computer Science",
    description:
      "Design Patterns: Elements of Reusable Object-Oriented Software is a comprehensive guide to reusable design patterns in software development. Written by the Gang of Four, this book explores proven solutions to common design problems, providing insights into creating flexible and maintainable code architectures.",
  },
  {
    id: 2,
    bookName: "Design Patterns: Elements of Reusable Object-Oriented Software",
    bookImg: Patterns,
    count: 10,
    id_subbook: "CS102",
    Categorie: "Computer Science",
    description:
      "Dive deep into the world of reusable design patterns with Design Patterns: Elements of Reusable Object-Oriented Software. This book offers detailed explanations and examples of design patterns like Singleton, Factory, and Observer, empowering developers to build scalable and efficient software systems.",
  },
  {
    id: 3,
    bookName: "Operating System Concepts 10th",
    bookImg: operatingSystem,
    count: 12,
    id_subbook: "CS103",
    Categorie: "Computer Science",
    description:
      "Operating System Concepts 10th Edition is a foundational textbook on operating system principles. Covering topics such as processes, memory management, file systems, and security, this book is essential for understanding the core concepts that govern modern computer systems.",
  },
  {
    id: 4,
    bookName: "Artificial Intelligence: A Modern Approach",
    bookImg: AiBook,
    count: 12,
    id_subbook: "CS103",
    Categorie: "Computer Science",
    description:
      "Embark on a journey through the realms of Artificial Intelligence with Artificial Intelligence: A Modern Approach. This book introduces readers to AI techniques such as machine learning, natural language processing, and robotics, making it a comprehensive resource for students and professionals alike.",
  },
  {
    id: 5,
    bookName: "Algorithm Fourth Edition",
    bookImg: AlgoImg,
    count: 12,
    id_subbook: "CS103",
    Categorie: "Computer Science",
    description:
      "Algorithm Fourth Edition is a must-have guide for mastering algorithms and data structures. With detailed explanations, pseudocode, and practical examples, this book covers essential topics like sorting algorithms, graph algorithms, and dynamic programming, making it an invaluable resource for programmers.",
  },
  {
    id: 6,
    bookName: "Algorithm Fourth Edition",
    bookImg: AlgoImg,
    count: 12,
    id_subbook: "CS103",
    Categorie: "Computer Science",
    description:
      "Delve into the world of algorithms and their applications with Algorithm Fourth Edition. This comprehensive guide covers a wide range of algorithmic techniques, including divide and conquer, greedy algorithms, and backtracking, providing readers with the tools they need to tackle complex computing problems.",
  },
];

export default computerScienceBooks;
