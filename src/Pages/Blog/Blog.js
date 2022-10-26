import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <div>
          <div>
            <h5>Question 1: What is Cors?</h5>
          </div>
          <div className="mb-4">
            <u>Answer</u> : Cross-origin resource sharing (CORS) is a mechanism
            that allows restricted resources on a web page to be requested from
            another domain outside the domain from which the first resource was
            served. A web page may freely embed cross-origin images,
            stylesheets, scripts, iframes, and videos. Certain "cross-domain"
            requests, notably Ajax requests, are forbidden by default by the
            same-origin security policy. CORS defines a way in which a browser
            and server can interact to determine whether it is safe to allow the
            cross-origin request. It allows for more freedom and functionality
            than purely same-origin requests, but is more secure than simply
            allowing all cross-origin requests. The specification for CORS is
            included as part of the WHATWG's Fetch Living Standard. This
            specification describes how CORS is currently implemented in
            browsers. An earlier specification was published as a W3C
            Recommendation. CORS failures result in errors but for security
            reasons, specifics about the error are not available to JavaScript.
            All the code knows is that an error occurred. The only way to
            determine what specifically went wrong is to look at the browser's
            console for details.
          </div>
          <div>
            <h5>
              Question 2: Why are You Using Firebase? What other options you
              have to implement Authentication
            </h5>
          </div>
          <div className="mb-4">
            <u>Answer</u> : Firebase provides tools to grow your app and
            business, for startups & global enterprises. Get your app up and
            running quickly & securely with fully managed backend
            infrastructure. Boost App Engagement. Customize Your App. Release
            Apps Confidently. Backed by Google. Firebase Authentication provides
            backend services, easy-to-use SDKs, and ready-made UI libraries to
            authenticate users to your app. It supports authentication using
            passwords, phone numbers, popular federated identity providers like
            Google, Facebook and Twitter, and more. Instead, you can just have a
            method to store user information after the user authenticates with
            Firebase. Also, there is considerable time saved since you can avoid
            developing server-side methods for different kinds of token
            verification in case you want to add social logins like Facebook and
            Google. All that will be handled efficiently with Firebase. <br />
            Others Alternatives are MongoDb, Okta, Auth0, Json Web Token, Amazon
            Congnito etc.
          </div>
          <div>
            <h5>Question 3: How does the Private Route Work</h5>
          </div>
          <div className="mb-4">
            <u>Answer</u> : The private route component is similar to the public
            route, the only change is that redirect URL and authenticate
            condition. If the user is not authenticated he will be redirected to
            the login page and the user can only access the authenticated routes
            If he is authenticated. PrivateRoute component is the blueprint for
            all private routes in the application. If the user is logged in, go
            on and display the component in question; otherwise, redirect the
            user to sign-in page. Additionally, we can define the logic of
            isLogin utility function separately in utils folder. The react
            private route component renders child components ( children ) if the
            user is logged in. If not logged in the user is redirected to the
            /login page with the return url passed in the location state
            property.
          </div>
          <div>
            <h5>Question 4: What is Node? How does Node Works?</h5>
          </div>
          <div className="mb-4">
            <u>Answer</u> : Although there were other projects to bring
            JavaScript to server-side applications, the functionality took off
            with the launch of Node.js in 2009. Node allows developers to write
            JavaScript code that runs directly in a computer process itself
            instead of in a browser. Node can, therefore, be used to write
            server-side applications with access to the operating system, file
            system, and everything else required to build fully-functional
            applications. Node.js is written in C, C++, and JavaScript, and it
            is built on the open-source V8 JavaScript engine which also powers
            JS in browsers such as Google Chrome. As V8 supports new features in
            JavaScript, they are incorporated into Node. <br />
            Node as a REPL Node can also be used in a terminal window as a
            Read-Evaluate-Print-Loop, or REPL. This functionality allows you
            execute JavaScript commands from the command line. With Node
            installed, you can launch the REPL by running the node command in a
            terminal and pressing Enter. You are now in an interactive
            JavaScript environment and can run any valid JavaScript code such as
            4 + 5. After executing a command, Node will always print the result
            of that evaluation.
            <br />
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
