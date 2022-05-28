import React from "react";

const Blogs = () => {
  return (
    <div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div class="collapse-content">
          <p>
            Optimizing performance in a React application: Keeping component
            state local where necessary.Memoizing React components to prevent
            unnecessary re-renders. Code-splitting in React using dynamic
            import(). Windowing or list virtualization in React. Lazy loading
            images in React.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div class="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps:Local state, Global state, Server state,URL state
            Local state : Local state is data we manage in one or another
            component. Local state is most often managed in React using the
            useState hook. For example, local state would be needed to show or
            hide a modal component or to track values for a form component, such
            as form submission, when the form is disabled and the values of a
            form's inputs. Global state : Global state is data we manage across
            multiple components. Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at
            least. A common example of global state is authenticated user state.
            If a user is logged into our app, it is necessary to get and change
            their data throughout our application. Sometimes state we think
            should be local might become global. Server state : Data that comes
            from an external server that must be integrated with our UI state.
            Server state is a simple concept, but can be hard to manage
            alongside all of our local and global UI state. There are several
            pieces of state that must be managed every time you fetch or update
            data from an external server, including loading and error state.
            Fortunately there are tools such as SWR and React Query that make
            managing server state much easier. URL state : Data that exists on
            our URLs, including the pathname and query parameters. URL state is
            often missing as a category of state, but it is an important one. In
            many cases, a lot of major parts of our application rely upon
            accessing URL state. Try to imagine building a blog without being
            able to fetch a post based off of its slug or id that is located in
            the URL!
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div class="collapse-content">
          <p>
            he Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the Prototype of an object,
            we use Object. getPrototypeOf and Object. For instance, we have a
            user object with its properties and methods, and want to make admin
            and guest as slightly modified variants of it. We'd like to reuse
            what we have in user, not copy/reimplement its methods, just build a
            new object on top of it. Prototypal inheritance is a language
            feature that helps in that.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div class="collapse-content">
          <p>
            Unit Testing is important because software developers sometimes try
            saving time doing minimal unit testing and this is myth because
            inappropriate unit testing leads to high cost Defect fixing during
            System Testing, Integration Testing and even Beta Testing after
            application is built. If proper unit testing is done in early
            development, then it saves time and money in the end.Some reasons to
            write unit test : Reduce Cyclomatic Complexity Cyclomatic
            complexity, as the name implies, is measure of code complexity. The
            question is how many paths you can take through a code block. The
            more conditional statements you have, the more complex the code
            block is. The more complex the code, the more difficult it is to
            achieve high degrees of unit-test coverage. Unless you go through
            the unit testing exercise, you may not become aware of such
            complexity.
          </p>
        </div>
      </div>

      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts?
        </div>
        <div class="collapse-content">
          <p>
            When we directly update a state, it does not change this.state
            immediately. Instead, it creates a pending state transition, and
            accessing it after calling this method will only return the present
            value. In the above example we do not set products = [...] instead
            of setProducts! Because if we use spread operator we get all recent
            products, but if we use setProduct it it set the products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
