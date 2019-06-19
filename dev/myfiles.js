function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function changeImage(img) {
    var image = document.createElement("img");
    image.src = img;
    image.width = 1000;
    var content = document.getElementById("content");
    while(content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(image);
}

var summary_txt =
    {
        name: "summary.txt",
        type: "txt",
        text: "My name is HyunWook Kang, I'm an [[b;red;black]Electrical Engineering] Major with a [[b;red;black]Computer Science] Minor at [[b;red;black]Ryerson University]\n\n" +
              "I'm experienced in [[b;aqua;black]Python/Linux] development from my internship writing clean and scalable code producing high performant applications. My expertise lies in full stack solutions, especially in user interface programming or databases.\n In terms of software, I am interested in developing and scaling infrastructure. " +
              "My specialties and interests include:\n"+
              "[[b;deeppink;black]Full Stack Development, Mobile Development, Unix Network Programming, Concurrency, Data Structures] (C++ STL)" +
              "\n\n"+
              "When not at work, I enjoy [[b;aqua;black]Web and iOS Development] creating unique user experiences like the one you are seeing now. I love tapping into my creativity and creating unorthodox design. I pride myself in finding unique ways of representing information and media." +
              "\n\n"+
              "I have experience in [[b;aqua;black]finance] and I am interested in statistics. I have a good understanding in [[b;aqua;black]Equity Derivatives] and their valuation models. I was also exposed to [[b;aqua;black]deep learning], but I am more interested in learning quantitative approaches to capturing Alpha."+
              "\n\n" +
              "Finally, I want to improve my leadership and technical skills, hence I am seeking web/iOS developer opportunities and data science roles relating to growth, retention, and user behaviour."
              +"\n\n"



    };

var contact_txt =
    {
        name: "contact.txt",
        type: "txt",
        text: "E-mail: hyunwook.kang[ at ]yahoo.com\n\n" +
              "LinkedIn: https://www.linkedin.com/in/kanghy/\n\n" +
              "GitHub: https://github.com/Phissix\n"
    };

var resume_pdf =
    {
        name: "hk_cv_final.pdf",
        type: "pdf",
        link: "hk_cv_final.pdf"
    };

var resume_txt =
    {
        name: "resume.txt",
        type: "txt",
        text: "\
\n********************************************************************************\
\n                                  HyunWook Kang\
\nhyunwook.kang@yahoo.com                                             416.320.6288\
\n\
\nElectrical Engineering Major, CS Minor, Self-taught developer\
\n********************************************************************************\
\n\
\n   Technical Skills: C/C++, Python, Unix/Linux, Bash, Excel VBA\
\n   Web & Design    : HTML/CSS/Javascript, Flask, Rails 5, PHP, MySQL, Adobe Photoshop\
\n\
\n\
\n***************\
\nWork Experience\
\n***************\
\n   ___________________________________________________________________________\
\n   Qraft Technologies Inc.\
\n   Software Developer Intern - Global Solutions\
\n      - Implemented RESTful web APIs for financial market applications. \
\n      - Analyzed and processed complex data sets using advanced querying, visualization and analytics tools. \
\n      - Utilized web scraping tools to extract and organize financial data. \
\n      - Used machine learning and data mining techniques to optimize a portfolio asset allocation algorithm to 80 percent accuracy. \
\n   ___________________________________________________________________________\
\n   First Service Residential\
\n   Security Concierge\
\n      - Provided directions and customer service to staff members, residents and visitors as required. \
\n      - Maintained and monitored all reservation books and work orders. \
\n      - Coordinated with fire and law enforcement personnel in emergency situations. \
\n   ___________________________________________________________________________\
\n   Eden Landscaping\
\n   Landscaper and Sales Representative\
\n      - Increased clientele and B2C sales by 20 percent.\
\n      - Managed and serviced 10+ seasonal landscaping contracts in Peel region.\
\n      - Operated all ground and gardening equipment safely and efficiently.\
\n\
\n********\
\nResearch\
\n********\
\n\
\n    Nessie: A Decoupled, Client-Driven, Key-Balue Store using RDMA\
\n\
\n*********\
\nEducation\
\n*********\
\n\
\n   Ryerson University\
\n      - Minor in Computer Science\
"
    };

var welcome_txt =
    {
        name: "welcome.txt",
        type: "txt",
        text: "[[b;aqua;black]Welcome to my Website. My name is HyunWook Kang]\nEnjoy your stay.\n\nPress ` to minimize the terminal. Available commands are:\n" +
              "[[b;red;black]cd], [[b;red;black]ls], [[b;red;black]cat], [[b;red;black]open] (opens file like pdf and jpg)\n"
    };

var art_1 =
    {
        name: "DoughBoys.jpg",
        type: "pic",
        link: "images/DoughBoys.jpg"
    };
var art_2 =
    {
        name: "EnchantedBike.jpg",
        type: "pic",
        link: "images/EnchantedBike.jpg"
    };
var art_3 =
    {
        name: "HeartTouching.jpg",
        type: "pic",
        link: "images/HeartTouching.jpg"
    };
var art_4 =
    {
        name: "McDonaldMystery.jpg",
        type: "pic",
        link: "images/McDonaldMystery.jpg"
    };
var art_5 =
    {
        name: "NewYorkStarryNight.jpg",
        type: "pic",
        link: "images/NewYorkStarryNight.jpg"
    };
var art_6 =
    {
        name: "PaintingImitation.jpg",
        type: "pic",
        link: "images/PaintingImitation.jpg"
    };
var art_7 =
    {
        name: "PenDrawing.jpg",
        type: "pic",
        link: "images/PenDrawing.jpg"
    };
var art_8 =
    {
        name: "SeaMonster.jpg",
        type: "pic",
        link: "images/SeaMonster.jpg"
    };

var art =
    {
        name: "Art",
        type: "folder",
        kids: [art_1, art_2, art_3, art_4, art_5, art_6, art_7, art_8],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]hyunwook.kang:/Projects/Art~] ',
                name:   'hyunwook.kang',
                completion: function(term, string, callback) {
                    callback([
                     "SeaMonster.jpg",
                     "PenDrawing.jpg",
                     "PaintingImitation.jpg",
                     "NewYorkStarryNight.jpg",
                     "McDonaldMystery.jpg",
                     "HeartTouching.jpg",
                     "EnchantedBike.jpg",
                     "DoughBoys.jpg"
                              ]);},
              }
    };

