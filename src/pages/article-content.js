const articles=[
    {
        name: "learn-js",
        title: "Hoisting in JavaScript",
        thumbnail: '/images/blog1.png',
        content:[
            `I have been attending a scholarship program for quite some time now and I recently came across this magical concept of Hoisting!
             In this article, I will be giving you a detailed explanation of Hoisting under different circumstances in the simplest manner possible.
             So, grab a cup of coffee, get your Laptop and let us dive deep into the world of hoisting!`,

`Let’s get started with a basic example. I need to declare, initialize and print a variable. Here’s how I do that:
var x;
x = 7;
console.log('Variable x has a value $x');
Now when I run the above code snippet, I get the output as:
Variable x has a value 7
But what if I change the way I wrote the above code? I shall make the code like this now:
x=7;
console.log('Variable x still has a value $x');
var x;
I get the output again. Without any errors!
Variable x still has a value 7
The phenomena which just happened now is known as Hoisting. Cool, is’nt it?`,

`Defining hoisting in typical form, it is the behavior of JavaScript (not a feature but behavior) wherein JavaScript moves all the declarations to the top of the current scope. Meaning, wherever you declare the variable, you can still access its value anywhere in the program — even before its declaration!
I would like to emphasize on the term “variable declaration”. Variable initializations are not hoisted but declarations are. Let us see an example for the same:
var x;
console.log('Variable x has a value $x');
x=7;
Now, I do not get the correct value of x as my answer. Instead, I get “undefined”.
Variable x has a value undefined
Here, I declared the variable and initialized it after usage but in example 2, I initialized it before use and declared it after use. Hence, only declarations are hoisted and initializations are not. JavaScript scans the code for variable declarations before execution. Hence, we get the value of the variable we use.
Good going! Now, let us understand how hoisting works for variables, functions and many more because not everything in JavaScript is hoisted.`,

`1. Function declarations
Here, we are talking about simple functions in JavaScript and not the function expressions or arrow functions. Function declarations are hoisted and their initial value is that of the function. Let us see an example:
console.log(add(5, 7));
function add(i, j) {
    return i + j;
}
Output → 12
Reason: Here, I’m calling my function even before declaring it and getting the output without any errors. Hence, function declarations are hoisted.
2. The “var” keyword
As we saw in our second example, we were able to use the value of x even before declaration. Hence, variables declared with var keyword (also known as var variables) are hoisted. Initial value →undefined (if initialization is after usage). Hence, var variables are hoisted with initial value of undefined if they are not initialized before variable declaration.
For example:
console.log('My Github username is $me');
var me = "Tanmayee-07";
Output → My Github username is undefined
Reason: The variable “me” got hoisted but since it had initialization after usage, it was initialized with the value ‘undefined’ because we know “Declarations are hoisted, Initializations are not!”
3. Let and const keywords
Variables declared with ‘let’ and ‘const’ are not hoisted. This point is important to remember because a lot of people might think that let and const are hoisted just like var, as all three are used for declaring variables only. But, they being a part of modern JavaScript( JS after ES6 version), they are not hoisted!
console.log(me);
console.log(blogName);
let me = "Tanmayee";
const blogName = "hoisting";
Output → Uncaught ReferenceError: Cannot access ‘me’ before initialization; Reason → let and const variables are not hoisted. So, I cannot access them before declaration.`,

`4. Function expressions and Arrow Functions
Their hoisting depends on the keyword they are used to declare with. As mentioned earlier, variables with let and const are not hoisted whereas variables with var are hoisted. So, if I declare a function expression/arrow function with “var” keyword, they will be hoisted but will have an initial value of undefined. On the other hand, if I declare a function expression/arrow function with “let” or “const” keyword, they will not be hoisted. Let us understand this with examples.
Function Expression Examples:
a. With “var” keyword
console.log(add(3, 5));
var add = function(i, j) {
    return i + j;
};
Output → Uncaught TypeError: add is not a function
Reason → Yes, my function was hoisted but the output is not 8 as one would expect because var has an initial value of undefined. Hence, the function was hoisted but had the value of undefined and we were trying to call “undefined” in the first line which is not possible!
b. With “let” keyword
console.log(addFuncExp(4, 5));
let addFuncExp = function(i, j) {
    return i + j;
};
Output → Cannot access ‘addFuncExp’ before initialization
Reason → let is not hoisted.
c. With “const” keyword
console.log(add(1, 6));
const add = function(i, j) {
    return i + j;
};
Output → script.js:2 Uncaught ReferenceError: Cannot access ‘add’ before initialization
Reason: const is not hoisted.
Arrow Function Examples:
a. With “var”
console.log(addArrowFunc(3, 6));
var addArrowFunc = (i, j) => {
    return i + j;
};
Output → Uncaught TypeError: addArrowFunc is not a function
Reason → Hoisted with initial value of ‘undefined’.
b. With “let”
console.log(add(3, 5));
let add = (i, j) => {
    return i + j;
};
Output → Cannot access ‘add’ before initialization
Reason → let is not hoisted.
c. With “const”
console.log(add(3, 5));
const add = (i, j) => {
      return i + j;
};
Output → Cannot access ‘add’ before initialization
Reason → const is not hoisted.
Conclusion
So, this is it! This is all about hoisting and the concepts lying underneath. I hope this article was helpful enough. Thank you for reading.`
        ],
    },
    {
        name: "learn-difference-between-web-designing-and-web-development",
        title: "Web designer or Web developer? Which one are you?",
        thumbnail: '/images/blog2.jfif',
        content:[
            `What is the difference between a web designer and a web developer? This question is raised by majority of the people. Many a times, people are confused and end up blending the two terms. Well, there is a vast difference between the two. Intrigued? Let’s dive in!
            In case you’re strictly speaking about the overall idea of web design vs. web development, the distinction is somewhat more clear. Web design is concerned with what the user actually sees on their PC or cell phone(the “mainstage”), while web development administers all the code that makes a website tick(the “backstage”).`,

`Web design oversees everything involved with the visual aesthetics and convenience of a website — color scheme, layout, data flow, and everything else related to the visual aspects of the UI/UX (user interface and user experience). Some common skills and tools that distinguish the web designer from the web developer are:
Graphic design
Logo design
Layout/format
Branding
Wireframes, mock-ups, and storyboards
Color palettes
Web design is concerned with creating a website that focusses on aesthetic factors like layout, user interface and other visual imagery in order to make the website more visually appealing and easy to use.. Through the use of color, images, and typography, they bring a digital experience to life. That said, many web designers are also familiar with HTML, CSS, and JavaScript. Web designers likewise frequently work with templating services like WordPress or Drupal, which allows you to create websites using themes and widgets without composing a single line of code.`,

`Web development is the programming that enables website functionality, as per the owner’s requirements. It mainly deals with the non-design aspect of building websites, which includes coding and writing markup. It can be split into two categories — front-end and back-end. The front-end or client-side of an application is the code responsible for determining how the website will actually display the designs created by a designer. The back-end or server-side of an application is responsible for managing data within the database and serving that data to the front-end to be displayed. Some common skills and tools traditionally viewed as unique to the front-end developer are:
HTML/CSS/JavaScript
Frameworks (i.e. AngularJS, ReactJS, Ember)
Libraries (i.e. jQuery)
Git and GitHub
Front-end web developers don’t usually create mock-ups, select typography, or pick color palettes — these are usually provided by the designer. It’s the developer’s job to rejuvenate those models. Having said that, understanding what the designer wants requires a good knowledge in UI/UX design so that the developer is able to cherry pick the right technology to convey the ideal look and believe in the final result.`,

`Well, I am talking about the designer-developer hybrid who can do it all. This has now proved to be a viable endgame for both web designers and web developers, thanks to the increase in the availability of educational resources across the web. Those developers/designers who have a good grasp of both the skills are highly sought after in the industry. The “Tigon” can take your project from the conceptual stage of storyboards, and carry it through front-end development all by themselves. This leads not only to better communication on the team and a smoother workflow, it means you’ll land on the best solution possible. As a general rule, feel free to rely on the “Tigon” for small projects, where it’s feasible for one or two people to handle both the design and development of an application. For bigger undertakings, regardless of whether you do figure out how to recruit a couple “Tigons,” all the more plainly characterized jobs are required.
So, this is it! I hope I was able to clear most of your confusions regarding both the terminologies. Have a good day!`
        ],
    },
{
    name: "cyber-security",
        title: "Introduction to Cyber Security and Cyber-Physical Systems",
        thumbnail: '/images/blog3.jpeg',
        content:[
            `Cyber Security is the protection of computers, servers, cell phones, electronic frameworks, organizations, and data from vindictive attacks. It is the body of technologies and processes designed to protect networks, devices, and data from attack or theft. Cybersecurity is essentially about individuals, processes, and technologies cooperating to incorporate the full range of threat reduction, vulnerability reduction, law enforcement, and so on. Due to the heavy dependency on computers in a cutting-edge industry that store and transmit an abundance of confidential and fundamental data about the people, cybersecurity is a critical function and needed insurance of many organizations.`,

`The three important principles of Cyber Security are the C I A Triad i.e. Confidentiality, Integrity and Availability.
CONFIDENTIALITY
∗ Confidentiality simply refers to protection of authorized users and their approved data.
Methods used to ensure Confidentiality are:
- Data Encryption
- Passwords
- Security Tokens
INTEGRITY
∗ Integrity basically refers to looking after consistency, accuracy, and dependability of data.
∗ Data cannot be modified by people who are unauthorized.
Methods used to ensure Integrity are:
- Checksums
- User Access Controls
- Cryptographic Checksums
AVAILABILITY
∗ Data is available to authorized people as and when required without any further ado.
∗ Safeguards against loss of data or interruptions in network connections.
Methods used to ensure Availability are:
- Backups
- Firewalls
- Proxy Servers`,

`A protocol is a digital language through which we communicate with others over the internet. It is a set of mutually accepted rules for proper exchange of information. There are various types of protocols. Some of them are listed below:
TCP/IP (Transmission Control Protocol/Internet Protocol)
TCP (Transmission control protocol) is used for communication over a network. What actually happens here is, the data is broken down into small packets and then sent to the destination. Moreover, the IP (Internet Protocol) works with TCP and addresses these packets thereby showing them the route to their destination. IP makes sure that the packets are transmitted to the right address.
DHCP (Dynamic Host Configuration Protocol)
DHCP (Dynamic Host Configuration Protocol) is a client-server protocol. It assigns an IP address to any device on a network so that they can communicate using that IP.
DNS (Domain Name System)
DNS (Domain Name Server) is the Internet’s equivalent of a phone book. They maintain a directory of domain names and translate them to IP addresses.
FTP (File Transfer Protocol)
FTP (File transfer protocol) is basically used for transferring files to different networks. There may be a mass of files such as text files, multimedia files, etc. So, this way of file transfer is quicker than the other methods.
ARP (Address Resolution Protocol)
ARP (Address Resolution Protocol) is a network protocol which is used to find out the hardware (MAC) address of a device from an IP address. It is used when a device wants to communicate with some other device on a local network.
HTTP (Hyper Text Transfer Protocol)
HTTP (Hyper Text Transfer Protocol) is based on client and server model. It is used for making a connection between the web client and the web server. HTTP generally shows information in web pages.
SMTP (Simple mail transfer protocol)
SMTP (Simple mail transfer protocol) manages the transmission and outgoing of mails over the internet. It is basically used for sending and receiving e-mails.`,

`Why is it necessary to transfer the protocols to IP address?`,

`This is necessary because, although domain names are easy for people to remember, computers or machines access websites based on IP addresses. So, when you type in a web address, e.g., www.google.com, your Internet Service Provider (ISP) views the DNS associated with the domain name, translates it into a machine friendly IP address (let’s say 74.125.224.72 ) and directs your internet connection to the correct website.`,

`The threats countered by cyber-security are mainly three-fold:
Cybercrime comprises of a person or groups targeting systems for monetary gain or to cause disruption.
Cyber-attack often involves politically roused data gathering.
Cyberterrorism is intended to sabotage electronic frameworks to cause panic or fear.
So, how do malicious attackers oversee computer systems? Here are some common strategies used to undermine cyber-security:
Malware
Malware basically means malicious software. It is one of the most common cyber threats that a hacker has created to disrupt or damage a legitimate user’s computer. Often spread by means of an unsolicited email attachment or authentic-looking download, malware might be utilized by cybercriminals to make money or in politically motivated cyber-attacks.
There are several types of malware. Some of the critical ones are:
· Virus: A self-replicating program that attaches itself to clean file and spreads all through a computer framework, contaminating files with malicious code.
· Trojans: A type of malware that is disguised as real software. Cybercriminals trick clients into transferring Trojans onto their computer where they cause harm or collect information.
· Spyware: A program that secretly records what a user does, so that cybercriminals can utilize their data. For instance, spyware could collect credit card details.
· Ransomware: Malware which locks down a user’s records and information, with the threat of erasing it unless a ransom receives monetary benefits.
· Botnets: Networks of malware infected PCs which the cyber-attackers use to perform tasks online without the permission of the user.
Phishing
Phishing is when cybercriminals target victims with mails that seem to be from a legitimate company asking for sensitive data. Phishing attacks are frequently used to trick people into handing over credit card data and other personal details.
SQL injection
A SQL (structured language query) injection is a type of cyber-attack used to take control of and steal data from a database. Cybercriminals exploit vulnerabilities in data-driven applications to insert malicious code into a databased via a malicious SQL statement. This gives them access to the sensitive information contained in the database.
Man-in-the-middle attack
A man-in-the-middle attack is a type of cyber threat where a cybercriminal intercepts communication between two individuals in order to steal information. For example, on an unsecure WiFi network, the cyber attacker could intercept data being passed from the victim’s device to the network.
Denial-of-service attack
A denial-of-service attack is where cybercriminals prevent a computer system from fulfilling legitimate requests by overwhelming the networks and servers with traffic. This renders the system unusable, preventing an organization from carrying out vital functions`,

`Cyber security is important in light of the fact that administration, military, corporate, financial, and medical organizations gather, process, and store unprecedented amounts of information on computers and other devices. A critical portion of that data can be sensitive information, regardless of whether that be intellectual property, financial information, personal information, or other sorts of data for which unauthorized access or exposure could have adverse effects. Organizations transfer critical data across several networks while doing businesses, and cyber security describes the discipline dedicated to safeguarding that data and the systems used to store it. As the extent of cyber-attacks grow, organizations, specifically those that are allotted the task of safeguarding information relating to national security, health, or financial records, need to take necessary steps to protect their sensitive business and personal information. In March 2013, the nation’s top intelligence officials alerted that cyber-attacks and digital spying are among the top threats to national security, shrouding even terrorism.`,

`A cyber-physical system (CPS) basically implies a blend of computer-aided software segments with mechanical and electronic parts, which can be accessed through a data foundation like server centers where the Internet generally communicates. It is a mechanism intended to be controlled or monitored by PC based algorithms. In CPS, hardware and software components operate on different spatial and temporal scales. Moreover, it is characterized by its high level of intricacy. The hypothetical basis of CPS emerges from the networking of installed systems via wired or wireless communication networks.`,

`Functions of CPS:
· Automatically control and monitor different types of industrial, scientific and business measures.
· Operate as a large-scale system and distribute tasks and roles.
· Require inter-disciplinary systems that are highly dependent on each other.
· Improvise their performance eventually.
· Can self-adapt and change in progressively with real-time scenario.
· Need for powerful decision systems.
Use cases of CPS:
Some examples of CPS include automobile frameworks, clinical monitoring, measure control systems, robotics systems, automatic pilot flying, traffic logistics system and many more. Many instances of CPS surround us in our daily lives. At homes, we have vacuum cleaner, smart lighting systems, smart heating, ventilation, and air-conditioning systems. For transportation purpose we have cars, airplanes, motorized scooters, and electric bicycles. Existing systems like these represent the areas where we can expect to see huge advancement and improvement in future. For instance, while cars have been around for almost 300 years, several new features get added consequently and are now available in vehicle product lines.
Clinical solutions include pacemakers, insulin pumps, personal assistance robots, and smart prosthetics. A large number of these technologies did not even exist until recently and have the potential both to save lives and to significantly improve prosperity and well-being. Wearable fitness and health-monitoring systems guarantee to have a highly positive impact on users, regardless of whether they are healthy or have a physical or an intellectual incapacity. Health monitoring systems are just one illustration of the entire space of sensor networks, which incorporate those made of tiny sensors used to observe large land, marine, or aerial space.
Challenges in Cyber-Physical Systems:
Below are the challenges and risks involved in CPS related to Industry 4.0:
· Information protection and data security
· Lack of benefit quantification
· Absence of prioritization by top administration
· Industrial broadband structure
· Industrial espionage/sabotage
· Production blackouts due to non-accessibility of data`,

`So, this was something that all of us must be aware of. Now that almost the entire world is indulged in some or the other cyber activities be it social networking, education, gaming or general surfing, it is highly necessary for us to stay alert and get shielded against the above mentioned threats and attacks. Hope that the article was helpful and informative! Thanks for reading.`
        ],
    },

{
        name: "blockchain",
            title: "Exploring the Bits of Blockchain Technology",
            thumbnail: '/images/blog4.jfif',
            content:[
                `Have you ever wondered that something called Blockchain would become a hot topic among your colleagues and friends? You may know a bit and might have heard a bit about this. But still, can you talk confidently about Blockchain Technology? This article is specifically for anyone with an interest to learn Blockchain fundamentals in the simplest manner.`,

                `Today, we see a new digitalized era and we are almost approaching the Blockchain era where everything in this world will be a part of Blockchain Technology. So, learning and exploring this world will make you an outstanding person whenever you speak to your business partners, whenever you talk to your colleagues or when you speak during an interview. Having said that, this is going to be a disruptive change with unimaginably high potential to change our lifestyles in the near future!`,

                `Before we get started, let’s have a look at the terms used in Blockchain technology so as to understand the concepts further.
                Cryptography — Cryptography involves creating written or generated codes that allow information to be kept secured.
                Cryptocurrency — The first cryptocurrency to begin the operation was Bitcoin, introduced in 2009, after Satoshi Nakamoto established the basis for Blockchain Technology.
                Bitcoin — Bitcoin is a decentralized currency, meaning it is not supervised by any authority or institution.
                Token — Units of value that can be acquired through Blockchain (E.g. Utility Token and Security Token).
                Ethereum — An open-source, public, Blockchain-based distributed computing platform.
                Miners and Digital mining — Mining is the process through which new Bitcoins are launched onto the market.
                Nodes — The nodes are the computers that form part of the Blockchain network.
                E-Wallet — Digital wallet that allows users to manage Bitcoin and Ether.
                Smart Contracts — A computer code running on top of a Blockchain containing a set of rules for the involved parties to automatically exchange Bitcoins.
                Hash — A hash is a function that converts an input of letters and numbers using an algorithm into an encrypted output of a fixed length.
                Double-Spending — Malicious user tries to spend their bitcoins to two different recipients at the same time.`,

                `A block is a record in the blockchain that contains and confirms many waiting transactions. Roughly every 10 minutes, on average, a new block including transactions is appended to the blockchain through a process called mining. The blockchain is a public record of Cryptocurrencies like Bitcoin transactions in chronological order. The blockchain is shared between all cryptocurrency users. It is used to verify the permanence of Bitcoin transactions and to prevent double spending.`,

                `Key concepts of Blockchain
                Secured using Cryptography
                Cryptography is the method of disguising and revealing (otherwise known as encrypting and decrypting) information through complex mathematics. This means that the information can only be viewed by the intended recipients and nobody else.
                Not Controlled by a Central Authority
                Blockchain overrides the need for a central authority by distributing information previously held in a centralized ledger across a network of computers.
                In this way, not one person or organization owns the Blockchain rather, anyone with an internet connection (and access, in the case of private Blockchains) can make use of it and help maintain and verify it.
                Access to Anyone on the Network
                A Blockchain can be built and accessed in multiple ways. For instance, Bitcoin, the most popular cryptocurrency in Blockchain which allows anyone to participate in the network in the capacity of a full node, or a contributing miner. Anyone can take a read-only role, or make legit changes to the Blockchain like adding a new block. Such Blockchains allow equal and open rights and access to all participants on the network.
                Everyone has copies of the data
                The Blockchain is an open and distributed ledger. It uses an append-only data structure, meaning new transactions and data can be added on to a Blockchain, but past data cannot be erased. This results in a verifiable and permanent record of data and transactions between different parties. This has the potential to increase transparency and accountability, and positively enhance our social and economic systems.`,

                `How Blockchain Works?
                Distributed Ledger
                Block Data & Hash Function
                Proof of Work
                Mining
                Distributed Ledger — It enables a community of users to record transactions in a ledger (public to that community) such that no transaction can be changed once published.
                Block Data & Hash Function — The Blockchain only contains validated transactions, which prevents fraudulent transactions and double spending of the currency. The validation process relies on data being encrypted using algorithmic hashing. The resulting encrypted value is a series of numbers and letters that does not resemble the original data, and is called a hash.
                Proof of work — Proof of work is a mechanism that slows down the creation of new blocks. It takes around 10 minutes to calculate the required proof of work and to add a new block to the chain. You will have to calculate the proof of work for all the blocks if anyone tries to tamper the blocks. So, this security makes it more difficult to tamper with blocks ensuring a secured chain. This responsibility bears on special nodes called miners.
                Mining — Blockchain mining involves adding transactions to the existing blockchain ledger of transactions distributed among all users of a blockchain. Currently, a miner is paid 6.25 Bitcoins for adding a block. The reward of the miner reduces every 4 years!`,

                `Mining Software:
                These are the few softwares which are used currently for the Bitcoin mining process:
                CGMiner
                MultiMiner
                BFGMiner
                BitMinter
                Miner-Server
                Why is Blockchain Revolutionary?
                The technology can work for almost every type of transaction involving value, including money, goods and property. Its potential uses are almost limitless: from collecting taxes to enabling migrants to send money back to family in countries where banking is nearly difficult. Blockchain could also help to reduce fraud because every transaction would be recorded and distributed on a public ledger for anyone to see.
                Greater transparency — Since blockchain is a type of distributed ledger, all network participants share the same documentation as opposed to individual copies.
                Enhanced security — Transactions must be agreed upon before they are recorded.
                Improvised traceability — An audit trail that shows where an asset came from and every stop it made on its journey.
                Reduced costs — No need of third parties or middlemen to make guarantees.`,

                `Limitations of Blockchain Technology
                Any Blockchain network largely depends on the amount of active users within it. In order to operate to its full potential, a network has to be a robust one with a widely distributed grid of nodes. Moreover, there is no Blockchain network in existence that could sustain the same amount of transactions as major card issuers like Visa or MasterCard do. As of 2019, Blockchain still has a very long way to go before it will be capable of replacing the giants of the financial world. Finally, there is always a theoretical possibility of a large-scale capture of any given Blockchain network. If a single organization will somehow manage to gain control of the majority of the network’s nodes, it will no longer be decentralized in the full sense of the word.
                Blockchain has an Environmental Cost — At least, the way it is being used today, it does have an environmental cost. Blockchain relies on encryption to provide its security as well as establish consensus over a distributed network. This essentially means that, in order to “prove” that a user has permission to write to the chain, complex algorithms must be run, which in turn requires large amount of computing power to keep the network running thereby consuming much more energy.
                Lack of Regulation Creates a Risky Environment — Again, this is largely a problem with Bitcoin or other value-based blockchain networks. But the fact is, as many people investing in Bitcoin or other cryptocurrencies for the first time in the last few months have found to their cost, it’s a very volatile environment. Due to the lack of regulatory oversight, scams and market manipulation are common. Among the high profile cases is Oncecoin — recently revealed as a ponzi scheme which is believed to have robbed millions from investors who believed they were getting in early on what would become the “next Bitcoin”.
                Blockchain can be slow — Once again due to their complexity and their encrypted methodologies, distributed nature, blockchain transactions can take a while to process, certainly compared to “traditional” payment systems such as cash or debit cards.`,

                `By now, you must be having a strong knowledge about the fundamentals of Blockchain Technology such as key concepts, Cryptocurrencies & Bitcoins, key terminology, hashing, mining etc. So, that is it from my side. Thanks for reading. Have a good day!`
            ],
    },

    {
            name: "node-js-debugger",
                title: "How To Debug Using Node.js’s Built-In Debugger",
                thumbnail: '/images/blog5.jfif',
                content:[
                    `Have you ever been frustrated because your code didn’t work? Have you tried to look through the entire code for errors only to end up empty-handed at the end of the day? Well, I have! Therefore, it is highly important to develop the skill of debugging in order to save time and energy.
                    So, what exactly is debugging? It is the process of locating and removing computer program bugs, errors, or abnormalities. It checks, detects, and corrects errors (or “bugs”) to allow proper program execution according to the required specifications.`,

                    `Debugging is a multi-stage process that usually follows the steps below:
                    Identify a bug in your program.
                    Find where the bug is located in your code.
                    Analyze why the bug occurs.
                    Fix the bug.
                    Validate that your fix works.
                    After you identify an error in your Node.js program, the first challenge you’ll encounter is to find where exactly the error is located in your code. In order to achieve that, one of the most efficient ways is to run your code step by step so that you get a clear idea of where things start to go wrong.`,

                    `Breakpoints
                    Running through your entire code step by step might be extremely inefficient if your program has thousands of lines of code. In that case, you can use a breakpoint. It allows you to break from your program’s normal execution and pause at a given point in your code.
                    Using breakpoints, you can make your program run normally up until you reach the critical portion of code where you suspect the error is present. Then, you can switch to step by step.
                    There are multiple ways of defining breakpoints in your code based on your debugger and code editor. There’s one universal way to force any JavaScript debugger to pause at a given point: using the debugger statement.`,

                    `Node.js Inspect Mode
                    Since a debugger has full access to the execution environment, a malicious actor could also use it to inject arbitrary code in your Node.js program. That’s why, by default, Node.js doesn’t allow you to debug a running program. You have to enable a special mode called inspector mode to allow debugging.
                    You need the --inspect option to allow a Node.js process to listen for a debugger client that will attach itself to the process and take control of your program execution.
                    By default, when the inspect mode is enabled, it will listen on host 127.0.0.1 on port 9229. You can also specify a custom host and port by using --inspect=<HOST>:<PORT>.
                    Note: Avoid binding the Node.js debugger port to a public IP address or 0.0.0.0. Otherwise, any clients that can connect to your IP address could potentially connect and control your Node.js process. By doing so, an attacker can remotely run arbitrary code on your execution environment. This action could lead to a potentially severe security breach.
                    As an alternative, you can use the --inspect-brk option. It works the same as --inspect, but it breaks code execution just before the start of your code.
                    After Node.js is started with inspect mode enabled, you can use any compatible debugger clients to connect to your Node.js process.`,

                    `You can now use any one of the following commands to control the execution of your program:
                    cont or c: Continues the execution until the next breakpoint or the end of your program.
                    next or n: Executes the next line of code in the current context.
                    step or s: Step in. Same as next, except that if the next line of code is a function call, go to the first line of that function's code.
                    out or o: Step out. If the current execution context is inside the code of a function, execute the remaining code of that function and jump back to the line of code where that function was initially called.
                    restart or r: Restarts the program and pauses the execution before the start of your code.
                    To set or clear breakpoints in your code, use the following commands:
                    setBreakpoint() or sb(): Add a breakpoint on the current line.
                    setBreakpoint(<N>) or sb(<N>): Add a breakpoint on line number N.
                    clearBreakpoint('myscript.js', <N>) or cb('myscript.js', <N>): Clear the breakpoint in the file myscript.js on line number N.
                    To get information about the current execution point, run these commands:
                    list(<N>): List your source code with N lines before and after the current execution point.
                    exec <EXPR>: Evaluate an expression within the current execution context. This command is useful to help you get information about the current state. For instance, you can get the value of a variable named i by using exec i.
                    That’s quite a few commands to remember. Fortunately, you can also use the help command to show the complete list of available commands. To exit the debugger at any time, press Ctrl+D or select the command .exit.`,

                    `Prepare the Environment
                    Now, to put the debugging concepts we just saw into practice, let’s create a short Node.js program to compute the Nth number of the Fibonacci sequence. The Fibonacci sequence is a suite of numbers that starts with the numbers 0 and 1, with every other following number being the sum of the two previous ones.`,

                    `Locate the bug with breakpoints
                    Now let’s add a breakpoint here so that we can quickly move through the loop iterations (i.e. sb()). You should see the same lines displayed again in the console, which indicates that a breakpoint was set at this line. When the current execution point moves, you’ll see a * on the line where you set the breakpoint. Advance to the next loop iteration by running the c command.
                    We can check the current iteration state by running the exec command (i.e. exec [i, c]). You should see [ 3, 1 ] in the console. Because the code hasn't updated the value of c for the current iteration (3), it currently represents the Fibonacci number for the previous iteration. To be cautious, advance step by step through this iteration by using the s command. Try to reach our previous breakpoint, but do it one step at a time.`,

                    `That’s it, we just found our bug! Instead of updating the sum for the iteration 5, the code jumped out of the loop. That’s why we got the result of the previous iteration (3) in our initial run. So, now fix the loop condition by changing i < n to i <= n in the code editor. Now you can exit the debugger by selecting Ctrl+D and then run your program again. You should see the expected result displayed in the console now, which is 5.`,

                    `You can use the built-in debugger in Node.js to learn basic debugging principles and for quick debugging sessions. I hope this article was helpful. Thanks for reading. Have a good day!`

                ],
            },
];

export default articles;