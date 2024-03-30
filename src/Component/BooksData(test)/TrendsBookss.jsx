// im using this array to test the search function before  Creting the backend (Trends Books)
import  AlgoImg from "/src/assets/images/AlgoBook.jpg"
import  Patterns from  "/src/assets/images/DesignPatterns.jpg"
import  operatingSystem from "/src/assets/images/Operating.jpg"
import AiBook from   "/src/assets/images/Ai_book.jpg"


const computerScienceBooks = [
    {
        id: 1,
        bookName: "Introduction to Algorithms",
        bookImg: Patterns,
        count: 10,
        id_subbook: "CS101"
    },
    {
        id: 2,
        bookName: "Design Patterns: Elements of Reusable Object-Oriented Software",
        bookImg: Patterns,
        count: 8,
        id_subbook: "CS102"
    },
    {
        id: 3,
        bookName: "The Pragmatic Programmer: Your Journey to Mastery",
        bookImg: operatingSystem,
        count: 12,
        id_subbook: "CS103"
        
    },
    {
        id: 4,
        bookName: "The Pragmatic Programmer: Your Journey to Mastery",
        bookImg: AiBook,
        count: 12,
        id_subbook: "CS103"
        
    },
 
    {
        id: 5,
        bookName: "The Pragmatic Programmer: Your Journey to Mastery",
        bookImg: AlgoImg,
        count: 12,
        id_subbook: "CS103"
        
    },
    {
        id: 6,
        bookName: "The Pragmatic Programmer: Your Journey to Mastery",
        bookImg: AlgoImg,
        count: 12,
        id_subbook: "CS103"
        
    },
  
    
  

];

export default computerScienceBooks;