var blocipedia =
    {
        name: "blocipedia.git",
        type: "pdf",
        link: "https://github.com/Phissix/blocipedia"
    };
var keleApiClient =
    {
        name: "kele-api-client.git",
        type: "pdf",
        link: "https://github.com/Phissix/kele-api-client"
    };

var bloccit =
    {
        name: "bloccit.git",
        type: "pdf",
        link: "https://github.com/Phissix/bloccit"
    };

var climaWeather =
    {
        name: "climaWeather.git",
        type: "pdf",
        link: "https://github.com/Phissix/ClimaWeather"
    };

var budgetFlashChat =
    {
        name: "budgetFlashChat.git",
        type: "pdf",
        link: "https://github.com/Phissix/BudgetFlashChat"
    };

var todoey =
    {
        name: "todoey.git",
        type: "pdf",
        link: "https://github.com/Phissix/Todoey"
    };

var coding =
    {
        name: "Coding",
        type: "folder",
        kids: [blocipedia, keleApiClient, bloccit, climaWeather, budgetFlashChat, todoey],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]hyunwook.kang:/Projects/Coding~] ',
                name:   'hyunwook.kang',
                completion: function(term, string, callback) {
                    callback([
                            'blocipedia.git',
                            'kele-api-client.git',
                            'bloccit.git',
                            'climaWeather.git',
                            'budgetFlashChat.git',
                            'todoey.git'

                              ]);},
              }
    };



var aboutme =
    {
        name: "AboutMe",
        type: "folder",
        kids: [resume_pdf, contact_txt, resume_txt,summary_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]hyunwook.kang:/AboutMe~] ',
                name:   'hyunwook.kang',
                completion: function(term, string, callback) {
                    callback([
                              'summary.txt',
                              'resume.txt',
                              'contact.txt',
                              'hk_cv_final.pdf'
                              ]);},
              }
    };

var projects =
    {
        name: "Projects",
        type: "folder",
        kids: [art, coding],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]hyunwook.kang:/Projects~] ',
                name:   'hyunwook.kang',
                completion: function(term, string, callback) {
                    callback([
                              'Coding',
                              'Art',
                              ]);},
              }
    };

var blog =
    {
        name: "Blog",
        type: "folder",
        kids: [],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]hyunwook.kang:/Blog~] ',
                name:   'hyunwook.kang',
                completion: function(term, string, callback) {
                    callback([
                              ]);},
              }
    };
var home =
    {
        name: "Home",
        type: "folder",
        kids: [aboutme, blog, projects, welcome_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]hyunwook.kang:/~] ',
                name:   'hyunwook.kang',
                completion: function(term, string, callback) {
                    callback([
                              'welcome.txt',
                              'Projects',
                              'Blog',
                              'AboutMe',
                              ]);},
              }



    };

aboutme.back = home;
blog.back = home;
projects.back = home;
art.back = projects;
coding.back = projects;
