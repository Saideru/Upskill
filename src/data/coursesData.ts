import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'csharp',
    name: 'C#',
    tagline: 'Build Real Software with Microsoft\'s Powerhouse Language',
    primaryUse: 'Games & Enterprise Apps',
    duration: '15 Hours',
    difficulty: 'Beginner',
    lessonsCount: 10,
    color: '#A855F7',
    textColor: 'text-purple-400',
    description: 'Master C# from scratch. C# is a modern, object-oriented language that enables developers to build secure, robust applications operating in the .NET ecosystem—from enterprise web applications to Unity 3D games.',
    whyLearn: [
      'Industry standard support: Managed by Microsoft and utilized in thousands of Fortune 500 enterprises.',
      'Game Development Powerhouse: The primary scripting language for Unity, the world\'s leading game engine.',
      'Rich ecosystem: Cross-platform development on Windows, macOS, and Linux with the .NET runtime.',
      'Excellent job prospects and higher starting salaries for .NET enterprise developers.'
    ],
    realWorldUseCases: [
      'Enterprise business applications and RESTful Web APIs.',
      'AAA and indie indie game development using Unity.',
      'Cross-platform desktop native software (WPF, WinForms, MAUI).'
    ],
    whoIsThisFor: [
      'Absolute beginners wanting a secure, typed, professional language.',
      'Aspiring game developers looking to enter Unity development.',
      'CS students looking to build high-scale, commercial web backend servers.'
    ],
    capstone: {
      title: 'Console-Based Task Manager CLI (CRUD + File Storage)',
      description: 'Build a production-grade Console Application in C# that supports task creation, updating, completion marking, list filtering, and persistent state saving using standard JSON local file storage.',
      difficulty: 'Beginner',
      skillsApplied: ['Classes & inheritance', 'LINQ query syntax', 'File I/O operations', 'Try-Catch safe exceptions', 'Lists & collections'],
      steps: [
        'Initialize the Task class with properties: Id (guid), Title, Description, IsCompleted, and CreatedAt.',
        'Implement the TaskRepository class that reads and writes a list of Tasks to "tasks.json" file.',
        'Create a CLI loop supporting menu operations (1. View Tasks, 2. Add Task, 3. Toggle Completion, 4. Delete, 5. Exit).',
        'Use LINQ queries to filter tasks based on completed vs pending states.',
        'Apply strong exception handling when writing files to disk to prevent state corruption.'
      ],
      starterCode: `using System;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("=== UPSKILL Task Manager Capstone ===");
        // Your code goes here
    }
}`,
      mockupDescription: 'Console window with a stylized CLI menu displaying colored task bullets, counts, and instant persistence feedback upon task mutation.',
      badgeUrl: '/badges/csharp-capstone.png'
    },
    lessons: [
      {
        id: 'part-1',
        partNumber: 1,
        title: 'Getting Started with C#',
        estimatedReadTime: '12 min',
        topics: ['Install VS / VS Code', 'Hello World', '.NET Runtime', 'Program Structure'],
        keyTopicsExplanation: 'C# is a statically typed, compiled language. Your source code (.cs) is compiled into Intermediate Language (IL) which is executed by the Common Language Runtime (CLR).',
        sections: [
          {
            title: 'Welcome to C# & .NET',
            type: 'text',
            content: 'C# is clean, powerful, and modern. To start, you need the .NET SDK. When you run `dotnet run`, the program compiles and executes in the CLR virtual environment. Every C# console app starts at the Main method inside a Class or uses modern top-level statements.'
          },
          {
            title: 'Your First Hello World Script',
            type: 'code',
            content: 'Here is the classic entry point structure for a C# Console Application:',
            codeSnippet: {
              language: 'csharp',
              code: `using System;

namespace UpskillApp {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello, UPSKILL Learner!");
        }
    }
}`,
              explanation: 'The using directive imports the System namespace. Main is the entry point method where console execution begins.'
            }
          },
          {
            title: 'Pro Tip: Top-Level Statements',
            type: 'callout',
            content: 'In modern C# (9.0+), you can write scripts without the boilerplate. A single file can just contain `Console.WriteLine("Hello World");` without Namespace or Class, which is ideal for rapid scripting.',
            calloutType: 'tip'
          },
          {
            title: 'Where do we see C# in Action?',
            type: 'real-world',
            content: 'Next time you load up a Unity game (like Hearthstone or Hollow Knight), you are executing millions of lines of custom C# scripting code compiled to run at maximum native speed!'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What runtime engine executes compiled C# Intermediate Language (IL) code?',
            options: ['Java Virtual Machine (JVM)', 'Common Language Runtime (CLR)', 'V8 engine', 'Roslyn Compiler'],
            correctAnswerIndex: 1,
            explanation: 'The Common Language Runtime (CLR) is the virtual machine runtime of .NET that compiles IL into machine code on-the-fly (JIT compilation).'
          }
        ],
        keyTakeaways: [
          'The .NET SDK is the toolchain required to compile and run C# programs.',
          'Main() is the absolute standard starting line of a C# console program.',
          'C# is type-safe, meaning every variable must declare its type.'
        ],
        codeTemplate: `using System;

class Program {
    static void Main() {
        // Write standard C# statement to print "Learning" below!
        Console.WriteLine("Learning");
    }
}`,
        codeSolution: 'Console.WriteLine("Learning");',
        expectedOutput: 'Learning'
      },
      {
        id: 'part-2',
        partNumber: 2,
        title: 'Variables & Data Types',
        estimatedReadTime: '10 min',
        topics: ['int, string, bool, double', 'type casting', 'constants', 'var syntax'],
        keyTopicsExplanation: 'In C#, variables represent named storage locations with specific sizes and layouts in computer memory.',
        sections: [
          {
            title: 'Declaring Variables in C#',
            type: 'text',
            content: 'Because C# is statically typed, you specify the type of variable upon declaration. C# also has an implicit type identifier `var` where the compiler infers the correct type based on initialization values.'
          },
          {
            title: 'Common C# Types Example',
            type: 'code',
            content: 'Let\'s declare whole numbers, text, decimal values, and static constants:',
            codeSnippet: {
              language: 'csharp',
              code: `int age = 22;
string name = "Siedel";
double score = 94.5;
bool isGraduated = false;
const double Pi = 3.14159; // can't be changed

// Implicit declaration
var speed = 120; // compiler infers int`,
              explanation: 'Always use const for values that must never change during execution.'
            }
          },
          {
            title: 'Type Safety Warning',
            type: 'callout',
            content: 'You cannot re-assign a variable to a different type. Assigning a string literal to an int variable declared with var will cause a strict compile-time error.',
            calloutType: 'warning'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which keyword allows you to declare a variable without explicitly naming its type, relying instead on compiler auto-inference?',
            options: ['let', 'const', 'var', 'dynamic'],
            correctAnswerIndex: 2,
            explanation: 'The `var` keyword instructs the C# compiler to infer the variable type from its initialization value at compile time.'
          }
        ],
        keyTakeaways: [
          'Basic numeric types include int (integer) and double (high-precision floating point).',
          'Use static const keyword to construct values that are fixed forever.'
        ],
        codeTemplate: `using System;

class Program {
    static void Main() {
        // Declare an integer variable of name 'xp' assigned to 100
        int xp = 100;
        Console.WriteLine(xp);
    }
}`,
        codeSolution: 'int xp = 100;',
        expectedOutput: '100'
      },
      {
        id: 'part-3',
        partNumber: 3,
        title: 'Control Flow',
        estimatedReadTime: '11 min',
        topics: ['if/else', 'switch statements', 'ternary operator', 'nested conditions'],
        keyTopicsExplanation: 'Conditional instructions direct execution paths depending on boolean logic comparisons.',
        sections: [
          {
            title: 'Selecting execution paths',
            type: 'text',
            content: 'Use standard if-else comparison chains to direct behavior based on binary evaluations. For multi-branch integer, string, or enum checks, the switch statement provides clear readability.'
          },
          {
            title: 'Decisions in Code',
            type: 'code',
            content: 'An illustrative look at checking values:',
            codeSnippet: {
              language: 'csharp',
              code: `int score = 85;

if (score >= 90) {
    Console.WriteLine("A Grade!");
} else if (score >= 80) {
    Console.WriteLine("B Grade!");
} else {
    Console.WriteLine("Other");
}

// Ternary shorthand
string status = score >= 50 ? "Pass" : "Fail";`,
              explanation: 'A quick condition resolver. Clean syntax minimizes clutter.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the shorthand syntax structure for if-else representation in assignments?',
            options: ['switch block', 'ternary operator (condition ? true : false)', 'lambda arrow', 'if-only check'],
            correctAnswerIndex: 1,
            explanation: 'The ternary operator (?:) selects one of two values depending on the evaluation of a boolean expression.'
          }
        ],
        keyTakeaways: [
          'Ternary conditional expressions keep assignments short.',
          'Always group code blocks with curly bracket braces { } to maintain block scope.'
        ],
        codeTemplate: `using System;

class Program {
    static void Main() {
        int age = 20;
        // Print "Adult" if age is greater or equal to 18, else print "Minor" using an if-else!
        if (age >= 18) {
            Console.WriteLine("Adult");
        } else {
            Console.WriteLine("Minor");
        }
    }
}`,
        expectedOutput: 'Adult'
      },
      {
        id: 'part-4',
        partNumber: 4,
        title: 'Loops & Iteration',
        estimatedReadTime: '13 min',
        topics: ['for', 'while', 'do-while', 'foreach', 'break/continueKeywords'],
        keyTopicsExplanation: 'Loops let us repeat instructions securely until a specific boundary condition is satisfied.',
        sections: [
          {
            title: 'Four ways to iterate',
            type: 'text',
            content: 'C# supports typical iteration styles: standard counted `for`, logic-guarded `while`, reverse `do-while` checking, and element-scanned safe `foreach` for reading list elements.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which loop is designed specifically for safe, read-only iteration over collection elements without indexes?',
            options: ['for loop', 'while loop', 'do-while loop', 'foreach loop'],
            correctAnswerIndex: 3,
            explanation: 'The `foreach` loop provides clean, read-only syntax over any array or enumerable collection.'
          }
        ],
        keyTakeaways: [
          'Use foreach when you just need to inspect elements sequentially.',
          'Ensure loop step index changes to avoid infinite loop crashes.'
        ],
        codeTemplate: `using System;

class Program {
    static void Main() {
        // Run a loop printing numbers from 1 to 3
        for(int i = 1; i <= 3; i++) {
            Console.WriteLine(i);
        }
    }
}`,
        expectedOutput: "1\n2\n3"
      },
      {
        id: 'part-5',
        partNumber: 5,
        title: 'Methods & Functions',
        estimatedReadTime: '12 min',
        topics: ['Declaring methods', 'Parameters & arguments', 'Return types', 'Method overloading'],
        keyTopicsExplanation: 'Methods are isolated code modules built inside classes to encapsulate repeatable operations.',
        sections: [
          {
            title: 'Structuring Subroutines',
            type: 'text',
            content: 'Every method must declare its access level, static state, return type, name, and typed inputs. Under method overloading, multiple methods can share a name if their signatures uniquely differ.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is method overloading?',
            options: ['Calling a method recursively until a crash occurs', 'Declaring multiple methods with the exact same name but different signatures', 'Overriding base class methods', 'Passing too many parameters to a single method'],
            correctAnswerIndex: 1,
            explanation: 'Method overloading allows separate methods in the same class to share a name if their parameter types/counts differ.'
          }
        ],
        keyTakeaways: [
          'Use void keyword when a method does not return a value.',
          'Method signature is defined by its name and typed parameter list.'
        ],
        codeTemplate: `using System;

class Program {
    static int DoubleNumber(int x) {
        return x * 2;
    }
    static void Main() {
        Console.WriteLine(DoubleNumber(5));
    }
}`,
        expectedOutput: '10'
      },
      {
        id: 'part-6',
        partNumber: 6,
        title: 'Object-Oriented Programming',
        estimatedReadTime: '15 min',
        topics: ['Classes & objects', 'Constructors', 'Properties & encap', 'Access modifiers'],
        keyTopicsExplanation: 'OOP structures software conceptually by representing physical entities or logical modules as objects with data fields and procedural scopes.',
        sections: [
          {
            title: 'Building Blueprints',
            type: 'text',
            content: 'A Class is the plan. An Object is the instance built in active memory. Getters & setters are managed cleanly with automatic properties, wrapping access safely.'
          },
          {
            title: 'C# Class Example',
            type: 'code',
            content: 'Look at this clean class statement:',
            codeSnippet: {
              language: 'csharp',
              code: `public class Course {
    // Encapsulated Automatic Property
    public string Title { get; set; }
    
    // Custom Constructor
    public Course(string title) {
        Title = title;
    }
}`,
              explanation: 'Properties with auto getters and setters prevent direct field exposure.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which access modifier hides fields or methods from any code outside of its enclosing class?',
            options: ['public', 'private', 'protected', 'internal'],
            correctAnswerIndex: 1,
            explanation: '`private` specifies that members are only accessible within the body of the class that declares them.'
          }
        ],
        keyTakeaways: [
          'Classes define properties for state and methods for behavior.',
          'Constructors populate variables when object creation is triggered with new.'
        ],
        codeTemplate: `using System;

class Rocket {
    public string Name { get; set; }
    public Rocket(string name) { Name = name; }
}

class Program {
    static void Main() {
        Rocket r = new Rocket("Apollo");
        Console.WriteLine(r.Name);
    }
}`,
        expectedOutput: 'Apollo'
      },
      {
        id: 'part-7',
        partNumber: 7,
        title: 'Inheritance & Polymorphism',
        estimatedReadTime: '13 min',
        topics: ['Base and Derived classes', 'virtual/override', 'interfaces', 'abstract classes'],
        keyTopicsExplanation: 'We maximize content reuse and dynamic operations by establishing class lineages and operational templates.',
        sections: [
          {
            title: 'Hierarchical Layouts',
            type: 'text',
            content: 'Derived classes acquire parents capabilities with class inheritance. Virtual methods let child objects dynamically redefine custom actions. Interfaces outline strict specifications without state details.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which keyword is required in a parent method definition to allow it to be overridden in a child class?',
            options: ['new', 'override', 'virtual', 'abstract'],
            correctAnswerIndex: 2,
            explanation: 'The `virtual` keyword tells the compiler that derived classes are allowed to override this method with their own custom logic.'
          }
        ],
        keyTakeaways: [
          'Inheritance is single-parent in C#; classes can inherit from only one class.',
          'Interfaces allow multiple contracts to be implemented simultaneously on a single class.'
        ],
        codeTemplate: `using System;

class Animal {
    public virtual void Speak() { Console.WriteLine("Noise"); }
}
class Dog : Animal {
    public override void Speak() { Console.WriteLine("Woof"); }
}

class Program {
    static void Main() {
        Animal d = new Dog();
        d.Speak();
    }
}`,
        expectedOutput: 'Woof'
      },
      {
        id: 'part-8',
        partNumber: 8,
        title: 'Collections & LINQ',
        estimatedReadTime: '14 min',
        topics: ['Lists & Dictionaries', 'LINQ queries', 'lambda expressions', 'arrays'],
        keyTopicsExplanation: 'Language Integrated Query (LINQ) is an industry-defining capability in C# to query collections filter data declaratively.',
        sections: [
          {
            title: 'The power of LINQ',
            type: 'text',
            content: 'Using Lists and Dictionaries organizes structured entries. LINQ introduces quick, SQL-like statement querying that transforms list inspection.'
          },
          {
            title: 'LINQ Query Example',
            type: 'code',
            content: 'Filtering high values easily:',
            codeSnippet: {
              language: 'csharp',
              code: `using System.Linq;
using System.Collections.Generic;

List<int> numbers = new List<int> { 2, 8, 12, 19, 25 };
var overTen = numbers.Where(n => n > 10).ToList();`,
              explanation: 'The where extension queries and retains items above 10 smoothly.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What does the acronym LINQ stand for in .NET environment?',
            options: ['Linear Query Interface', 'Linked Network Queries', 'Language Integrated Query', 'List Iteration Network Quick'],
            correctAnswerIndex: 2,
            explanation: 'LINQ stands for Language Integrated Query. It bridges memory querying directly with standard C# source statements.'
          }
        ],
        keyTakeaways: [
          'LINQ simplifies filtering collections without verbose nesting loops.',
          'Use lists instead of arrays when the item count is dynamic.'
        ],
        codeTemplate: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        int[] numbers = {1, 2, 3, 4, 5};
        // Print sum of numbers using LINQ Sum()!
        Console.WriteLine(numbers.Sum());
    }
}`,
        expectedOutput: '15'
      },
      {
        id: 'part-9',
        partNumber: 9,
        title: 'File I/O & Exception Handling',
        estimatedReadTime: '12 min',
        topics: ['try/catch/finally', 'reading & writing folders', 'custom exceptions', 'streams'],
        keyTopicsExplanation: 'Software should safely handle external system disk failures, network drops, and operational exceptions without crashing completely.',
        sections: [
          {
            title: 'Safe IO operations',
            type: 'text',
            content: 'Try-catch blocks intercept execution errors. Write file bytes using System.IO.File utils which provide speedy, automatic connection handles to streams.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What block always runs execution regardless of whether an exception occurred inside try-catch structure or not?',
            options: ['catch', 'finally', 'try', 'throw'],
            correctAnswerIndex: 1,
            explanation: 'The `finally` block is executed unconditionally at the end of resource extraction to close variables, database states, and files.'
          }
        ],
        keyTakeaways: [
          'Always use write limits or try-catch routines on IO operations.',
          'The finally directive guarantees disk connection shutdown.'
        ],
        codeTemplate: `using System;

class Program {
    static void Main() {
        try {
            int x = 0;
            int y = 5 / x;
        } catch (DivideByZeroException) {
            Console.WriteLine("Error Caught");
        }
    }
}`,
        expectedOutput: 'Error Caught'
      },
      {
        id: 'part-10',
        partNumber: 10,
        title: 'Capstone Project',
        estimatedReadTime: '20 min',
        topics: ['Project setup', 'CRUD flow logic', 'State serializer saving', 'Testing our CLI'],
        keyTopicsExplanation: 'This capstone builds a professional, modular C# console tool consolidating skills from Parts 1 through 9.',
        sections: [
          {
            title: 'Setting up the App structure',
            type: 'text',
            content: 'Follow the guidelines provided on the Dedicated Project screen. Focus on clean OOP structures and safe File operations.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What namespace contains standard classes for working with File streams and reading/writing records?',
            options: ['System.Text', 'System.IO', 'System.Linq', 'System.ComponentModel'],
            correctAnswerIndex: 1,
            explanation: '`System.IO` is the core namespace in the standard .NET runtime library containing directories, streams, and file management services.'
          }
        ],
        keyTakeaways: [
          'A robust capstone app translates logic steps into standard structural classes.',
          'Consistently handle exceptions to prevent data storage corruption.'
        ],
        codeTemplate: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Task Manager CLI Complete");
    }
}`,
        expectedOutput: 'Task Manager CLI Complete'
      }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    tagline: 'The Language That Powers the World\'s Enterprise & Android Apps',
    primaryUse: 'Enterprise Backends & Android',
    duration: '16 Hours',
    difficulty: 'Beginner',
    lessonsCount: 10,
    color: '#F97316',
    textColor: 'text-orange-400',
    description: 'Understand Java—the highly versatile, write-once-run-anywhere object-oriented language fueling global systems, banking pipelines, and core Google Android frameworks.',
    whyLearn: [
      'Write Once, Run Anywhere: The Java Virtual Machine (JVM) executes binaries identically on any hardware architectural layout.',
      'Massive global footprint in financial markets, insurance corporations, and scale business operations.',
      'Primary ecosystem background for native mobile development through the Android Studio IDE.',
      'Active community, reliable LTS cycles, and unmatched library availability.'
    ],
    realWorldUseCases: [
      'Enterprise backends in banking systems (spring-boot applications).',
      'Native mobile applications running on Android.',
      'Distributed big-data processing pipelines (Apache Hadoop / Spark).'
    ],
    whoIsThisFor: [
      'Beginners wanting a platform-agnostic, enterprise-ready foundations.',
      'Developers pursuing corporate software roles or Android native engineering.',
      'Academic students wanting to master standard class OOP practices.'
    ],
    capstone: {
      title: 'Student Grade Management System (OOP & Local Disk Persistence)',
      description: 'Design and assemble a standard Java Console program tracking students, scores, GPA averages, and record storing via serial files.',
      difficulty: 'Beginner',
      skillsApplied: ['Java Class compilation', 'ArrayList & Map structures', 'File Reader buffering', 'Custom constructors', 'Abstract polymorphs'],
      steps: [
        'Initialize Student class encapsulating student metadata (ID, Name, Grades list).',
        'Create a FileHandler service using BufferedReader and BufferedWriter to persist student records as serialized text lines.',
        'Implement calculateGPA logic converting percentage grades to standard GPA ratios.',
        'Create menu interface supporting record insertion, database exports, searches, and analysis views.',
        'Apply strong error-checking around conversion operations and handle IOException blocks safely.'
      ],
      starterCode: `import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Student Grade System ===");
        // Your system implementation goes here
    }
}`,
      mockupDescription: 'Formatted CLI table outlining student entries, averages, color warnings for failing marks, and directory export updates.',
      badgeUrl: '/badges/java-capstone.png'
    },
    lessons: [
      {
        id: 'part-1',
        partNumber: 1,
        title: 'Introduction to Java',
        estimatedReadTime: '13 min',
        topics: ['JDK installation', 'JVM explained', 'Hello World layout', 'The main method'],
        keyTopicsExplanation: 'Java source code (.java) translates to portable bytecode (.class) which runs inside the Java Virtual Machine (JVM).',
        sections: [
          {
            title: 'The JVM Ecosystem explained',
            type: 'text',
            content: 'Java\'s portability is fueled by the VM. We compile files using the compiler `javac`, and execute byte operations via the `java` runner. All operations are structured inside Classes.'
          },
          {
            title: 'Sample Hello World structure',
            type: 'code',
            content: 'A classic starting script block:',
            codeSnippet: {
              language: 'java',
              code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java on UPSKILL!");
    }
}`,
              explanation: 'The class name must match the file name exactly (Main.java). System.out is the output stream console provider.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What runtime engine enables Java compile output bytecode to render identically on different operating systems?',
            options: ['Java Development Kit (JDK)', 'Java Runtime Environment Virtual Library', 'Java Virtual Machine (JVM)', 'Vite native launcher'],
            correctAnswerIndex: 2,
            explanation: 'The JVM (Java Virtual Machine) translates compiled universal bytecode instruction lines into native machinery parameters dynamically on the local OS.'
          }
        ],
        keyTakeaways: [
          'Java class filenames must resolve identically to their internal public class names.',
          'Every program requires an active static void main(String[] args) entry line.'
        ],
        codeTemplate: `public class Main {
    public static void main(String[] args) {
        // Print the word "Java" below using System.out.println!
        System.out.println("Java");
    }
}`,
        expectedOutput: 'Java'
      },
      {
        id: 'part-2',
        partNumber: 2,
        title: 'Variables, Types & Operators',
        estimatedReadTime: '11 min',
        topics: ['Primitives & Objects', 'Arithmetic calculations', 'Logical conditions', 'Type casting rules'],
        keyTopicsExplanation: 'Java has strict primitive types (such as primitive values holding simple data directly) and class Reference objects (such as Strings).',
        sections: [
          {
            title: 'Primitives vs References',
            type: 'text',
            content: 'Primitives (int, double, boolean) reside on the stack memory for ultra-fast arithmetic calculation. Reference Types (String, Arrays, custom classes) are reference pointer instances situated in memory heap.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which of the following data types in Java is classified as an Object Reference type instead of a standard primitive?',
            options: ['int', 'double', 'boolean', 'String'],
            correctAnswerIndex: 3,
            explanation: '`String` tracks character chains as custom objects in Heap memory, whereas int, double, and boolean represent standard low-level primitives.'
          }
        ],
        keyTakeaways: [
          'Integer declarations have boundaries depending on bits assigned.',
          'Use casting indicators (double) to specify fraction conversions on integer variables.'
        ],
        codeTemplate: `public class Main {
    public static void main(String[] args) {
        int level = 8;
        System.out.println(level);
    }
}`,
        expectedOutput: '8'
      },
      {
        id: 'part-3',
        partNumber: 3,
        title: 'Control Structures',
        estimatedReadTime: '12 min',
        topics: ['Conditional branching', 'switch statements', 'Boolean checks', 'Comparison structures'],
        keyTopicsExplanation: 'Redirecting sequence flow depending on boolean checks using simple control structure blocks.',
        sections: [
          {
            title: 'Simple logic matching',
            type: 'text',
            content: 'Java matches normal comparisons (if, else if, else) and switch statements. The modern switch system supports multiple matching rules, simplifying nested structures.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which logical operator represents a logical AND operation where both conditions must resolve to true?',
            options: ['||', '&&', '!', '=='],
            correctAnswerIndex: 1,
            explanation: 'The `&&` double-ampersand joins condition evaluations requiring both criteria to be true.'
          }
        ],
        keyTakeaways: [
          'Nested logical structures are readable when indented clean.',
          'Always use break inside switch segments to prevent default executions flowing downwards.'
        ],
        codeTemplate: `public class Main {
    public static void main(String[] args) {
        int temp = 30;
        if (temp > 25) {
            System.out.println("Warm");
        } else {
            System.out.println("Cold");
        }
    }
}`,
        expectedOutput: 'Warm'
      },
      {
        id: 'part-4',
        partNumber: 4,
        title: 'Loops',
        estimatedReadTime: '11 min',
        topics: ['Counted for loops', 'Conditional while iteration', 'do-while blocks', 'enhanced for-each arrays'],
        keyTopicsExplanation: 'Loops sequentially scan items, repeat calculations, and inspect lists.',
        sections: [
          {
            title: 'Repeating calculations',
            type: 'text',
            content: 'We use the enhanced-for syntax `for(type element : collection)` to extract members safely without managing loop cursors manually.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which loop configuration executes its inner code block at least once before evaluating its conditional checks?',
            options: ['for loop', 'while loop', 'do-while loop', 'for-each loop'],
            correctAnswerIndex: 2,
            explanation: 'A `do-while` loop executes its block of code once, and then repeats the loop as long as the condition is true.'
          }
        ],
        keyTakeaways: [
          'The enhanced for-each iteration ensures cursor memory is guarded from boundaries overflows.',
          'Always plan base exits when writing while loops.'
        ],
        codeTemplate: `public class Main {
    public static void main(String[] args) {
        for(int count = 1; count <= 3; count++) {
            System.out.println(count);
        }
    }
}`,
        expectedOutput: "1\n2\n3"
      },
      {
        id: 'part-5',
        partNumber: 5,
        title: 'Methods & Scope',
        estimatedReadTime: '12 min',
        topics: ['Method properties', 'Parameters passing', 'Instance vs Static scope', 'Return operations'],
        keyTopicsExplanation: 'Methods structure routines cleanly. Static methods operate on structural templates, while instance methods belong to live objects.',
        sections: [
          {
            title: 'Static vs Instance Methods',
            type: 'text',
            content: 'Understand that a static signature means you run the process immediately without triggering the class instantiator with `new` first.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What does the static keyword specify when applied to a class method in Java?',
            options: ['The method CANNOT return a value', 'The method belongs to the Class blueprint itself rather than any specific instantiated object', 'The method is thread-locked', 'The method values cannot be inherited'],
            correctAnswerIndex: 1,
            explanation: '`static` bindings belong to class declarations directly. They are accessed without instant creation of parent objects.'
          }
        ],
        keyTakeaways: [
          'Variable scope is bound inside closest bracket boundaries.',
          'Return values must strictly match program signature types.'
        ],
        codeTemplate: `public class Main {
    public static int add(int a, int b) {
        return a + b;
    }
    public static void main(String[] args) {
        System.out.println(add(3, 4));
    }
}`,
        expectedOutput: '7'
      },
      {
        id: 'part-6',
        partNumber: 6,
        title: 'OOP Part 1 — Classes & Objects',
        estimatedReadTime: '14 min',
        topics: ['Class fields definition', 'Constructors execution', 'Access levels (Modifiers)', 'Getters/Setters setups'],
        keyTopicsExplanation: 'Java OOP isolates instance states and exposes them strictly through access modifiers and methods.',
        sections: [
          {
            title: 'Encapsulating Data properties',
            type: 'text',
            content: 'Enforcing private visibility protects object properties. Public getters & setters allow variables to change value safely with validation rules.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which visibility modifier is applied to class properties to maximize modular data encapsulation?',
            options: ['public', 'private', 'protected', 'default'],
            correctAnswerIndex: 1,
            explanation: 'Declaring fields `private` hides them from direct external tampering, enforcing access strictly through getter/setter services.'
          }
        ],
        keyTakeaways: [
          'Always compile matching getters/setters for properties requiring external modification.',
          'The constructor runs immediately upon invoking new declarations.'
        ],
        codeTemplate: `class User {
    private String name;
    public User(String n) { this.name = n; }
    public String getName() { return this.name; }
}
public class Main {
    public static void main(String[] args) {
        User u = new User("Alice");
        System.out.println(u.getName());
    }
}`,
        expectedOutput: 'Alice'
      },
      {
        id: 'part-7',
        partNumber: 7,
        title: 'OOP Part 2 — Inheritance & Interfaces',
        estimatedReadTime: '13 min',
        topics: ['class inheritance (extends)', 'interface definitions (implements)', 'method overrides', 'super keyword'],
        keyTopicsExplanation: 'Using class extends and dynamic overrides builds highly scalable software hierarchies.',
        sections: [
          {
            title: 'Interfaces and overrides',
            type: 'text',
            content: 'Java utilizes `extends` for base class sharing and `implements` for interface definitions, where non-implemented methods are defined dynamically.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which keyword does a derived class use in Java to execute the constructor method of its superclass?',
            options: ['parent', 'this', 'super', 'base'],
            correctAnswerIndex: 2,
            explanation: 'The `super` operational word allows derived subclasses to trigger constructor methods of base parents.'
          }
        ],
        keyTakeaways: [
          'Java supports singular inheritance patterns (extends) but multiple API contracts implementation (implements).',
          'Annotate overrides with @Override to confirm compile checks.'
        ],
        codeTemplate: `interface Runner {
    void run();
}
class Athlete implements Runner {
    public void run() { System.out.println("Sprinting"); }
}
public class Main {
    public static void main(String[] args) {
        Runner r = new Athlete();
        r.run();
    }
}`,
        expectedOutput: 'Sprinting'
      },
      {
        id: 'part-8',
        partNumber: 8,
        title: 'Collections Framework',
        estimatedReadTime: '14 min',
        topics: ['ArrayList', 'HashMap', 'HashSet', 'Generics structures'],
        keyTopicsExplanation: 'The Java Collections structure supplies fast, pre-built list and key-value storage designs.',
        sections: [
          {
            title: 'Dynamic collections',
            type: 'text',
            content: 'Unlike static, fixed-size standard arrays, `ArrayList` grows as items are appended. `HashMap` organizes data in key-value pairs for rapid lookups.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which interface in Java collections represents key-value associations supporting rapid direct item search?',
            options: ['List', 'Set', 'Map', 'Queue'],
            correctAnswerIndex: 2,
            explanation: '`Map` (and concrete class `HashMap`) links key and values together, facilitating lightning-fast matching lookup workflows.'
          }
        ],
        keyTakeaways: [
          'Use HashSet when you need unique sets of items without repetition.',
          'Specify generics <Type> to enforce compilation checks on array elements.'
        ],
        codeTemplate: `import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        System.out.println(list.get(0));
    }
}`,
        expectedOutput: 'Java'
      },
      {
        id: 'part-9',
        partNumber: 9,
        title: 'Exception Handling & File I/O',
        estimatedReadTime: '12 min',
        topics: ['Try/Catch statements', 'Checked exceptions', 'BufferedReader stream operations', 'Resource auto-close'],
        keyTopicsExplanation: 'Strong exception checks identify failure conditions like missing files or dropped database connections.',
        sections: [
          {
            title: 'Safe IO procedures',
            type: 'text',
            content: 'In Java, checked exceptions are analyzed during compilation. Standard IO stream handlers require try-catch blocks to prevent system crashes.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is a Checked Exception in the Java compilation pipeline?',
            options: ['Exceptions evaluated on runtime crashes only', 'Errors checked during normal compile processes requiring try-catch wrapper', 'Faults ignored by structural compiler', 'Compiler warnings on outdated syntax usage'],
            correctAnswerIndex: 1,
            explanation: 'Checked Exceptions must be explicitly resolved with try-catch blocks or declared in method throws clauses during compile-time verification.'
          }
        ],
        keyTakeaways: [
          'Use modern try-with-resources syntax to automatically close files upon completion.',
          'Always address IO exception states to maintain responsive applications.'
        ],
        codeTemplate: `public class Main {
    public static void main(String[] args) {
        try {
            int val = Integer.parseInt("invalid");
        } catch (NumberFormatException e) {
            System.out.println("Format Error");
        }
    }
}`,
        expectedOutput: 'Format Error'
      },
      {
        id: 'part-10',
        partNumber: 10,
        title: 'Capstone Project',
        estimatedReadTime: '21 min',
        topics: ['Project blueprints', 'Implementation pathways', 'Testing methods', 'Persistence validation'],
        keyTopicsExplanation: 'Completing the Capstone demonstrates mastery of object-oriented concepts, exception management, and resource serialization in Java.',
        sections: [
          {
            title: 'Putting everything together',
            type: 'text',
            content: 'Create your graduation program using lists, streams, and classes. Confirm output structures before finalizing.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What base stream reader is recommended for line-indexed textual reading from file units?',
            options: ['FileWriter', 'BufferedReader', 'FileOutputStream', 'PrintWriter'],
            correctAnswerIndex: 1,
            explanation: '`BufferedReader` aggregates file inputs, offering standard readLine() processes for file-based database scans.'
          }
        ],
        keyTakeaways: [
          'OOP modeling organizes business rules cleanly.',
          'Writing to files persistently retains local data logs across sessions.'
        ],
        codeTemplate: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java System Operational");
    }
}`,
        expectedOutput: 'Java System Operational'
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    tagline: 'The World\'s Most Beginner-Friendly & Versatile Language',
    primaryUse: 'Data Science, ML & Backend APIs',
    duration: '12 Hours',
    difficulty: 'Beginner',
    lessonsCount: 10,
    color: '#3B82F6',
    textColor: 'text-blue-400',
    description: 'Master Python—the leading beginner-friendly language powering artificial intelligence, web scraping, automation, data analytics, and backend APIs across the planet.',
    whyLearn: [
      'Clean readable syntax that reads like standard English, minimizing beginner friction.',
      'Unmatched ecosystem support for ML/AI and Analytics (pandas, numpy, tensorflow).',
      'The Swiss Army Knife of backend: build lightning-fast web APIs with FastAPI, Django, or Flask.',
      'Massive automation power: write clean, robust automation scripts in minutes.'
    ],
    realWorldUseCases: [
      'Machine Learning and generative AI frameworks (PyTorch, TensorFlow).',
      'Web scrapers mining, scanning, and analyzing massive data pipelines.',
      'Robust web applications and server backends (Django, FastAPI).'
    ],
    whoIsThisFor: [
      'Absolute beginners looking to learn core programming logic quickly.',
      'Aspiring data analysts, AI developers, and machine learning scientists.',
      'System administrators wanting to automate manual server configurations.'
    ],
    capstone: {
      title: 'Personal Expense Tracker CLI (with CSV Export)',
      description: 'Build a fully operational CLI tool in Python supporting expense logging, monthly category budgets, list filtering, and local data persistence via structured CSV spreadsheets.',
      difficulty: 'Beginner',
      skillsApplied: ['Function definition & arguments', 'List comprehensions', 'CSV file operations', 'Dictionary nesting', 'Error exception blocks'],
      steps: [
        'Organize an active CLI shell loop accepting user instructions (Add, View, Budget Warning, Export, Exit).',
        'Use dictionaries to structure data (amount, category, description, date).',
        'Implement CSV writer processes exporting entries locally list-by-list.',
        'Apply Python list comprehensions to calculate total spent within defined filters/categories.',
        'Validate inputs so non-numeric dollar amounts display friendly print statements instead of crashing.'
      ],
      starterCode: `import csv
from datetime import datetime

def main():
    print("=== UPSKILL Python Expense Tracker CLI ===")
    # Your program code goes here

if __name__ == "__main__":
    main()`,
      mockupDescription: 'Formatted CLI outputs outlining logged spending, budget warnings, and target CSV exports in directory systems.',
      badgeUrl: '/badges/python-capstone.png'
    },
    lessons: [
      {
        id: 'part-1',
        partNumber: 1,
        title: 'Welcome to Python',
        estimatedReadTime: '10 min',
        topics: ['Install Python', 'VS Code details', 'Hello World', 'Python philosophy'],
        keyTopicsExplanation: 'Python is an interpreted, dynamically-typed language that uses indentation instead of curly braces to define structural code blocks.',
        sections: [
          {
            title: 'Welcome to pythonic coding',
            type: 'text',
            content: 'Python values brevity. Its design guidelines, "The Zen of Python", emphasize readability, simplicity, and clarity. Code blocks are defined strictly using whitespace indentation.'
          },
          {
            title: 'The classic script starting point',
            type: 'code',
            content: 'Write operations immediately without main wrappers:',
            codeSnippet: {
              language: 'python',
              code: `print("Welcome to UPSKILL Python!")`,
              explanation: 'In Python, a single line of code can immediately print variables to the screen.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the primary visual method Python uses to define the scope and nesting of control flow blocks?',
            options: ['Curly braces { }', 'Semicolons ;', 'Indent spacing / Whitespace', 'Parentheses ( )'],
            correctAnswerIndex: 2,
            explanation: 'Python uses consistent whitespace indentation instead of braces to identify execution blocks and scope loops/conditionals.'
          }
        ],
        keyTakeaways: [
          'Python uses interpreters, running scripts top-to-bottom sequentially.',
          'Consistently format code with 4 spaces per indentation level.'
        ],
        codeTemplate: `# Write a standard python print line displaying "Python" below!
print("Python")`,
        expectedOutput: 'Python'
      },
      {
        id: 'part-2',
        partNumber: 2,
        title: 'Variables & Data Types',
        estimatedReadTime: '9 min',
        topics: ['int & float', 'str operations', 'bool checks', 'dynamic typing'],
        keyTopicsExplanation: 'In Python, types are bound to the values themselves, not to the variable labels. This behavior is called dynamic typing.',
        sections: [
          {
            title: 'Dynamic variables',
            type: 'text',
            content: 'Variables are assigned instantly using the assignment operator `=`. Check variable data types dynamically using the built-in type() function.'
          },
          {
            title: 'Python Types Examples',
            type: 'code',
            content: 'Variables are initialized instantly:',
            codeSnippet: {
              language: 'python',
              code: `age = 22
score = 98.6 # float
name = "Siedel"
is_active = True

print(type(score)) # Outputs <class 'float'>`,
              explanation: 'Variables can change types freely in Python because it uses dynamic reference bindings.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the dynamic type evaluation category of Python variables?',
            options: ['Statically typed', 'Dynamically typed', 'Untyped', 'Explicitly casted'],
            correctAnswerIndex: 1,
            explanation: 'Python is dynamically typed. This means variable tags link instantly to memory objects types without permanent upfront definitions.'
          }
        ],
        keyTakeaways: [
          'Common numeric classes include int (whole integers) and float (decimal details).',
          'Combine text segments dynamically using f-string string interpolation: f"Hello {name}".'
        ],
        codeTemplate: `# Instantiate a variable named 'score' set to 95 and print it
score = 95
print(score)`,
        expectedOutput: '95'
      },
      {
        id: 'part-3',
        partNumber: 3,
        title: 'Control Flow',
        estimatedReadTime: '10 min',
        topics: ['if/elif/else statements', 'Comparison rules', 'Logical operations', 'Truthy vs Falsy variables'],
        keyTopicsExplanation: 'Python processes logic decisions using standard if, elif, and else statements.',
        sections: [
          {
            title: 'Logical matches',
            type: 'text',
            content: 'Python uses logical keywords `and`, `or`, and `not` instead of binary characters. It checks comparison conditions cleanly using simple structural blocks.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which comparison keyword does Python use to evaluate structural "else if" conditions?',
            options: ['else if', 'elseif', 'elif', 'switch'],
            correctAnswerIndex: 2,
            explanation: 'Python uses the keyword `elif` for consecutive conditional matches, keeping code blocks readable and clean.'
          }
        ],
        keyTakeaways: [
          'Evaluate conditional boundaries using comparison operators like ==, >, and <=.',
          'Always append colon characters : at the end of block headers.'
        ],
        codeTemplate: `temp = 32
# Write if block checking if temp is greater than 30, print "Hot", else print "Cool"
if temp > 30:
    print("Hot")
else:
    print("Cool")`,
        expectedOutput: 'Hot'
      },
      {
        id: 'part-4',
        partNumber: 4,
        title: 'Loops & Comprehensions',
        estimatedReadTime: '11 min',
        topics: ['for iteration', 'while states', 'range() utilities', 'List comprehensions'],
        keyTopicsExplanation: 'Create and filter lists efficiently using one-line, readable list comprehensions.',
        sections: [
          {
            title: 'Advanced list operations',
            type: 'text',
            content: 'List comprehensions offer a highly readable, compact syntax to process list elements in a single line of code.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the output of the list comprehension: [x*2 for x in [1, 2, 3]]?',
            options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'Error syntax'],
            correctAnswerIndex: 1,
            explanation: 'The list comprehension iterates over each element in the input list, doubles its value, and returns a new list: [2, 4, 6].'
          }
        ],
        keyTakeaways: [
          'Use the range(start, stop) function to spawn numeric sequences automatically.',
          'List comprehensions replace verbose nested loops.'
        ],
        codeTemplate: `# Output numbers 1 to 3 using range in loop!
for i in range(1, 4):
    print(i)`,
        expectedOutput: "1\n2\n3"
      },
      {
        id: 'part-5',
        partNumber: 5,
        title: 'Functions',
        estimatedReadTime: '11 min',
        topics: ['Function definition with def', 'Arguments & Return keywords', 'Variable *args & **kwargs parameters', 'Lambda functions'],
        keyTopicsExplanation: 'Functions organize code into modular, reusable blocks. Define functions using the def keyword.',
        sections: [
          {
            title: 'Declaring subroutines',
            type: 'text',
            content: 'Functions accept input values and return output parameters. Pass dynamic lists matching arguments using standard parameter syntax.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which keyword is used to declare a function in Python?',
            options: ['function', 'def', 'func', 'void'],
            correctAnswerIndex: 1,
            explanation: 'The keyword `def` introduces a function definition in Python.'
          }
        ],
        keyTakeaways: [
          'Functions execute code blocks only when called explicitly.',
          'Define default arguments to handle missing parameters gracefully.'
        ],
        codeTemplate: `def double_me(x):
    return x * 2

print(double_me(4))`,
        expectedOutput: '8'
      },
      {
        id: 'part-6',
        partNumber: 6,
        title: 'Data Structures',
        estimatedReadTime: '12 min',
        topics: ['Lists operations', 'Tuples attributes', 'Dictionaries setups', 'Sets uniqueness'],
        keyTopicsExplanation: 'Python has versatile built-in structures: ordered lists, key-value dictionaries, unique sets, and write-protected tuples.',
        sections: [
          {
            title: 'Dictionaries and lists',
            type: 'text',
            content: 'Dictionaires represent unstructured JSON-like key-value structures. Lists hold ordered values, while tuples are immutable once created.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which of the following structure classes is immutable and cannot be modified once declared?',
            options: ['List', 'Dictionary', 'Set', 'Tuple'],
            correctAnswerIndex: 3,
            explanation: '`Tuple` instances are immutable. This makes them ideal for representing data that must never change during execution.'
          }
        ],
        keyTakeaways: [
          'Use dictionaries for rapid, key-value lookup operations.',
          'Lists can grow and store different types simultaneously.'
        ],
        codeTemplate: `my_list = [1, 2]
my_list.append(3)
print(my_list)`,
        expectedOutput: '[1, 2, 3]'
      },
      {
        id: 'part-7',
        partNumber: 7,
        title: 'OOP in Python',
        estimatedReadTime: '13 min',
        topics: ['Class objects setup', 'The __init__ method', 'The self reference parameter', 'Inheritance methods'],
        keyTopicsExplanation: 'Classes serve as templates to create objects. The self parameter references the currently active object instance.',
        sections: [
          {
            title: 'Object methods and init structures',
            type: 'text',
            content: 'The custom `__init__` constructor method initializes class fields when new object instances are created.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the purpose of the "self" parameter inside class constructor methods?',
            options: ['It copies class variables', 'It references the current instance of the class', 'It represents a global state controller', 'It defines a static scope'],
            correctAnswerIndex: 1,
            explanation: '`self` links class methods specifically to the active object instance currently executing the program.'
          }
        ],
        keyTakeaways: [
          'Use double underscore constructor lines (__init__) to initialize instance properties.',
          'Child classes inherit methods and attributes from parent classes.'
        ],
        codeTemplate: `class Dog:
    def __init__(self, name):
        self.name = name

d = Dog("Buddy")
print(d.name)`,
        expectedOutput: 'Buddy'
      },
      {
        id: 'part-8',
        partNumber: 8,
        title: 'Modules, Packages & pip',
        estimatedReadTime: '11 min',
        topics: ['import operations', 'Standard Library modules', 'Installing packages via pip', 'Virtual Environments'],
        keyTopicsExplanation: 'Modules organize code across files. Install third-party packages from PyPI using pip.',
        sections: [
          {
            title: 'Using pip and modules',
            type: 'text',
            content: 'Import modules using the `import` statement. Virtual environments (venvs) keep project dependencies isolated.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What tool is the standard package installer for Python libraries and modules?',
            options: ['npm', 'pip', 'apt-get', 'homebrew'],
            correctAnswerIndex: 1,
            explanation: '`pip` acts as the standard package manager to search, download, and install Python packages from the PyPI directory.'
          }
        ],
        keyTakeaways: [
          'Use import math or similar imports to access built-in tools.',
          'Isolate project dependencies using local virtual environments.'
        ],
        codeTemplate: `import math
print(math.floor(2.6))`,
        expectedOutput: '2'
      },
      {
        id: 'part-9',
        partNumber: 9,
        title: 'File Handling & Error Handling',
        estimatedReadTime: '11 min',
        topics: ['open() utilities', 'File text reader streams', 'try/except error blocks', 'Context managers blocks'],
        keyTopicsExplanation: 'Handle errors gracefully using try-except blocks. Use context managers (`with`) to open and close files safely.',
        sections: [
          {
            title: 'Context managers and errors',
            type: 'text',
            content: 'The with statement runs context managers that open files, read stream contents, and ensure the file handles close automatically.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Why is using the "with" statement recommended when opening and reading local files?',
            options: ['It executes the program faster', 'It automatically handles closing the file stream even when exceptions occur', 'It encrypts local file paths', 'It prevents read errors'],
            correctAnswerIndex: 1,
            explanation: 'The `with` statement utilizes context management to guarantee that file handles close automatically, avoiding memory and stream leaks.'
          }
        ],
        keyTakeaways: [
          'try-except structures isolate and handle runtime errors gracefully.',
          'Specify explicit exception classes to target error responses.'
        ],
        codeTemplate: `try:
    x = 1 / 0
except ZeroDivisionError:
    print("Zero error")`,
        expectedOutput: 'Zero error'
      },
      {
        id: 'part-10',
        partNumber: 10,
        title: 'Capstone Project',
        estimatedReadTime: '22 min',
        topics: ['Logic configuration', 'State data saving', 'Testing script logic', 'Export formatting checks'],
        keyTopicsExplanation: 'This Capstone builds a complete CLI Expense Tracker in Python, applying variables, lists, dictionaries, exception handling, and file operations.',
        sections: [
          {
            title: 'Structuring the script',
            type: 'text',
            content: 'Reference constraints and requirements configured globally inside your Capstone Workspace.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which module provides native utilities to read and write spreadsheet formats in Python?',
            options: ['os', 'sys', 'csv', 'json'],
            correctAnswerIndex: 2,
            explanation: 'The `csv` standard library supplying reader/writer configurations executes spreadsheet formatting automatically.'
          }
        ],
        keyTakeaways: [
          'A robust capstone app translates logic steps into standard structural classes.',
          'Consistently handle exceptions to prevent data storage corruption.'
        ],
        codeTemplate: `print("Python System Finalized")`,
        expectedOutput: 'Python System Finalized'
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    tagline: 'The Language of the Web — Front to Back',
    primaryUse: 'Browser Interactivity & NodeJS',
    duration: '11 Hours',
    difficulty: 'Beginner',
    lessonsCount: 10,
    color: '#EAB308',
    textColor: 'text-yellow-400',
    description: 'Master JavaScript—the language of the web. JavaScript adds interactivity in browsers, drives modern frontend frameworks, and structures high-performance servers with Node.js.',
    whyLearn: [
      'The native language of the web: supported out-of-the-box by every browser on Earth.',
      'Full-stack powerhouse: write JS on-the-client and on-the-server (Node.js/Express).',
      'The massive core foundation behind React, Next.js, Angular, and Vue.',
      'High starting job salaries and thousands of open job roles globally.'
    ],
    realWorldUseCases: [
      'Building interactive, fluid user interfaces inside brower frames.',
      'Constructing real-time WebSocket chat and backend APIs (Node.js/Express).',
      'Developing cross-platform mobile apps using React Native.'
    ],
    whoIsThisFor: [
      'Aspiring web developers wanting to build stunning frontend websites.',
      'Absolute beginners seeking a flexible, visual, high-impact language.',
      'Developers transitioning into modern full-stack web engineering.'
    ],
    capstone: {
      title: 'Interactive Weather App (fetching external RESTful Web APIs)',
      description: 'Design and assemble a sleek frontend utility in JavaScript that communicates with OpenWeatherMap APIs to fetch real-world meteorological reports and update DOM styles dynamically.',
      difficulty: 'Beginner',
      skillsApplied: ['Async/Await & Promises', 'querySelector DOM bindings', 'API fetch request proxying', 'JSON state destructuring', 'localStorage caching'],
      steps: [
        'Build a layout with an input form, search buttons, result cards, and loading skeletons.',
        'Hook submit events resolving typed location values cleanly.',
        'Assemble a fetch request querying weather payloads under try-catch blocks.',
        'Inject HTML text dynamically inside parent divs using querySelectors.',
        'Store recent searches inside local browser storage to persist states across refreshes.'
      ],
      starterCode: `async function fetchWeather(city) {
    const API_KEY = "YOUR_API_KEY";
    try {
        const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&units=metric&appid=\${API_KEY}\`);
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.error("Failed to fetch weather data:", err);
    }
}`,
      mockupDescription: 'Modern dashboard featuring responsive, animated panels displaying temperature gauges, wind speeds, and custom weather icons.',
      badgeUrl: '/badges/javascript-capstone.png'
    },
    lessons: [
      {
        id: 'part-1',
        partNumber: 1,
        title: 'JavaScript Fundamentals',
        estimatedReadTime: '9 min',
        topics: ['Script tag imports', 'console.log outputs', 'variables (let vs const)', 'primitive data types'],
        keyTopicsExplanation: 'JavaScript is a high-level, lightweight, interpreted language that drives web browser interactivity.',
        sections: [
          {
            title: 'Welcome to JavaScript',
            type: 'text',
            content: 'JavaScript executes top-down directly inside browsers. Use the `console.log()` command to print debug values to your browser inspect terminal.'
          },
          {
            title: 'Declaring browser variables',
            type: 'code',
            content: 'In modern JS, avoid using var. Prefer let for mutable variables and const for fixed variables:',
            codeSnippet: {
              language: 'javascript',
              code: `const platform = "UPSKILL";
let score = 94;
score = 95; // allowed

console.log("Welcome to " + platform + " score is: " + score);`,
              explanation: 'let variables allow re-assignment, while const assignments are write-protected once initialized.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which variable keyword should you declare when the value will NEVER undergo re-assignment?',
            options: ['let', 'const', 'var', 'global'],
            correctAnswerIndex: 1,
            explanation: '`const` variables are read-only. Declaring variables const ensures they cannot be mutatively re-assigned.'
          }
        ],
        keyTakeaways: [
          'Modern JavaScript uses ES6 let and const variables instead of var.',
          'Press F12 in your browser inspect window to view console output logs directly.'
        ],
        codeTemplate: `// Write a standard console log displaying "JS" below!
console.log("JS");`,
        expectedOutput: 'JS'
      },
      {
        id: 'part-2',
        partNumber: 2,
        title: 'Operators & Type Coercion',
        estimatedReadTime: '8 min',
        topics: ['Arithmetic operators', 'Comparison operators (== vs ===)', 'Logical checks', 'typeof operations'],
        keyTopicsExplanation: 'In JavaScript, type coercion resolves variable class differences implicitly during comparisons.',
        sections: [
          {
            title: 'Loose comparison vs strict comparisons',
            type: 'text',
            content: 'Loose comparison (==) checks for value equality after implicit type conversion, while strict comparison (===) checks value and type simultaneously.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the boolean evaluation result of the comparison: "5" == 5?',
            options: ['true', 'false', 'undefined', 'Reference Error'],
            correctAnswerIndex: 0,
            explanation: 'Under loose comparison (==), JavaScript coerced the string "5" to a numeric value, returning true because their values match.'
          }
        ],
        keyTakeaways: [
          'Always use triple-equals === (strict comparison) to avoid loose conversion errors.',
          'The typeof operator inspects variables and returns their types as a lowercase string (e.g., "string", "number").'
        ],
        codeTemplate: `const check = (5 === 5);
console.log(check);`,
        expectedOutput: 'true'
      },
      {
        id: 'part-3',
        partNumber: 3,
        title: 'Control Flow & Functions',
        estimatedReadTime: '10 min',
        topics: ['if/else structures', 'switch selectors', 'arrow functions syntax', 'hoisting rules'],
        keyTopicsExplanation: 'Arrow functions introduce a compact, modern syntax to define methods in JavaScript.',
        sections: [
          {
            title: 'Modern arrow functions',
            type: 'text',
            content: 'Arrow functions use implicit return statements when written on a single line of code without block brackets.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the arrow function syntax representation?',
            options: ['function add() {}', 'let add = a,b => a+b', 'const add = (a, b) => a + b;', 'const sum = function(a,b) {}'],
            correctAnswerIndex: 2,
            explanation: '`const add = (a, b) => a + b;` represents clean ES6 arrow method structure with implicit return.'
          }
        ],
        keyTakeaways: [
          'Ensure conditional evaluations resolve cleanly to true or false.',
          'Variables declared with const and let are scoped within blocks { }.'
        ],
        codeTemplate: `const doubleMe = (x) => x * 2;
console.log(doubleMe(6));`,
        expectedOutput: '12'
      },
      {
        id: 'part-4',
        partNumber: 4,
        title: 'Arrays & Objects',
        estimatedReadTime: '11 min',
        topics: ['Array mapping/filtering', 'Object structures', 'Array reduce', 'Destructuring elements'],
        keyTopicsExplanation: 'ES6 array operations provide powerful functional pipelines to map, filter, and aggregate arrays.',
        sections: [
          {
            title: 'Standard array mapping methods',
            type: 'text',
            content: 'The `.map()` array utility creates a new array by processing each element from the original collection through a callback function.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which array method is used to remove elements that fail to satisfy a given conditional match?',
            options: ['map', 'filter', 'reduce', 'push'],
            correctAnswerIndex: 1,
            explanation: 'The `.filter()` method processes array items, returning a new array containing only elements that return true in the evaluation.'
          }
        ],
        keyTakeaways: [
          'Use object destructuring syntax `const { name } = user;` to extract variables cleanly.',
          'Array methods map and filter return new arrays, leaving original arrays unmodified.'
        ],
        codeTemplate: `const numbers = [1, 2, 3];
const doubleNum = numbers.map(n => n * 2);
console.log(doubleNum);`,
        expectedOutput: '[2, 4, 6]'
      },
      {
        id: 'part-5',
        partNumber: 5,
        title: 'DOM Manipulation',
        estimatedReadTime: '12 min',
        topics: ['querySelectorAll selections', 'getElementById direct bindings', 'innerHTML parsing inline', 'event listeners'],
        keyTopicsExplanation: 'The Document Object Model (DOM) is the tree-like structure representation of active web elements inside web browser cards.',
        sections: [
          {
            title: 'Selecting web elements',
            type: 'text',
            content: 'The querySelector search API targets matching HTML elements using standard CSS selector rules.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What method bind listener actions dynamically to target DOM node structures?',
            options: ['addEventListener', 'selectListener', 'bindActionHandler', 'onEventClick'],
            correctAnswerIndex: 0,
            explanation: '`addEventListener()` configures targeted listeners on DOM nodes, executing callbacks when events occur.'
          }
        ],
        keyTakeaways: [
          'Use document.querySelector to acquire control of target elements.',
          'Prevent page refreshes during form submissions using event.preventDefault().'
        ],
        codeTemplate: `// Simulated DOM query check
const txt = "DOM Ready";
console.log(txt);`,
        expectedOutput: 'DOM Ready'
      },
      {
        id: 'part-6',
        partNumber: 6,
        title: 'ES6+ Modern JavaScript',
        estimatedReadTime: '10 min',
        topics: ['Template literals text', 'Spread vs Rest operators', 'Optional chaining attributes', 'Nullish coalescing default'],
        keyTopicsExplanation: 'Optional chaining (`?.`) short-circuits evaluation with undefined if a nested field is missing, preventing runtime errors.',
        sections: [
          {
            title: 'Optional chaining and templates',
            type: 'text',
            content: 'Template literals use backticks (``) to enable multi-line text blocks and embedded variables inside `${var}` snippets.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What character string initiates template literal interpolation in ES6+ syntax specifications?',
            options: ['"Hello " + val', '\'Hello ${val}\'', '`Hello ${val}`', '"Hello ${val}"'],
            correctAnswerIndex: 2,
            explanation: 'Template literals require backticks (``). They allow embedding variables inside `${val}` placeholders.'
          }
        ],
        keyTakeaways: [
          'Optional chaining prevents application crashes from missing values.',
          'Use the spread operator `...` to copy objects and arrays efficiently.'
        ],
        codeTemplate: `const platform = "UPSKILL";
console.log(\`Learn with \${platform}\`);`,
        expectedOutput: 'Learn with UPSKILL'
      },
      {
        id: 'part-7',
        partNumber: 7,
        title: 'Async JavaScript',
        estimatedReadTime: '13 min',
        topics: ['Callbacks functions', 'Promises states', 'Async / Await variables', 'fetch API targets'],
        keyTopicsExplanation: 'JavaScript is single-threaded. Async operations schedule long-running tasks to run in the background, keeping the UI responsive.',
        sections: [
          {
            title: 'Resolving promises cleanly',
            type: 'text',
            content: 'Async-await syntax simplifies async code, making it look and behave like synchronous code.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What return object represents an asynchronous operation matching pending, fulfilled, or rejected status?',
            options: ['Callback', 'Promise', 'Awaiter', 'Deferred'],
            correctAnswerIndex: 1,
            explanation: 'A `Promise` manages asynchronous operations, resolving with a value once completed.'
          }
        ],
        keyTakeaways: [
          'Mark functions as async to use the await keyword inside their body.',
          'Wrap API fetch requests in try-catch blocks to catch network errors.'
        ],
        codeTemplate: `const myFetch = async () => "Data Loaded";
myFetch().then(res => console.log(res));`,
        expectedOutput: 'Data Loaded'
      },
      {
        id: 'part-8',
        partNumber: 8,
        title: 'Modules & Tooling',
        estimatedReadTime: '10 min',
        topics: ['Import & export utilities', 'npm systems', 'package.json config', 'Vite layouts'],
        keyTopicsExplanation: 'Modules organize code by defining clear, reusable export APIs across files.',
        sections: [
          {
            title: 'Structuring module code',
            type: 'text',
            content: 'Export functions and classes with `export`, then import them into other files with `import` statements.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which file manages your project metadata, dependencies, and script commands?',
            options: ['tsconfig.json', 'package.json', 'vite.config.ts', 'App.tsx'],
            correctAnswerIndex: 1,
            explanation: 'The `package.json` file is the central manifest file for Node.js/web projects.'
          }
        ],
        keyTakeaways: [
          'Use named imports and exports to structure code predictably.',
          'The node_modules directory contains third-party dependencies.'
        ],
        codeTemplate: `const info = "Modules Ready";
console.log(info);`,
        expectedOutput: 'Modules Ready'
      },
      {
        id: 'part-9',
        partNumber: 9,
        title: 'Local Storage & APIs',
        estimatedReadTime: '11 min',
        topics: ['localStorage setups', 'JSON parse and stringify', 'RESTful API proxies', 'State mapping rendering'],
        keyTopicsExplanation: 'Local Storage retains key-value data inside browsers across page reloads.',
        sections: [
          {
            title: 'Parsing storage objects',
            type: 'text',
            content: 'Because Local Storage saves only text values, serialize JSON payloads using JSON.stringify before saving, and parse them with JSON.parse when reading.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What method converts active JavaScript object maps into serialized text items saved inside localStorage?',
            options: ['JSON.parse()', 'JSON.stringify()', 'localStorage.serialize()', 'object.toString()'],
            correctAnswerIndex: 1,
            explanation: '`JSON.stringify()` serializes JavaScript objects into structured text, allowing them to be saved in Local Storage.'
          }
        ],
        keyTakeaways: [
          'Local Storage retains data until explicitly cleared.',
          'Store and parse arrays safely to avoid runtime errors.'
        ],
        codeTemplate: `const scoreObj = { score: 99 };
console.log(JSON.stringify(scoreObj));`,
        expectedOutput: '{"score":99}'
      },
      {
        id: 'part-10',
        partNumber: 10,
        title: 'Capstone Project',
        estimatedReadTime: '23 min',
        topics: ['Project structure setup', 'API integration', 'UI composition rendering', 'Data caching'],
        keyTopicsExplanation: 'The Capstone project builds a weather dashboard that integrates DOM modifications, API operations, exception handling, and Local Storage queries.',
        sections: [
          {
            title: 'Building your application',
            type: 'text',
            content: 'Refer to target guides in the Capstone Workspace. Set up your selectors and fetch requests cleanly.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What event method halts browser page refreshes on forms submitting queries?',
            options: ['event.stopPropagation()', 'event.preventDefault()', 'event.clearValues()', 'event.cancelBubble()'],
            correctAnswerIndex: 1,
            explanation: '`event.preventDefault()` prevents standard browser reload events from firing on form submissions.'
          }
        ],
        keyTakeaways: [
          'Keep structural keys isolated safely.',
          'Gracefully display loading and error states to maintain a smooth user experience.'
        ],
        codeTemplate: `console.log("JS Weather App Built");`,
        expectedOutput: 'JS Weather App Built'
      }
    ]
  },
  {
    id: 'reactjs',
    name: 'React.js',
    tagline: 'Build Dynamic UIs with the World\'s Most Popular Frontend Library',
    primaryUse: 'Single-Page & Dynamic Web UIs',
    duration: '14 Hours',
    difficulty: 'Beginner-Intermediate',
    lessonsCount: 10,
    color: '#22D3EE',
    textColor: 'text-cyan-400',
    description: 'Learn React.js—the leading declarative, component-based frontend library managed by Meta that powers dynamic applications, interactive user dashboards, and modern visual platforms across the web.',
    whyLearn: [
      'The dominant, industry-standard frontend tool, with thousands of job prospects worldwide.',
      'Dynamic speed: uses a Virtual DOM mechanism to perform target updates, avoiding slow whole-page reflows.',
      'Component reusability: write modular, self-contained UI components that are easy to reuse and test.',
      'Unmatched community ecosystem with millions of pre-built npm packages available.'
    ],
    realWorldUseCases: [
      'Interactive, high-speed single-page dashboards (Airbnb, Netflix UI).',
      'Real-time document writing and collaborative charts (Figma interfaces).',
      'Dynamic social applications displaying fast timeline updates.'
    ],
    whoIsThisFor: [
      'Web developers transitioned from static HTML to modern SPAs.',
      'JavaScript programmers seeking modular, reusable UI layouts.',
      'Engineers wanting to master reactive software design rules.'
    ],
    capstone: {
      title: 'Full CRUD Task Board Kanban App',
      description: 'Build a production-rich, interactive Kanban Board system containing multiple custom columns, task creation forms, progress state modifications, and localStorage-based client recovery support.',
      difficulty: 'Intermediate',
      skillsApplied: ['Dynamic state arrays', 'Prop communication interfaces', 'useEffect caching', 'React Context state management', 'Component separation'],
      steps: [
        'Establish layout columns (Backlog, Ongoing, Finished) mapping active states dynamically.',
        'Setup global state management with TaskContext to avoid unnecessary prop drilling.',
        'Build forms creating task cards containing custom titles and priority tags.',
        'Implement update and delete handlers modifying array entries cleanly on key changes.',
        'Hook useEffect managers saving task logs to localStorage automatically.'
      ],
      starterCode: `import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    return (
        <TaskContext.Provider value={{ tasks }}>
            {children}
        </TaskContext.Provider>
    );
}`,
      mockupDescription: 'Functional Kanban layout with interactive drag states, clean colors, and a task editor sidebar.',
      badgeUrl: '/badges/react-capstone.png'
    },
    lessons: [
      {
        id: 'part-1',
        partNumber: 1,
        title: 'React Introduction',
        estimatedReadTime: '12 min',
        topics: ['Virtual DOM logic', 'Vite scaffolds setup', 'JSX fundamentals', 'Libraries boundaries'],
        keyTopicsExplanation: 'React uses a Virtual DOM to minimize browser reflows and update the UI efficiently.',
        sections: [
          {
            title: 'The dynamic Virtual DOM',
            type: 'text',
            content: 'Instead of modifying physical browser elements directly, React compiles a lightweight copy called the Virtual DOM. On updates, it calculates target differences (reconciliation) and updates only the modified items.'
          },
          {
            title: 'Your First JS Component',
            type: 'code',
            content: 'Look at how JSX renders XML layouts inside JavaScript:',
            codeSnippet: {
              language: 'jsx',
              code: `function WelcomeCard() {
    const title = "Welcome to UPSKILL React!";
    return (
        <div className="card-box bg-slate">
            <h1 className="text-xl font-bold">{title}</h1>
            <p>Components render dynamic, declarative code layouts cleanly.</p>
        </div>
    );
}`,
              explanation: 'JSX allows you to write HTML-like syntax inside JavaScript, embedding dynamic values with curly braces { }.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the Virtual DOM in React?',
            options: ['A direct plugin to host files', 'An in-memory lightweight representation of the physical Web DOM used to calculate updates efficiently', 'A native browser search compiler', 'An extension to install Node packages'],
            correctAnswerIndex: 1,
            explanation: 'The Virtual DOM is React\'s internal representation of the UI. It calculates differences between updates to minimize physical paint operations.'
          }
        ],
        keyTakeaways: [
          'JSX returns single, encapsulated parent layout nodes.',
          'Always use className instead of standard class on JSX targets.'
        ],
        codeTemplate: `import React from 'react';

function Greeting() {
    // Return a paragraph node displaying "React" below!
    return <p>React</p>;
}
export default Greeting;`,
        expectedOutput: 'React'
      },
      {
        id: 'part-2',
        partNumber: 2,
        title: 'Components & Props',
        estimatedReadTime: '11 min',
        topics: ['Functional components properties', 'Props parameters', 'Component compositions', 'Prop validation checks'],
        keyTopicsExplanation: 'Props pass data down from parent components to child components.',
        sections: [
          {
            title: 'Dynamic component properties',
            type: 'text',
            content: 'Props are absolute read-only inputs. Components must act as pure functions with respect to child parameters.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Can a child component directly modify the properties (props) it receives from its parent?',
            options: ['Yes, using prop assign methods', 'No, props are read-only blueprints in child contexts', 'Yes, inside useEffect loops', 'Props are dynamic references mutable anywhere'],
            correctAnswerIndex: 1,
            explanation: 'Props are strictly read-only within child components, preserving a predictable top-down data flow.'
          }
        ],
        keyTakeaways: [
          'Child elements can render other children using props.children.',
          'Inject prop values using destructuring parameters like: function ItemCard({ title, price }).'
        ],
        codeTemplate: `import React from 'react';

function Badge({ label }) {
    return <span>{label}</span>;
}

export default function App() {
    return <Badge label="Active" />;
}`,
        expectedOutput: 'Active'
      },
      {
        id: 'part-3',
        partNumber: 3,
        title: 'State & useState',
        estimatedReadTime: '13 min',
        topics: ['useState hook states', 're-rendering triggers', 'Controlled input forms', 'State updates methods'],
        keyTopicsExplanation: 'State values represent dynamic values that trigger a component to re-render when they change.',
        sections: [
          {
            title: 'Using active reactive states',
            type: 'text',
            content: 'State values represent dynamic values that trigger a component to re-render when they change. Access state variables using the standard `useState` hook.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What hook manages state variables inside React functional components?',
            options: ['useEffect', 'useContext', 'useState', 'useRef'],
            correctAnswerIndex: 2,
            explanation: 'The `useState` hook registers mutable variables inside functional components, triggering reactive re-renders when updated.'
          }
        ],
        keyTakeaways: [
          'Avoid modifying state variables directly; always use the provided setter method.',
          'State updates are asynchronous and batched to optimize rendering performance.'
        ],
        codeTemplate: `import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(1);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
        expectedOutput: '1'
      },
      {
        id: 'part-4',
        partNumber: 4,
        title: 'Event Handling & Forms',
        estimatedReadTime: '10 min',
        topics: ['onClick listener directives', 'onChange tracking fields', 'Form submit handles', 'SyntheticEvent details'],
        keyTopicsExplanation: 'React uses SyntheticEvents to wrap standard native browser actions in a cross-browser compatible interface.',
        sections: [
          {
            title: 'Managing inputs',
            type: 'text',
            content: 'Controlled forms map input states explicitly to React variables, ensuring the UI remains highly interactive and responsive.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What argument processes text updates dynamically from target inputs inside event listeners?',
            options: ['event.target.input', 'event.target.value', 'event.value.text', 'input.currentValue'],
            correctAnswerIndex: 1,
            explanation: '`event.target.value` extracts the text value from input DOM targets inside change listeners.'
          }
        ],
        keyTakeaways: [
          'Events in React use camelCase properties (e.g., onClick instead of onclick).',
          'Prevent page reloads during form submissions using event.preventDefault().'
        ],
        codeTemplate: `import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState("Siedel");
    return <input value={name} onChange={(e) => setName(e.target.value)} />;
}`,
        expectedOutput: 'Siedel'
      },
      {
        id: 'part-5',
        partNumber: 5,
        title: 'useEffect & Lifecycle',
        estimatedReadTime: '14 min',
        topics: ['useEffect setup', 'Dependencies array patterns', 'Data fetching procedures', 'Cleanup workflows'],
        keyTopicsExplanation: 'The useEffect hook runs side effects like API requests, timer setups, or manual DOM updates.',
        sections: [
          {
            title: 'Managing side effects',
            type: 'text',
            content: 'The dependencies array controls when your effect runs. Leaving it empty runs it once, while omitting it runs it on every render.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What occurs when the dependencies array parameter is completely omitted from a useEffect declaration?',
            options: ['The effect never runs', 'The effect runs only on the initial mount', 'The effect runs on the initial mount and after every single component render loop', 'The app crashes'],
            correctAnswerIndex: 2,
            explanation: 'Omitting the dependencies array entirely runs the effect on the initial mount and after every render loop, which can cause performance issues.'
          }
        ],
        keyTakeaways: [
          'Clean up active references like intervals or event subscriptions by returning a function from useEffect.',
          'Check dependency variables to avoid infinite render loops.'
        ],
        codeTemplate: `import React, { useEffect, useState } from 'react';

export default function Info() {
    const [status, setStatus] = useState("Off");
    useEffect(() => {
        setStatus("Online");
    }, []);
    return <span>{status}</span>;
}`,
        expectedOutput: 'Online'
      },
      {
        id: 'part-6',
        partNumber: 6,
        title: 'Lists, Keys & Conditional Rendering',
        estimatedReadTime: '11 min',
        topics: ['Array map operations JSX', 'The key prop', 'Conditional renders (&& / ternary)', 'Empty state listings'],
        keyTopicsExplanation: 'React uses unique keys to identify which list items have changed, been added, or been removed.',
        sections: [
          {
            title: 'Mapping lists securely',
            type: 'text',
            content: 'When rendering lists, assign a unique key prop to each element. Avoid using array indexes as keys to prevent rendering bugs.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Why does React require a unique "key" prop when rendering dynamic list elements?',
            options: ['To compile styles faster', 'To help identify which specific array items modified, added, or deleted, optimizing Virtual DOM reconciliations', 'To sort elements', 'To format key strings'],
            correctAnswerIndex: 1,
            explanation: 'Keys provide stable identities for list elements, helping React determine how to reconcile the Virtual DOM efficiently.'
          }
        ],
        keyTakeaways: [
          'Use the logical AND operator (&&) to render components conditionally.',
          'Always use stable, unique IDs as keys in collection lists.'
        ],
        codeTemplate: `import React from 'react';

export default function List() {
    const items = ["A", "B"];
    return (
        <ul>
            {items.map((it, idx) => <li key={idx}>{it}</li>)}
        </ul>
    );
}`,
        expectedOutput: "A\nB"
      },
      {
        id: 'part-7',
        partNumber: 7,
        title: 'React Router',
        estimatedReadTime: '13 min',
        topics: ['Route architectures layouts', 'Link components', 'useParams variables extraction', 'Programmatic navigate workflows'],
        keyTopicsExplanation: 'Routing allows you to build single-page applications with multiple navigation views.',
        sections: [
          {
            title: 'SPA Navigation views',
            type: 'text',
            content: 'Use Link components instead of standard anchor tags to prevent page reloads, keeping the Single-Page Application responsive and fast.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which component represents standard search-friendly anchor links without triggering entire page reloads?',
            options: ['Anchor', 'Link', 'Button', 'Route'],
            correctAnswerIndex: 1,
            explanation: 'The `Link` component intercept clicks, updating browser URLs and displaying target views without reloading the page.'
          }
        ],
        keyTakeaways: [
          'Extract dynamic URL parameters using useParams (e.g., /courses/:id).',
          'Use standard programmatic routes with the useNavigate hook.'
        ],
        codeTemplate: `import React from 'react';
// Simulated router link
const path = "/home";
console.log(path);`,
        expectedOutput: '/home'
      },
      {
        id: 'part-8',
        partNumber: 8,
        title: 'Global State Management',
        estimatedReadTime: '14 min',
        topics: ['useContext global setups', 'createContext mechanisms', 'useReducer patterns', 'Avoid prop drilling warnings'],
        keyTopicsExplanation: 'Context allows you to share data across the component tree without passing props manually (prop drilling).',
        sections: [
          {
            title: 'Sharing global state values',
            type: 'text',
            content: 'The Context API provides a clean, robust way to manage global states like active user sessions or theme settings.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the primary problem solved by using Context API inside application components branches?',
            options: ['Compiling speed issues', 'Prop drilling across multiple component nesting nodes without close parent-child links', 'Writing files safely to browser disks', 'Storing server API data'],
            correctAnswerIndex: 1,
            explanation: 'Context sharing propagates state values down to deeply nested children directly, avoiding complex multi-layer prop drilling.'
          }
        ],
        keyTakeaways: [
          'Context Provider components wrap visual elements to expose global values.',
          'Conserve render loops by partitioning target Context payloads.'
        ],
        codeTemplate: `import React, { createContext, useContext } from 'react';
const AppContext = createContext("Active");

export default function Display() {
    const val = useContext(AppContext);
    return <span>{val}</span>;
}`,
        expectedOutput: 'Active'
      },
      {
        id: 'part-9',
        partNumber: 9,
        title: 'Performance & Best Practices',
        estimatedReadTime: '13 min',
        topics: ['useMemo calculation caches', 'useCallback method retention', 'Lazy loading components splits', 'DevTools audits'],
        keyTopicsExplanation: 'Optimization hooks keep your application highly responsive by caching expensive calculations.',
        sections: [
          {
            title: 'Caching computational values',
            type: 'text',
            content: 'useMemo caches expensive calculations, while useCallback preserves callback function references across render loops.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What hook is used to cache expensive calculations across component renders?',
            options: ['useCallback', 'useMemo', 'useRef', 'useEffect'],
            correctAnswerIndex: 1,
            explanation: 'The `useMemo` hook memoizes complex, CPU-intensive calculations, recalculating them only when dependency values change.'
          }
        ],
        keyTakeaways: [
          'Only add performance optimizations when metrics indicate lag.',
          'Isolate large dynamic packages using lazy-loading methods.'
        ],
        codeTemplate: `import React, { useMemo } from 'react';
export default function Calculate() {
    const cachedVal = useMemo(() => 5 * 2, []);
    return <span>{cachedVal}</span>;
}`,
        expectedOutput: '10'
      },
      {
        id: 'part-10',
        partNumber: 10,
        title: 'Capstone Project',
        estimatedReadTime: '24 min',
        topics: ['Kanban assembly specifications', 'Context providers configurations', 'UI responsive adjustments', 'Production tests'],
        keyTopicsExplanation: 'The Kanban app integrates state arrays, side effects, Context, and local data persistence.',
        sections: [
          {
            title: 'Assembling the structural pages',
            type: 'text',
            content: 'Build the application using modular functional components.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What hook is recommended to manage complex state transitions and operations?',
            options: ['useState', 'useReducer', 'useRef', 'useEffect'],
            correctAnswerIndex: 1,
            explanation: 'The `useReducer` hook is ideal for managing complex state transitions and operations.'
          }
        ],
        keyTakeaways: [
          'Modular state structures scale projects predictably.',
          'Keep structural keys isolated safely.'
        ],
        codeTemplate: `console.log("React Kanban Board Project Complete");`,
        expectedOutput: 'React Kanban Board Project Complete'
      }
    ]
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    tagline: 'The React Framework for Production-Grade Web Apps',
    primaryUse: 'SEO-Optimized & Scale Web Apps',
    duration: '15 Hours',
    difficulty: 'Intermediate',
    lessonsCount: 10,
    color: '#E4E4E7',
    textColor: 'text-zinc-300',
    description: 'Learn Next.js—the leading React framework for production. Next.js supports Server-Side Rendering (SSR), Static Site Generation (SSG), and file-routing layouts out-of-the-box.',
    whyLearn: [
      'The definitive framework choice for React developers looking to build production-grade web applications.',
      'Unmatched search engine optimizations (SEO) using Server-Side Rendering (SSR).',
      'Unified Developer Experience: manage client interfaces and backend API endpoints under a single project directory.',
      'Highly demanded by top SaaS platforms and fast-growing startups.'
    ],
    realWorldUseCases: [
      'SEO-critical e-commerce platforms and storefronts.',
      'SaaS dashboard applications with unified backend APIs.',
      'Static-generated developer documentation sites, blogs, and marketing platforms.'
    ],
    whoIsThisFor: [
      'React engineers looking to master production-grade SSR development.',
      'Full-stack developers seeking an all-in-one frontend and backend framework.',
      'Creators focused on building high-speed, SEO-optimized web platforms.'
    ],
    capstone: {
      title: 'Full-Stack Blog Platform (CRUD + Auth + APIs)',
      description: 'Build a production-ready Web blog platform utilizing next-gen SSR page speeds, API Route handlers, custom layouts, user credentials authentication, and structured metadata configurations.',
      difficulty: 'Intermediate',
      skillsApplied: ['App Router filesystem layouts', 'Client vs Server components', 'API Route Handlers (GET/POST)', 'Dynamic segment pages', 'Metadata API overrides'],
      steps: [
        'Establish directories layout structures matching typical Next.js App Router patterns.',
        'Assemble database interfaces inside Route handler endpoints returning GET/POST responses.',
        'Implement dynamic route views reading parameter values from `/blog/[slug]`.',
        'Mark interactive UI elements (e.g., text editor forms) as client components using "use client".',
        'Add structured metadata to optimize search engine ranking (SEO).'
      ],
      starterCode: `// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ posts: [] });
}

export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({ status: "Created", data });
}`,
      mockupDescription: 'High-speed web publication showing nested layouts, loading skeletons, responsive navigation, and optimized SEO panels.',
      badgeUrl: '/badges/nextjs-capstone.png'
    },
    lessons: [
      {
        id: 'part-1',
        partNumber: 1,
        title: 'Next.js Foundations',
        estimatedReadTime: '13 min',
        topics: ['Next.js core concepts', 'App Router frameworks', 'Client vs Server roles', 'File-based routing details'],
        keyTopicsExplanation: 'Next.js uses folder-based routing where folder names define structural paths in application files.',
        sections: [
          {
            title: 'Modern App Router mechanics',
            type: 'text',
            content: 'Next.js uses folder-based routing where folder names inside the `app/` directory define structural paths, and page.tsx files serve as the visual UI endpoints.'
          },
          {
            title: 'Your First app/page.tsx file',
            type: 'code',
            content: 'Look at how simple Next.js server component structures are:',
            codeSnippet: {
              language: 'typescript',
              code: `export default function Home() {
    return (
        <main className="container-box">
            <h1>Next.js App Server running!</h1>
            <p>Every file named page.tsx maps directly to active URL segments.</p>
        </main>
    );
}`,
              explanation: 'Server components render on the server, sending pre-rendered HTML to the client for faster page speeds.'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is folder-based routing inside Next.js App Router folders?',
            options: ['Writing path configurations inside routes.js files manually', 'Creating folders inside the structural app/ directory where folder names define paths, and page.tsx files define the UI views', 'Installing third-party packages', 'Hosting directory structures inside public files'],
            correctAnswerIndex: 1,
            explanation: 'The App Router maps URLs directly to folders inside the app directory (e.g., app/about/page.tsx resolves to /about).'
          }
        ],
        keyTakeaways: [
          'page.tsx files export the visual markup content for their respective routes.',
          'Next.js components are server-rendered by default.'
        ],
        codeTemplate: `import React from 'react';

export default function Home() {
    // Return a JSX div containing "Next.js" text below!
    return <div>Next.js</div>;
}`,
        expectedOutput: 'Next.js'
      },
      {
        id: 'part-2',
        partNumber: 2,
        title: 'Pages, Layouts & Navigation',
        estimatedReadTime: '12 min',
        topics: ['page.tsx views definition', 'layout.tsx structural headers', 'Link component optimizations', 'Nested routes setups'],
        keyTopicsExplanation: 'A layout is UI shared across multiple pages. It preserves state during navigation and prevents unnecessary re-renders.',
        sections: [
          {
            title: 'Shared parent layouts',
            type: 'text',
            content: 'The layout.tsx file wraps nested route child elements, making it ideal for shared UI like standard sidebars, footers, or headers.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which file is used to define shared UI layouts across multiple pages?',
            options: ['page.tsx', 'layout.tsx', 'route.ts', 'server.tsx'],
            correctAnswerIndex: 1,
            explanation: 'The `layout.tsx` file defines nested templates, wrapping page child elements to maintain a consistent UI across routes.'
          }
        ],
        keyTakeaways: [
          'Layout files wrap child pages as React elements within props.children.',
          'Optimize page loads by using Next.js Link elements for routing.'
        ],
        codeTemplate: `// Simulated route check
const layoutInfo = "Shared Layout Configured";
console.log(layoutInfo);`,
        expectedOutput: 'Shared Layout Configured'
      },
      {
        id: 'part-3',
        partNumber: 3,
        title: 'Server & Client Components',
        estimatedReadTime: '14 min',
        topics: ['"use client" directives', 'Static page render defaults', 'Hydration boundaries', 'Optimize asset sizes'],
        keyTopicsExplanation: 'Use the "use client" directive to mark components as Client Components, enabling hooks and interactive event listeners.',
        sections: [
          {
            title: 'Server vs Client separation',
            type: 'text',
            content: 'Server Components are rendered on the server to optimize loading speeds, while Client Components enable access to standard browser APIs and React hooks.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What directive must be declared at the top of a file to compile it as a Client Component?',
            options: ['"use strict"', '"use client"', '"client only"', '"client export"'],
            correctAnswerIndex: 1,
            explanation: 'The `"use client"` directive tells Next.js to package this file as a Client Component, giving it access to state, hooks, and event listeners.'
          }
        ],
        keyTakeaways: [
          'Choose Server Components by default to optimize loading speeds.',
          'Import Client Component elements in parent layouts to handle client interaction.'
        ],
        codeTemplate: `"use client";
import React, { useState } from 'react';
export default function ClientView() {
    const [msg] = useState("Client Mode");
    return <span>{msg}</span>;
}`,
        expectedOutput: 'Client Mode'
      },
      {
        id: 'part-4',
        partNumber: 4,
        title: 'Data Fetching',
        estimatedReadTime: '13 min',
        topics: ['async server components', 'loading.tsx skeletons setups', 'error.tsx bounds definitions', 'Suspense implementations'],
        keyTopicsExplanation: 'Use async/await directly in Server Components to fetch data from database or external APIs during server-rendering.',
        sections: [
          {
            title: 'Direct data querying on servers',
            type: 'text',
            content: 'Fetching data inside Server Components eliminates client-side loading spinners, delivering static, populated HTML directly to the browser.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Can you use async/await directly in dynamic Server Component declarations?',
            options: ['No, async functions are invalid inside components', 'Yes, Server Components support async rendering which resolves data directly on server nodes', 'Only inside useEffect hooks', 'Only inside state setters'],
            correctAnswerIndex: 1,
            explanation: 'Server Components support async rendering, allowing you to fetch data directly during HTML pre-generation.'
          }
        ],
        keyTakeaways: [
          'Use loading.tsx to display loading skeletons automatically during page rendering.',
          'Cache API fetch requests to optimize page loading speeds.'
        ],
        codeTemplate: `// Mock async rendering
const loadDb = async () => "Loaded";
loadDb().then(res => console.log(res));`,
        expectedOutput: 'Loaded'
      },
      {
        id: 'part-5',
        partNumber: 5,
        title: 'Dynamic Routes & Params',
        estimatedReadTime: '11 min',
        topics: ['[slug] folder tags', 'generateStaticParams speeds optimizations', 'Metadata variables outputs', 'Catch-all parameters rules'],
        keyTopicsExplanation: 'Create dynamic routes by wrapping directory names with square brackets: [slug]/page.tsx.',
        sections: [
          {
            title: 'Defining wildcard folders',
            type: 'text',
            content: 'Dynamic routes parse URL parameters dynamically, resolving requests like `/blog/123` through a single folder structure: `[id]/page.tsx`.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What folder naming layout maps url variable params dynamically inside Next.js directories?',
            options: ['folder-slug', ':slug/page.tsx', '[slug]/page.tsx', '{slug}/page.tsx'],
            correctAnswerIndex: 2,
            explanation: 'Enclosing directories in brackets `[slug]/page.tsx` maps variable segments dynamically (e.g., resolving /blog/hello-world through slug = "hello-world").'
          }
        ],
        keyTakeaways: [
          'Query elements using the generateStaticParams method to pre-render dynamic routes on Vercel.',
          'Read parsed URL parameters directly using dynamic params props.'
        ],
        codeTemplate: `const params = { slug: "react" };
console.log(params.slug);`,
        expectedOutput: 'react'
      },
      {
        id: 'part-6',
        partNumber: 6,
        title: 'API Routes',
        estimatedReadTime: '12 min',
        topics: ['route.ts directories layout', 'HTTP methods checks (GET/POST)', 'NextResponse formatting payload', 'Secure API keys limits'],
        keyTopicsExplanation: 'API Route Handlers (route.ts) map backend API endpoints to your App Router filesystem structures.',
        sections: [
          {
            title: 'Unified backend endpoint files',
            type: 'text',
            content: 'Next.js includes a robust, built-in Node server environment. Implement backend REST APIs easily using `route.ts` handlers.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What file name defines backend API routing inside App directories?',
            options: ['page.tsx', 'api.ts', 'route.ts', 'server.js'],
            correctAnswerIndex: 2,
            explanation: '`route.ts` manages backend URL handling, responding to HTTP requests with JSON datasets.'
          }
        ],
        keyTakeaways: [
          'Do NOT import route.ts dependencies inside client-compiled jsx files.',
          'Use NextResponse.json to format and return backend data payloads cleanly.'
        ],
        codeTemplate: `// Mock next response output
const resVal = { ok: true };
console.log(JSON.stringify(resVal));`,
        expectedOutput: '{"ok":true}'
      },
      {
        id: 'part-7',
        partNumber: 7,
        title: 'Styling in Next.js',
        estimatedReadTime: '11 min',
        topics: ['Tailwind CSS configuration', 'next/font asset loaders', 'Critical CSS injections', 'Responsive layout margins'],
        keyTopicsExplanation: 'The modern next/font asset loader automatically self-hosts and optimizes Google Fonts to prevent layout flashes.',
        sections: [
          {
            title: 'Setting up Google Fonts',
            type: 'text',
            content: 'Next.js compiles and optimizes Google Fonts locally, serving them from your project host to protect user privacy and improve loading speeds.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the primary benefit of loading Google Fonts through next/font?',
            options: ['It changes colors on text', 'It downloads and hosts fonts locally at build time, preventing runtime Google API requests and layout shifts', 'It runs in server memory only', 'It supports animations'],
            correctAnswerIndex: 1,
            explanation: '`next/font` downloads and self-hosts fonts locally at build time, optimizing performance and eliminating round-trip runtime font requests.'
          }
        ],
        keyTakeaways: [
          'Tailwind CSS integrates seamlessly with App Router configuration flows.',
          'Organize styles inside shared CSS layout files.'
        ],
        codeTemplate: `const fontCls = "inter-font mt-4";
console.log(fontCls);`,
        expectedOutput: 'inter-font mt-4'
      },
      {
        id: 'part-8',
        partNumber: 8,
        title: 'Authentication Basics',
        estimatedReadTime: '14 min',
        topics: ['Auth setups', 'Session management cookies', 'Protect route wrappers', 'Middleware handlers'],
        keyTopicsExplanation: 'Middleware secures pages by intercepting incoming requests on the server before they complete rendering.',
        sections: [
          {
            title: 'Middleware routes redirection',
            type: 'text',
            content: 'Use server-side middleware to protect routes, validating active session tokens before outputting restricted dashboard data.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What file is executed in the root directory to intercept incoming routes on Next.js servers?',
            options: ['route.ts', 'middleware.ts', 'security.config', 'index.tsx'],
            correctAnswerIndex: 1,
            explanation: '`middleware.ts` runs on the server, intercepting routing requests to enforce authentication globally.'
          }
        ],
        keyTakeaways: [
          'Secure API keys using environment variables.',
          'Redirect unauthenticated users to login pages dynamically using middleware redirects.'
        ],
        codeTemplate: `const session = "User Session Valid";
console.log(session);`,
        expectedOutput: 'User Session Valid'
      },
      {
        id: 'part-9',
        partNumber: 9,
        title: 'Deployment & Optimization',
        estimatedReadTime: '12 min',
        topics: ['Vercel settings', 'next/image optimizations', 'Metadata tags API', 'Page speed tests'],
        keyTopicsExplanation: 'The modern next/image component automatically compresses, lazy loads, and resizes image assets on the edge.',
        sections: [
          {
            title: 'Optimizing images on the edge',
            type: 'text',
            content: 'The next/image component serves optimized WebP formats, preventing page load delays from uncompressed images.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What format conversion represents Web image compression optimized by next/image components?',
            options: ['PNG high format', 'WebP / AVIF compressed format', 'Raw formats', 'SVG shapes only'],
            correctAnswerIndex: 1,
            explanation: 'Next.js compresses images into modern WebP/AVIF formats dynamically, reducing page sizes and speeding up loads.'
          }
        ],
        keyTakeaways: [
          'Optimizing site performance boosts SEO and Lighthouse scores.',
          'Deploy your application to Vercel with one-click GitHub integration.'
        ],
        codeTemplate: `const deployStatus = "Production Optimal";
console.log(deployStatus);`,
        expectedOutput: 'Production Optimal'
      },
      {
        id: 'part-10',
        partNumber: 10,
        title: 'Capstone Project',
        estimatedReadTime: '25 min',
        topics: ['App router layout folder specs', 'Mock APIs handlers configs', 'Active metadata setup', 'Performance tests checks'],
        keyTopicsExplanation: 'The full-stack Blog builds mock endpoints, client layouts, dynamic details, and high-performance SEO headers.',
        sections: [
          {
            title: 'Constructing your portfolio publication',
            type: 'text',
            content: 'Use standard functional components. Check parameters validation criteria before deploying.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What structural element configures meta keywords, descriptors, and social graph listings?',
            options: ['Layout wrapper component tags', 'The metadata object API exported in page or layout files', 'Raw html modifications', 'Vite plugins options'],
            correctAnswerIndex: 1,
            explanation: 'Next.js configures SEO elements automatically by parsing static or dynamic Metadata objects exported from pages or layouts.'
          }
        ],
        keyTakeaways: [
          'Unified design workflows accelerate release cycles.',
          'Keep your build outputs lightweight and organized.'
        ],
        codeTemplate: `console.log("Full-Stack Blog Site Built Successfully");`,
        expectedOutput: 'Full-Stack Blog Site Built Successfully'
      }
    ]
  }
];
