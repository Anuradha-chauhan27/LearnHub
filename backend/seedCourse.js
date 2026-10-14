import mongoose from "mongoose";
import dotenv from "dotenv";
import { Course } from "./models/courses.js";
import { User } from "./models/user.js";
dotenv.config();

const createVideo = (title, fileName) => ({
  title,
  url: `http://localhost:5000/uploads/videos/${fileName}`,
});
const createCourseMeta = ({
  price,
  oldPrice,
  rating,
  reviews,
  students,
  duration,
  lessons,
  projects,
  instructor,
}) => ({
  price,
  oldPrice,
  discount: `${Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF`,
  rating,
  reviews,
  students,
  duration,
  lessons,
  projects,
  instructor,
  certificate: true,
  lifetimeAccess: true,
});

const courses = [
  {
    title: "Web Development",

    image: "web",

    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    ],

    description:
      "Learn modern web development using HTML, CSS, and JavaScript. Understand website structure, styling, responsive layouts, and dynamic functionality. Explore important frontend concepts and development techniques. Build practical website interfaces and improve problem-solving skills. Learn how modern websites work across different devices. Develop a strong foundation for frontend and full-stack development.",

    ...createCourseMeta({
      price: 499,
      oldPrice: 999,
      rating: 4.8,
      reviews: 120,
      students: 1250,
      duration: "30 Hours",
      lessons: 32,
      projects: 10,
      instructor: "Rahul Sharma",
    }),

    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Introduction to HTML", "html-introduction.mp4"),
      createVideo("HTML Document Structure", "html-document-structure.mp4"),
      createVideo("HTML Tags", "html-tags.mp4"),
      createVideo("HTML Forms", "html-forms.mp4"),
      createVideo("Introduction to CSS", "css-introduction.mp4"),
      createVideo("CSS Selectors", "css-selectors.mp4"),
      createVideo("CSS Box Model", "css-box-model.mp4"),
      createVideo("CSS Flexbox", "css-flexbox.mp4"),
      createVideo("Responsive Design", "responsive-design.mp4"),
      createVideo("Final Project", "web-project.mp4"),
    ],
  },

  {
    title: "Python Programming",

    image: "python",

    images: [
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    ],

    description:
      "Master Python programming from basic syntax to important programming concepts. Learn variables, data types, loops, functions, and data structures. Understand object-oriented programming and reusable code development. Practice Python through coding exercises and projects. Improve logical thinking and programming skills. Build a strong foundation for software development, data science, and artificial intelligence.",

    ...createCourseMeta({
      price: 599,
      oldPrice: 1199,
      rating: 4.9,
      reviews: 210,
      students: 1800,
      duration: "40 Hours",
      lessons: 38,
      projects: 12,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],


    videos: [
      createVideo("Python Introduction", "rfscVS0vtbw", 0),
      createVideo("Installing Python", "rfscVS0vtbw", 240),
      createVideo("Variables and Data Types", "rfscVS0vtbw", 900),
      createVideo("Strings in Python", "rfscVS0vtbw", 1800),
      createVideo("Lists and Tuples", "rfscVS0vtbw", 2700),
      createVideo("Python Functions", "rfscVS0vtbw", 4500),
      createVideo("If Statements", "rfscVS0vtbw", 6000),
      createVideo("Loops in Python", "rfscVS0vtbw", 7800),
      createVideo("Python Classes and Objects", "rfscVS0vtbw", 10800),
      createVideo("Python Project", "rfscVS0vtbw", 14200),
    ],
  },

  {
    title: "Java Programming",

    image: "java",

    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    ],

    description:
      "Learn Java programming and develop strong core programming skills. Understand variables, data types, operators, and control statements. Explore object-oriented programming concepts including inheritance and polymorphism. Learn arrays, collections, exception handling, and Java classes. Practice Java through coding examples and exercises. Build essential skills for backend, enterprise, and application development.",

    ...createCourseMeta({
      price: 699,
      oldPrice: 1399,
      rating: 4.7,
      reviews: 150,
      students: 1400,
      duration: "35 Hours",
      lessons: 34,
      projects: 8,
      instructor: "Rahul Sharma",
    }),

    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Java Hello World", "A74TOX803D0", 0),
      createVideo("Java Variables", "A74TOX803D0", 399),
      createVideo("Java Data Types", "A74TOX803D0", 792),
      createVideo("Java Operators", "A74TOX803D0", 1227),
      createVideo("Java Strings", "A74TOX803D0", 2853),
      createVideo("Java User Input", "A74TOX803D0", 4602),
      createVideo("Conditional Statements", "A74TOX803D0", 5713),
      createVideo("Java Arrays", "A74TOX803D0", 6959),
      createVideo("Java Loops", "A74TOX803D0", 8862),
      createVideo("Object Oriented Programming", "A74TOX803D0", 12518),
    ],
  },
  {
    title: "C Programming",

    image: "c",

    images: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    ],

    description:
      "Build strong programming fundamentals using the C programming language. Learn variables, operators, conditions, loops, and functions. Explore arrays, strings, pointers, and structures in detail. Understand memory management and important programming concepts. Practice problem-solving through C programming examples. Prepare yourself for data structures and advanced programming languages.",

    ...createCourseMeta({
      price: 449,
      oldPrice: 899,
      rating: 4.6,
      reviews: 105,
      students: 980,
      duration: "28 Hours",
      lessons: 30,
      projects: 7,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Introduction to C", "KJgsSFOSQv0", 0),
      createVideo("Installing C Environment", "KJgsSFOSQv0", 300),
      createVideo("Variables in C", "KJgsSFOSQv0", 900),
      createVideo("C Data Types", "KJgsSFOSQv0", 1500),
      createVideo("C User Input", "KJgsSFOSQv0", 2400),
      createVideo("C Arrays", "KJgsSFOSQv0", 3900),
      createVideo("C Functions", "KJgsSFOSQv0", 5100),
      createVideo("C If Statements", "KJgsSFOSQv0", 6500),
      createVideo("C Loops", "KJgsSFOSQv0", 7800),
      createVideo("Pointers in C", "KJgsSFOSQv0", 10400),
    ],
  },

  {
    title: "C++ Programming",

    image: "cplus",

    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    ],

    description:
      "Explore C++ programming and improve your problem-solving abilities. Learn variables, data types, functions, arrays, and control statements. Understand object-oriented programming with classes and objects. Explore pointers, constructors, inheritance, and important C++ concepts. Practice coding through practical examples and projects. Develop skills useful for software development and competitive programming.",

    ...createCourseMeta({
      price: 549,
      oldPrice: 1099,
      rating: 4.8,
      reviews: 170,
      students: 1320,
      duration: "34 Hours",
      lessons: 36,
      projects: 9,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("C++ Introduction", "vLnPwxZdW4Y", 0),
      createVideo("C++ Setup and Hello World", "vLnPwxZdW4Y", 524),
      createVideo("C++ Variables", "vLnPwxZdW4Y", 1195),
      createVideo("C++ Data Types", "vLnPwxZdW4Y", 1903),
      createVideo("C++ Strings", "vLnPwxZdW4Y", 2355),
      createVideo("C++ User Input", "vLnPwxZdW4Y", 3581),
      createVideo("C++ Arrays", "vLnPwxZdW4Y", 4425),
      createVideo("C++ Functions", "vLnPwxZdW4Y", 4803),
      createVideo("C++ Pointers", "vLnPwxZdW4Y", 10751),
      createVideo("Classes and Objects", "vLnPwxZdW4Y", 11606),
    ],
  },

  {
    title: "Artificial Intelligence",

    image: "ai",

    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      "https://images.unsplash.com/photo-1555255707-c07966088b7b",
    ],

    description:
      "Discover important concepts and technologies behind Artificial Intelligence. Learn how intelligent systems solve problems and make decisions. Explore search algorithms, knowledge representation, and machine intelligence. Understand real-world AI applications and intelligent agents. Learn the relationship between AI, machine learning, and modern technologies. Build a foundation for advanced artificial intelligence development.",

    ...createCourseMeta({
      price: 999,
      oldPrice: 1999,
      rating: 4.9,
      reviews: 350,
      students: 2750,
      duration: "50 Hours",
      lessons: 48,
      projects: 15,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Introduction to Artificial Intelligence", "5NgNicANyqM", 0),
      createVideo("Search Algorithms", "5NgNicANyqM", 900),
      createVideo("Knowledge and AI", "5NgNicANyqM", 3600),
      createVideo("Uncertainty in AI", "5NgNicANyqM", 7200),
      createVideo("Optimization", "5NgNicANyqM", 10800),
      createVideo("Machine Learning Concepts", "5NgNicANyqM", 14400),
      createVideo("Neural Networks", "5NgNicANyqM", 18000),
      createVideo("Natural Language Processing", "5NgNicANyqM", 21600),
      createVideo("AI Applications", "5NgNicANyqM", 25000),
      createVideo("Artificial Intelligence Project", "5NgNicANyqM", 28000),
    ],
  },
  {
    title: "Machine Learning",

    image: "ml",

    images: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    ],

    description:
      "Learn machine learning and understand how computers learn from data. Explore supervised and unsupervised learning techniques. Learn data preprocessing, classification, regression, and clustering algorithms. Understand model training and performance evaluation methods. Work with practical datasets and machine learning examples. Develop essential skills required for AI and data science careers.",

    ...createCourseMeta({
      price: 1199,
      oldPrice: 2399,
      rating: 4.9,
      reviews: 420,
      students: 3200,
      duration: "55 Hours",
      lessons: 52,
      projects: 18,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Machine Learning Introduction", "i_LwzRVP7bg", 0),
      createVideo("Features and Labels", "i_LwzRVP7bg", 900),
      createVideo("Supervised Learning", "i_LwzRVP7bg", 1800),
      createVideo("Classification", "i_LwzRVP7bg", 3600),
      createVideo("K Nearest Neighbors", "i_LwzRVP7bg", 5400),
      createVideo("Naive Bayes", "i_LwzRVP7bg", 7200),
      createVideo("Logistic Regression", "i_LwzRVP7bg", 9000),
      createVideo("Neural Networks", "i_LwzRVP7bg", 12600),
      createVideo("Linear Regression", "i_LwzRVP7bg", 16200),
      createVideo("Unsupervised Learning", "i_LwzRVP7bg", 19800),
    ],
  },
  {
    title: "Cloud Computing",

    image: "cloud",

    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    ],

    description:
      "Explore cloud computing and understand modern cloud-based technologies. Learn cloud service models, deployment models, and virtualization concepts. Understand cloud storage, scalability, and infrastructure management. Explore important concepts related to AWS and cloud platforms. Learn how modern applications use cloud computing services. Develop essential knowledge for cloud and DevOps careers.",

    ...createCourseMeta({
      price: 799,
      oldPrice: 1599,
      rating: 4.7,
      reviews: 180,
      students: 1650,
      duration: "36 Hours",
      lessons: 34,
      projects: 10,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Cloud Computing Introduction", "M988_fsOSWo", 0),
      createVideo("Traditional IT vs Cloud", "M988_fsOSWo", 300),
      createVideo("Cloud Computing Benefits", "M988_fsOSWo", 600),
      createVideo("Cloud Service Models", "M988_fsOSWo", 900),
      createVideo("IaaS Explained", "M988_fsOSWo", 1200),
      createVideo("PaaS Explained", "M988_fsOSWo", 1500),
      createVideo("SaaS Explained", "M988_fsOSWo", 1800),
      createVideo("Cloud Deployment Models", "M988_fsOSWo", 2400),
      createVideo("Cloud Security", "M988_fsOSWo", 3000),
      createVideo("Future of Cloud Computing", "M988_fsOSWo", 3600),
    ],
  },

  {
    title: "Database Management",

    image: "db",

    images: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    ],

    description:
      "Learn database management and understand structured data storage systems. Explore database architecture, schemas, and data abstraction concepts. Understand ER models, relationships, and database design principles. Learn transaction management and data independence. Explore data management and information retrieval concepts. Build essential database knowledge required for software and web development.",

    ...createCourseMeta({
      price: 649,
      oldPrice: 1299,
      rating: 4.7,
      reviews: 175,
      students: 1500,
      duration: "32 Hours",
      lessons: 31,
      projects: 8,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Introduction to DBMS", "EJG2DN4mrkI", 0),
      createVideo("Need for DBMS", "EJG2DN4mrkI", 300),
      createVideo("Data Abstraction", "EJG2DN4mrkI", 600),
      createVideo("Database Schema", "EJG2DN4mrkI", 900),
      createVideo("Data Independence", "EJG2DN4mrkI", 1200),
      createVideo("Database Architecture", "EJG2DN4mrkI", 1500),
      createVideo("ER Model", "EJG2DN4mrkI", 1800),
      createVideo("Specialization and Generalization", "EJG2DN4mrkI", 2200),
      createVideo("Transaction Management", "EJG2DN4mrkI", 2700),
      createVideo("Database Design Process", "EJG2DN4mrkI", 3200),
    ],
  },

  {
    title: "UI/UX Design",

    image: "ui",

    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
      "https://images.unsplash.com/photo-1558655146-d09347e92766",
    ],

    description:
      "Learn UI and UX design principles for modern digital applications. Understand typography, colors, layouts, and user-centered design concepts. Create wireframes, prototypes, and responsive interface designs. Learn Figma tools, components, auto layout, and design systems. Explore usability and visual hierarchy principles. Develop practical design skills for websites and mobile applications.",

    ...createCourseMeta({
      price: 699,
      oldPrice: 1399,
      rating: 4.8,
      reviews: 220,
      students: 1950,
      duration: "38 Hours",
      lessons: 35,
      projects: 15,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Introduction to Figma", "jwCmIBJ8Jtc", 0),
      createVideo("Creating a Figma Account", "jwCmIBJ8Jtc", 55),
      createVideo("Creating Shapes", "jwCmIBJ8Jtc", 287),
      createVideo("Typography in Figma", "jwCmIBJ8Jtc", 2174),
      createVideo("Colors in UI Design", "jwCmIBJ8Jtc", 4844),
      createVideo("Margin and Padding", "jwCmIBJ8Jtc", 6548),
      createVideo("Figma Auto Layout", "jwCmIBJ8Jtc", 6968),
      createVideo("Website Design", "jwCmIBJ8Jtc", 10271),
      createVideo("Responsive Design", "jwCmIBJ8Jtc", 14482),
      createVideo("Mobile App Design", "jwCmIBJ8Jtc", 31545),
    ],
  },
  {
    title: "DevOps",

    image: "dos",

    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    ],

    description:
      "Learn modern DevOps practices and understand software delivery workflows. Explore continuous integration, continuous deployment, and automation concepts. Learn version control, containers, infrastructure, and monitoring fundamentals. Understand how development and operations teams collaborate efficiently. Explore important DevOps tools and deployment practices. Build essential skills for modern software development and cloud environments.",

    ...createCourseMeta({
      price: 899,
      oldPrice: 1799,
      rating: 4.8,
      reviews: 205,
      students: 1700,
      duration: "40 Hours",
      lessons: 37,
      projects: 12,
      instructor: "Rahul Sharma",
    }),
    "covers": [
      "30+ Hours on-demand video",
      "Assignments & Projects",
      "Certificate of Completion",
      "Lifetime Access"
    ],
    "includes": [
      "32 Lessons",
      "30+ Hours Video",
      "10 Projects",
      "Certificate"
    ],

    videos: [
      createVideo("Introduction to DevOps", "j5Zsa_eOXeY", 0),
      createVideo("DevOps Principles", "j5Zsa_eOXeY", 600),
      createVideo("Software Development Lifecycle", "j5Zsa_eOXeY", 1200),
      createVideo("Continuous Integration", "j5Zsa_eOXeY", 1800),
      createVideo("Continuous Delivery", "j5Zsa_eOXeY", 2400),
      createVideo("Docker Introduction", "j5Zsa_eOXeY", 3600),
      createVideo("Containerization", "j5Zsa_eOXeY", 4800),
      createVideo("Kubernetes Introduction", "j5Zsa_eOXeY", 6000),
      createVideo("DevOps Monitoring", "j5Zsa_eOXeY", 7200),
      createVideo("DevOps Workflow", "j5Zsa_eOXeY", 8400),
    ],
  },
]



const seedCourses = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URl);

    // Find all instructor users
    const instructors = await User.find({
      role: "instructor",
    });

    // Create a map: instructor name -> MongoDB ObjectId
    const instructorMap = new Map(
      instructors.map((user) => [
        user.name,
        user._id,
      ])
    );

    // Replace instructor names with actual ObjectIds
    const updatedCourses = courses.map((course) => {
      const instructorId = instructorMap.get(
        course.instructor
      );

      if (!instructorId) {
        throw new Error(
          `Instructor not found: ${course.instructor}`
        );
      }

      return {
        ...course,
        instructor: instructorId,
      };
    });

    // WARNING: Deletes all existing courses
    await Course.deleteMany({});

    await Course.insertMany(updatedCourses);

    console.log("Courses Seeded Successfully");

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    await mongoose.disconnect().catch(() => {});
    process.exit(1);
  }
};

seedCourses();



