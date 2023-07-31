# TechBlog
TechBlog is a NextJS application designed to showcase and share insightful blog posts related to software development.
# Features
View engaging blog posts on various software development topics.

Easily navigate through the blog posts with a user-friendly interface.

Experience a clean and attractive design that enhances readability.

Code snippets are beautifully highlighted using react-syntax-highlighter.

Stay connected by submitting inquiries through the contact form.

User details submitted through the contact form are securely stored in a MongoDB database.

## Screenshots
![HomePage](https://github.com/IanKaire/TechBlog/assets/114652346/5a180add-15ec-47ee-a8dc-bb16995c0648)
![AllPosts](https://github.com/IanKaire/TechBlog/assets/114652346/c4440bae-bd33-4667-89d6-0922ba8ba5e3)
![BlogPost Detail](https://github.com/IanKaire/TechBlog/assets/114652346/341f7b66-70b3-4118-b4bf-9654c2153c15)
![ContactPage](https://github.com/IanKaire/TechBlog/assets/114652346/ac02b0c3-571f-4f52-90bd-c90a48df82eb)

# Key Dependencies Used
1. **gray-matter**: a lightweight and flexible library used to parse front-matter from content files. Front-matter is metadata placed at the beginning of a file, typically used to store additional information about the content.
  In the context of the blog app, gray-matter is used to extract metadata like title, image, date, and other relevant information from the markdown files.
  
2. **react-markdown**: a React component that converts markdown text into rendered HTML elements. It enables one to display markdown content as properly formatted HTML within their React applications.
  In the blog app, react-markdown is used to render the markdown content of each blog post into readable and well-structured articles on the user interface.
  It provides an easy way to display markdown content without the need for custom parsing or formatting.
  
3. **react-syntax-highlighter**: a React component that highlights code syntax within pre-rendered code blocks. It supports various syntax highlighting themes and languages, making code snippets more visually appealing and readable.
  In TechBlog app, react-syntax-highlighter is used to enhance the presentation of code snippets in blog posts, making them stand out and easier to understand.

Gray-matter helps in extracting relevant metadata from markdown files, react-markdown transforms markdown content into HTML for rendering, and react-syntax-highlighter adds visual appeal to code snippets in blog posts.

## Installation and Setup
1. Clone the repository: git clone https://github.com/your-username/your-repo.git

2. Install dependencies: npm install or yarn install

3. Configure MongoDB: Set up a MongoDB database and update the connection settings in the app.

4. Run the app: Use npm run dev or yarn dev to start the development server and view the app in your web browser.
