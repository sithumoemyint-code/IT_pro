import html from '../../assets/HTML5_logo_and_wordmark.png'
import php from '../../assets/PHP-logo (1).png'
import css from '../../assets/css-logo.png'
import node from '../../assets/1024px-Node.js_logo.svg.png'
import javascript from '../../assets/Javascript-736400_960_720.png'
import laravel from '../../assets/800px-Laravel.svg.png'
import vue from '../../assets/800px-Vue.js_Logo_2.svg.png'
import react from '../../assets/React-icon.svg.png'
import tailwind from '../../assets/tailwindcss_logo_icon_167923.png'
import typescript from '../../assets/typescript.png'
import expressjs from '../../assets/images.png'
import code1 from '../../assets/code1.jpg'
import code2 from '../../assets/code2.jpg'
import code3 from '../../assets/code3.jpg'
import code4 from '../../assets/code4.jpg'
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import review from '../../assets/1223.jpg'

export const sliderData = [
    {
        image: slider1,
        heading: 'Front-end Developer',
        desc: 'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.'
    },
    {
        image: slider2,
        heading: 'Back-end Developer',
        desc: 'Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scene activities that occur when performing any action on a website. Code written by back-end developers helps browsers to communicate with database information.'
    },
    {
        image: slider3,
        heading: 'Full Stack Developer',
        desc: 'Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate web development domains: the front end and the back end.'
    }
]


export const languages = [
    {
        id: 1,
        image: html,
        heading: "HTML",
        category: "frontend",
        des: "HTML (stands for Hypertext Markup Language) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. The average website includes several different HTML pages. For instance, a home page, an about page, and a contact page would all have separate HTML files. HTML documents are files that end with a .html or .htm extension. A web browser reads the HTML file and renders its content so that internet users can view it. All HTML pages have a series of HTML elements, consisting of a set of tags and attributes. HTML elements are the building blocks of a web page. A tag tells the web browser where an element begins and ends, whereas an attribute describes the characteristics of an element."
    },
    {
        id: 2,
        image: php,
        heading: "PHP",
        category: "backend",
        des: "PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP code – which may be any type of data, such as generated HTML or binary image data – would form the whole or part of an HTTP response. Various web template systems, web content management systems, and web frameworks exist which can be employed to orchestrate or facilitate the generation of that response. Additionally, PHP can be used for many programming tasks outside the web context, such as standalone graphical applications and robotic drone control. PHP code can also be directly executed from the command line." 
    },
    {
        id: 3,
        image: css,
        heading: "CSS",
        category: "frontend",
        des: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting. Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device."
    },
    {
        id: 4,
        image: typescript,
        heading: "Typescript",
        category: "frontend",
        des: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript Checker can be used or the Babel compiler can be invoked to convert TypeScript to JavaScript. TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript."
    },
    {
        id: 5,
        image: node,
        heading: "node.js",
        category: "backend",
        des: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a 'JavaScript everywhere' paradigm unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts."
    },
    {
        id: 6,
        image: javascript,
        heading: "Javascript",
        category: "frontend",
        des: "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."
    },
    {
        id: 7,
        image: laravel,
        heading: "Laravel",
        category: "backend",
        des: "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model-view-controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar."
    },
    {
        id: 8,
        image: vue,
        heading: "VUE",
        category: "frontend",
        des: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."
    },
    {
        id: 9,
        image: react,
        heading: "React",
        category: "frontend",
        des: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality."
    },
    {
        id: 10,
        image: tailwind,
        heading: "Tailwind Css",
        category: "frontend",
        des: "Tailwind CSS can be used to make websites in the fastest and the easiest way. Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. The beauty of this thing called tailwind is it doesn’t impose design specification or how your site should look like, you simply bring tiny components together to construct a user interface that is unique."
    },
    {
        id: 11,
        image: expressjs,
        heading: "Express JS",
        category: "backend",
        des: "Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily. Web applications are web apps that you can run a web brower. Express is a framework of Node.js which means that most of the code is already written for programmers to work whith. You ca build a single page, multi-page or hybrid web applications use Express.js. Express.js is lightweight and helps to organize web applications on the server-side into a more organized MVC architecture. It is important to learn javascript and HTML to be able to use Express.js. Express makes it easier to manage web applications. It is a part of a javascript based technology called MEAN software stack which stands for MongoDB, ExpressJs, AngularJs and Node.js. Express.js is the backend part of MEAN and manages routing, sessions, HTTP requests, error handling, etc."  
    }
]

export const reviews = [
    {
      id: 1,
      name: 'Si Thu Moe Myint',
      job: 'web developer',
      image: review,
      text: "Hein Htet Aung is an amazing teacher, super professional, super kind, very very knowledgeable. After finish his all lession I can get not only code writing but also handle the whole project on my own.",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

export const experiences = [
    {
        id: 1,
        job_title: 'Job in Japan',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia ducimus dignissimos eum aliquam, molestiae illum eveniet nobis, quisquam quas quidem magnam est! Maiores pariatur nulla alias explicabo quasi doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia ducimus dignissimos eum aliquam, molestiae illum eveniet nobis, quisquam quas quidem magnam est! Maiores pariatur nulla alias explicabo quasi doloremque?'
    },
    {
        id: 2,
        job_title: 'Japanese Online Study',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia ducimus dignissimos eum aliquam, molestiae illum eveniet nobis, quisquam quas quidem magnam est! Maiores pariatur nulla alias explicabo quasi doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia ducimus dignissimos eum aliquam, molestiae illum eveniet nobis, quisquam quas quidem magnam est! Maiores pariatur nulla alias explicabo quasi doloremque?'
    },
    {
        id: 3,
        job_title: 'JOS',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia ducimus dignissimos eum aliquam, molestiae illum eveniet nobis, quisquam quas quidem magnam est! Maiores pariatur nulla alias explicabo quasi doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quia ducimus dignissimos eum aliquam, molestiae illum eveniet nobis, quisquam quas quidem magnam est! Maiores pariatur nulla alias explicabo quasi doloremque?'
    },
]

export const road_map = [
    {
        id: 1,
        image: code1,
        header: 'First Road',
        des: "Everything you're doing ends with emitting html. That means you need to know how HTML works before any of the languages can accomplish the end goal of creating a web page. After that, learn CSS, so you can style your html properly."
    },
    {
        id: 2,
        image: code2,
        header: 'Second Road',
        des: 'If you think you know the HTML DOM and CSS, learning JavaScript to manipulate both of them will show you what you really know. It will also show you how to change it on the fly.'
    },
    {
        id: 3,
        image: code3,
        header: 'Third Road',
        des: 'You should learn Front-End development first because Front-End is required in every field of programming for Back-end such as( JAVA, Php, C#, Node.js). Backend is the server-side of the website. It stores and arranges data, and also makes sure everything on the client-side of the website works fine.'
    },
    {
        id: 4,
        image: code4,
        header: 'Fourth Road',
        des: 'After learing back-end, you should learn databases because ultimately they (or files) is where data is kept between runs of whatever program is using them. They allow you to do things relatively easily that would be hard to write programs for otherwise (like searching a multi-million row table of data quickly). They can teach you things like thinking about optimization, not just functionality.'
    },
]