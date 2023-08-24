$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        if (this.scrollY > 500) {
            $('.scroll-up-button').addClass('show');
        } else {
            $('.scroll-up-button').removeClass('show');
        }
    });

    // slide up script:- 
    $('.scroll-up-button').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    //toggle menu/navbar script:-
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    });

    //    owl-carousel script:-
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            }
        }
    });
});

// Function to handle the download confirmation
function handleDownload() {
    // Ask the user if they want to download the CV
    var confirmation = confirm("Are you sure you want to download the CV?");

    // If the user clicked "Yes," proceed with the download
    if (confirmation) {
        // Replace the link URL with the actual CV file location
        var cvUrl = "https://drive.google.com/uc?export=download&id=1hwTB6zuerC2mjdNnZ8eSotq7Y4QXCZaL";
        window.open(cvUrl, "_blank");
    }
}
// Attach the click event handler to the "Download CV" link
document.getElementById("downloadCV").addEventListener("click", handleDownload);




// Function to handle multiple redirections
function redirectToPage(page) {

    // Check which page to redirect to and replace the content accordingly
    if (page === 'weatherdetection') {
        document.body.innerHTML = `
                <button class="backtohome" onclick="return backToHomePage()">Back to Home</button>
                <div class="redirectpages">
                    <h2>Weather Detection</h2>
                    <h3>Introduction</h3>
                    <div class="contentwrite">
                    <p>The weather detection project is a web application designed to provide users with 
                    real-time weather information for various cities. It offers a user-friendly interface
                     where users can enter the name of a city and click a search button to retrieve the 
                     current temperature of that location in degrees Celsius. Not only does the project
                      display the temperature, but it also shows the entered city's name and its country,
                       making it convenient for users to identify the location for which they are viewing 
                       weather data. By leveraging the power of HTML, CSS, and JavaScript, the project creates
                        an interactive and informative tool to keep users informed about the weather conditions
                         in different areas.</p>
                     <img src="Images/Weather detection1.png" alt="Image 1" onclick="enlargeImage(this)">
                    </div>  
                    <h3> HTML (Basement)</h3>
                    <div class="contentwrite">
                    <p>The HTML code forms the foundation of the weather detection project, providing the structural
                     elements that define the user interface. The primary HTML structure consists of an input field 
                     and a search button, allowing users to input the name of the city they want to check the weather
                      for. Additionally, the HTML includes div containers and span elements to dynamically display the
                      retrieved data, such as the city name, country, and current temperature in degrees Celsius. 
                      Through these elements, users can interact with the web application and view weather information 
                      for their desired locations.</p>
                     <img src="Images/weather1.png" alt="Image 2" onclick="enlargeImage(this)">
                    </div>  
                    <h3>CSS (Style)</h3>
                    <div class="contentwrite">
                    <p>The CSS code plays a crucial role in enhancing the visual appeal and user experience of the weather 
                    detection project. It applies various styles to the HTML elements, ensuring a consistent and aesthetically 
                    pleasing design. The CSS governs the appearance of the input field and search button, making them visually
                     distinct and guiding users to interact with the application intuitively. Additionally, it formats the
                      display section where weather information is presented, carefully choosing fonts, colors, and layout to
                       create a user-friendly interface. The CSS also ensures responsive design, adapting the project's appearance 
                       to different screen sizes, enabling users to access weather data across various devices.</p>
                     <img src="Images/weather2.png" alt="Image 3"  onclick="enlargeImage(this)">
                    </div>  
                    <h3>JavaScript (Action)</h3>
                    <div class="contentwrite">
                    <p>The JavaScript code drives the functionality of the weather detection project, enabling dynamic data retrieval and
                     display. When a user enters a city name and clicks the search button, the JavaScript code initiates an API call to a 
                     weather data provider (such as OpenWeatherMap) using the provided city name as a parameter. The API responds with real-time
                     weather data, including the temperature in Kelvin. The JavaScript code then converts the temperature to degrees Celsius and 
                     updates the HTML elements with the retrieved data. By dynamically modifying the content of the display section, the JavaScript 
                     code presents the entered city's name, its country, and the current temperature in degrees Celsius, providing users with accurate
                      and up-to-date weather information.</p>
                     <img src="Images/weather3.png" alt="Image 4" onclick="enlargeImage(this)">
                    </div>  
                    </div>
                    
                `;
    } else if (page === 'netflixsample') {
        document.body.innerHTML = `
                <button class="backtohome" onclick="return backToHomePage()">Back to Home</button>
                <div class="redirectpages">
                    <h2>Netflix sample</h2>
                    <h3>Introduction</h3>
                    <div class="contentwrite">
                    <p>I have successfully completed a project that replicates the Netflix interface using React.js. In this project, I leveraged 
                    several technologies to create a dynamic and engaging user experience. The foundation of the project was built using React, a powerful
                     JavaScript library, along with the Axios library for efficient data fetching. To enhance the user interface, I integrated the 
                     reactYoutube npm module and utilized the TMDB (The Movie Database) as the backend data server. This unique combination allowed me
                     to create a seamless platform for streaming movie trailers, displaying posters, titles, and descriptions, and delivering a comprehensive
                     entertainment experience to users.</p>
                     <img src="Images/Netflix.png" alt="Image 1"  onclick="enlargeImage(this)">
                    </div>  
                    <h3>Movie Information with TMDB Integration</h3>
                    <div class="contentwrite">
                    <p>The heart of the project lies in its ability to showcase an array of movie posters, titles, and descriptions in an organized manner. 
                    I tapped into the vast resources of the TMDB database to access detailed information about each movie. Through this database, I retrieved 
                    essential data such as movie titles, captivating descriptions, and eye-catching poster images. The front banner of the application
                     elegantly displays a selection of titles and their corresponding images, providing users with a glimpse into the content available.
                      Below the banner, I meticulously designed a scrolling layout that sorts movie posters into two distinct genres: originals and actions. 
                      This layout enables users to effortlessly explore a variety of movies, each possessing a unique movie ID assigned by TMDB.
                       This careful curation and presentation of information enhance the user experience by offering a visually appealing and 
                       user-friendly interface.</p>
                     <img src="Images/netflix2.png" alt="Image 2"  onclick="enlargeImage(this)">
                    </div>  
                    <h3>YouTube Trailer Integration</h3>
                    <div class="contentwrite">
                    <p>One of the project's highlights is the ability to seamlessly display movie trailers from YouTube. This was achieved through the 
                    integration of the react-youtube npm module, which provides an intuitive interface for showcasing trailers. By cross-matching movie
                     IDs from the TMDB database with YouTube trailers, users can simply click on a movie poster to instantly access and watch its corresponding 
                     trailer. This integration not only adds an interactive element but also enriches the overall user engagement. However, I ensured that the 
                     user experience remained smooth even in cases where a trailer is not available for a particular movie. In such instances, an alert message
                      informs users that the trailer is not accessible, maintaining transparency and managing expectations.
                    In summary, my project offers a comprehensive replica of the Netflix platform with a creative blend of technologies. By utilizing React.js,
                     Axios, reactYoutube, and the TMDB database, I have successfully implemented features such as dynamic movie poster displays, engaging
                     titles and descriptions, and seamless YouTube trailer integration. This endeavor showcases my proficiency in frontend development and 
                     highlights my ability to create user-centric applications that provide a captivating entertainment experience.</p>
                     <img src="Images/netflix3.png" alt="Image 3"  onclick="enlargeImage(this)">
                    </div>  
                    </div>
                `;
    } else if (page === 'olxsample') {
        document.body.innerHTML = `
                <button class="backtohome" onclick="return backToHomePage()">Back to Home</button>
                <div class="redirectpages">
                    <h2>olx sample</h2>
                    <h3>Introduction</h3>
                    <div class="contentwrite">
                    <p>In this project, I have developed a comprehensive OLX clone with various key components and functionalities using React.js for the 
                    frontend and Firebase for the backend. The project includes a well-structured home page featuring a header, banner, posts, and footer. 
                    Additionally, I've implemented pages for user registration, login, creating posts, and viewing posts. To enhance user experience, I've 
                    incorporated essential assets such as arrows, hearts, the OLX logo, and a sell button. Leveraging React Router Dom, I've ensured 
                    seamless navigation between pages, utilizing the latest React hooks like useHistory for efficient redirection. To prevent prop drilling,
                    I've employed context creation, establishing a context provider to supply Firebase services uniformly across the application. The project
                    makes use of Firebase's authentication, Firestore for data storage, and Firestorage for handling larger files like images.</p>
                     <img src="Images/OLX.png" alt="Image 1"  onclick="enlargeImage(this)">
                    </div>  
                    <h3>Page Creation and User Authentication</h3>
                    <div class="contentwrite">
                    <p>The project's foundation starts with a robust user signup process. During this phase, I've meticulously captured user details including 
                    username, email, phone number, and password. Firebase's authentication methods, particularly the 'create email with user and password,' have
                    been utilized to establish secure user accounts. Meanwhile, user data like usernames and phone numbers are stored in Firestore using the 'add'
                    functionality, with each entry linked to a unique userID generated during authentication. Following this, I've transitioned to the login page,
                    where users are prompted to provide their credentials. If the information is valid, users are redirected to the home page. To facilitate 
                    personalized interactions, I've integrated a user context that dynamically displays the user's name and a signout button in the header once logged in.</p>
                     <img src="Images/olx2.png" alt="Image 2"  onclick="enlargeImage(this)">
                    </div>  
                    <h3>Dynamic Posting and Product Viewing</h3>
                    <div class="contentwrite">
                    <p>The project extends its capabilities to include dynamic posting creation and viewing. I've designed a user-friendly create page accessed through a 'sell' 
                    button on the home page. Users input post details such as name, category, price, and an image, which is previewed using object URL methods. To ensure 
                    permanent storage, Firebase's Firestore captures most data, while larger images are managed via Firestorage. Through dual context management, I've
                    orchestrated the submission process, including essential user information like userID and timestamps. Additionally, the project takes static viewing posts
                    to a dynamic level. Using useEffect and context, I've retrieved product data from Firebase and applied mapping techniques to display each product distinctively.
                    User details, essential for each post, are cross-referenced and retrieved using Firebase's querying capabilities, creating a comprehensive and engaging viewing
                    experience.
                    In summary, my OLX clone project showcases my proficiency in utilizing React.js and Firebase to create a feature-rich application. From user registration to
                    dynamic post viewing, each component is meticulously designed and integrated, resulting in a seamless and engaging user experience.</p>
                     <img src="Images/olx3-1.jpg" alt="Image 3"  onclick="enlargeImage(this)">
                    </div>  
                    </div>
                `;
    } else if (page === 'realtimechatapp') {
        document.body.innerHTML = `
                <button class="backtohome" onclick="return backToHomePage()">Back to Home</button>
                <div class="redirectpages">
                    <h2>Realtime chat app</h2>
                    <h3>Introduction</h3>
                    <div class="contentwrite">
                    <p>I embarked on an exciting journey to craft a real-time chat application using React.js, aiming to create a dynamic and user-friendly platform for seamless
                     communication. This project encapsulates the essence of modern web development, combining intuitive design, powerful Firebase integration, and responsive user 
                     interactions. With a focus on creating an engaging and functional chat environment, I've meticulously designed two primary pages: the Index page, where the 
                     core chat experience unfolds, and the Sign-In page, enabling users to authenticate and access the chat. These pages boast distinct styling, ensuring a visually 
                     cohesive and aesthetically pleasing user experience.</p>
                     <img src="Images/RealtimeChatapp.png" alt="Image 1"  onclick="enlargeImage(this)">
                    </div>  
                    <h3> Authentication and Dynamic Chatting</h3>
                    <div class="contentwrite">
                    <p>The core functionality of the chat app is deeply rooted in user authentication and real-time communication. By incorporating Firebase as the backend technology,
                    I've harnessed its capabilities to provide hassle-free Google sign-in using the GoogleProvider. Once authenticated, users are seamlessly redirected to the Index
                    page, the heart of the chat experience. Here, users find a dynamic interface where they can send and receive messages in real-time. The integration of Firebase's 
                    'add' method empowers users to store their entered messages, complete with their username (captured during sign-in), user image, and a timestamp capturing the
                    exact date and time of each message. The smooth execution of data storage is complemented by user-friendly alerts, reassuring users of the success or failure 
                    of their message submissions.</p>
                     <img src="Images/chatapp2.png" alt="Image 2"  onclick="enlargeImage(this)"> 
                    </div>  
                    <h3>Communication and Collaboration</h3>
                    <div class="contentwrite">
                    <p>In a world that thrives on instant connectivity, my real-time chat app paves the way for effective communication and collaboration. The project's foundation
                    is built on sound frontend practices, backed by powerful Firebase integration, rendering the app efficient and robust. User authentication through Google sign-in
                    ensures a secure environment, while real-time message updates enhance the sense of community and instant interaction. The app's responsive design and intuitive
                    interface further elevate the user experience, making communication fluid and effortless. By effectively combining these elements, the app not only showcases 
                    my proficiency in React.js and Firebase but also highlights my dedication to creating practical and engaging applications that serve the modern user's needs.</p>
                     <img src="Images/chatapp3.png" alt="Image 3"  onclick="enlargeImage(this)">
                    </div>  
                    </div>
                `;
    } else if (page === 'shoppingcart') {
        document.body.innerHTML = `
                <button class="backtohome" onclick="return backToHomePage()">Back to Home</button>
                <div class="redirectpages">
                    <h2>Shopping Cart</h2>
                    <h3>Introduction</h3>
                    <div class="contentwrite">
                    <p>The "Shopping Cart" project, built upon the Node.js and MongoDB stack, is a dynamic eCommerce website that's still in development. By incorporating Bootstrap 
                    libraries, the project ensures responsiveness, with a user-friendly interface designed for both admin and regular users. Utilizing Handlebars (.hbs) templates, 
                    the project achieves a modular structure, including layouts, partials, and pages such as error and index. These templates dynamically generate content, enhancing 
                    the project's adaptability. The separation of admin and user interfaces, coupled with conditional checks for user roles, underscores the project's versatility.
                    While navigation is facilitated through router methods, like '/admin' and '/', the admin interface stands out with its table-based design, contrasting the user
                    interface's card layout. A central feature involves product management, where an admin can add product details, including name, category, price, description,
                    and image, via a dedicated form. Upon submission, products are stored in the database and the cart. This ambitious project is a work in progress, with the
                    groundwork laid for seamless navigation, role-based access, and product management.</p>
                     <img src="Images/Shopping cart.jpg" alt="Image 1"  onclick="enlargeImage(this)">
                    </div>  
                    <h3>Admin Interface and Product Management</h3>
                    <div class="contentwrite">
                    <p>Diving into the project's core, the admin interface takes center stage. Differentiated from the user interface's card layout, the admin interface relies on 
                    tables for efficient product management. An essential facet of the admin panel is the capability to add new products. Achieved through a form, this feature
                    collects crucial product details: name, category, price, description, and an image upload option. On submission, products are not only added to the cart but
                    also stored persistently in the MongoDB database. The use of the 'express-fileupload' npm module streamlines the image upload process, enhancing user experience.
                    With this pivotal functionality, the project sets the stage for a comprehensive product inventory management system, facilitating seamless updates and additions
                    to the catalog.</p>
                     <img src="Images/cart2.png" alt="Image 2"  onclick="enlargeImage(this)">
                    </div>  
                    <h3>Configuring MongoDB and Beyond</h3>
                    <div class="contentwrite">
                    <p>As the project advances, configuring the MongoDB database emerges as a critical step. Leveraging the 'mongodb' npm module, the project establishes a connection
                    to the database. Successful connection results in a reassuring message confirming the connection, while any errors indicate the need for troubleshooting. Once the
                    database connection is established, the focus shifts to handling form data. With data transfer to the server facilitated through the 'add' method, the project 
                    lays the foundation for robust data manipulation. While the project is still a work in progress, these crucial components mark significant milestones in its
                    development journey, highlighting its potential to become a comprehensive and user-oriented eCommerce platform.</p>
                     <img src="Images/cart3.png" alt="Image 3"  onclick="enlargeImage(this)">
                    </div>  
                    </div>
                `;
    } else if (page === 'corexy') {
        document.body.innerHTML = `
                <button class="backtohome" onclick="return backToHomePage()">Back to Home</button>
                <div class="redirectpages">
                    <h2>Core-XY 3D Printer</h2>
                    <h3>Introduction</h3>
                    <div class="contentwrite">
                    <p>3D printer is based on the technology of additive manufacturing. It builds an object layer
                    by layer, so it can build a very complicated geometrical object. The term 3D printing can refer to
                    a variety of processes in which metal is deposited, joined or solidified under computer control to
                    create a 3D dimensional object. The CORE XY printers are one of the most distinctive and
                    versatile 3D printers. Unlike other 3Dprinter designs, CORE XY printhead uses a belt motion
                    system and typically move on the xy axis hence the name.
                    FDM technique is used for 3D printing, within which the filament is liquefied into a molten
                    state and also allowed to solidify once a layer has been shaped. FDM could be a quicker technique
                    than the opposite ones, however lacks in higher resolution if care isn't taken. There are some 3D
                    printers that also use multi extruders to combine completely different colors and to print a colorful
                    object. The future aim of this work is to review the possibility of reusing polymeric material for
                    3D printing. The attention is to paid to the recycling potential, existing commercial solutions, and
                    programs related to the promotion of the idea of reuse of waste materials. The work also included
                    possible changes in the polymer material, which may occur during subsequent extrusion.
                    To obtain consumable products. The 3D printing market is a well growing sector. Printable
                    filaments can be made from variety of thermoplastic materials, including those from recycling.
                    </p>
                     <img src="Images/corexy.jpg" alt="Image 1" onclick="enlargeImage(this)">
                    </div>  
                    <h3>Design and Fabrication</h3>
                    <div class="contentwrite">
                    <p>The design of the model has to be done in software where the actual model with the
                    required dimensions is developed so that it can be used to print the model. To develop and
                    fabricate the model there are many processes and parameters involved, mainly design of the
                    model. The design process started by keeping the print volume as a basic design parameter. As
                    the objective of the project is the construction of economical and sizable 3D Printer, a print
                    volume of 200 x 200 x 200 mm3 is selected. The 3-Dimensional motion is achieved by
                    synchronization of movements in X, Y and Z directions. This mechanism uses 5 stepper motors,
                    two for Z-axis movement (Up and down movement relative motion of two stepper motor provide
                    X axis movement and Y axis movement and one for Extrude filament. This mechanism uses two
                    motors to control lead screws to which connected to get the movement in Z-direction.</p>
                     <img src="Images/coreXY2.png" alt="Image 2"  onclick="enlargeImage(this)">
                    </div>  
                    <h3>Marlin Firmware</h3>
                    <div class="contentwrite">
                    <p>Marlin firmware can be used in any of single-processor electronics, like supporting for
                    ultimaker, ramps, and several other Arduino Mega2560 based 3D printers. It supports printing
                    over USB or from SD cards with folders and uses look-ahead trajectory planning. Marlin is
                    licensed under the GNU GPL v3 or later. It is based on sprinter firmware, licensed under GPL v2
                    or later. Marlin Firmware runs through a 3D printer's main board, to manage all the real-time
                    activities on the machine. It coordinates the heaters, buttons, sensors, steppers, LCD display, lights
                    and everything will be involved in the 3D printing operation. Marlin implies on additive
                    manufacturing process called as FDM. In this process a motor pushes the thermoplastic filament
                    into a hot nozzle which melts and extrudes the material while the nozzle is moved under computer
                    control. After several minutes it starts laying layer by layer to form a physical object. The control-
                    language for Marlin is used to derivative of G-code. G-code gives commands about machine to
                    do simple things like to “set heater 1 to 210°,” or “move to XY at speed F.” To print a model
                    through Marlin, it must be converted to G-code using a program called a “slicer.” Since every
                    printer is different, but we won't find G-code files from download we should need to slice by
                    yourself. As Marlin receives movement of all commands it allows themselves into a movement
                    queue to be executed in the order received. The stepper will interrupt the processes for queue and
                    they start converting linear movements into precisely-timed electronic pulses to the stepper
                    motors. Even at modest speeds Marlin needs to generate thousands of stepper pulses every second.
                    Since CPU speed limits how fast the machine can be moved, we're always looking for new ways
                    to optimize the stepper interrupt! Heaters and sensors are managed in a second interrupt that
                    executes at much slower speed, while the main loop handles command processing, updating the
                    display, and controller events. For safety purpose in Marlin firmware, it will actually reboot the
                    CPU gets too overloaded to read the sensors.</p>
                     <img src="Images/coreXY.png" alt="Image 3" onclick="enlargeImage(this)">
                    </div>  
                    </div>
                `;
    }

}

// Function to go back to the home page
function backToHomePage() {
    // Reload the page to go back to the original content
    location.reload();
    return false; // Prevent default link behavior
}



// 'read more' button full description:--



// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all the "Read More" links
    const readMoreLinks = document.querySelectorAll(".read-more-link");

    // Add click event listeners to each link
    readMoreLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the link from navigating to another page
            // Toggle the visibility of the full description
            const fullDescription = this.nextElementSibling;
            fullDescription.classList.toggle("show");
            // Change the text of the link to "Hide" or "Read More" based on the visibility of the full description
            this.textContent = fullDescription.classList.contains("show") ? "Hide Content" : "Read More";
        });
    });
});

// to enlarge the Images :-
function enlargeImage(image) {
    image.classList.toggle("enlarged");
}

// contact form submission :-
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzrSu3JUtqZC_2bMxvlkYnwpRNmC6Jjd_nPh0WgJZgs8NDjfaSESsVG4QthD_H-nXZQ/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})


