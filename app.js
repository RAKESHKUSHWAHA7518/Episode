/**
 * 
 * <div id="parent">
 *      <div id="child">
 *         <h1> I am h1 tag</h1>
 *       </div>
 *  <div id="child">
 * <h1> I am h1 tag</h1>
 * </div>
 * </div>
 * 
 */

const parent = React.createElement("div", { id: "parent"},
 [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i a am h1 tag"), 
    React.createElement("h2", {}, "i a am h2 tag"),
    React.createElement("h3", {}, "i a am h3 tag")
] ),
React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "i a am h1 tag"), 
    React.createElement("h2", {}, "i a am h2 tag"),
    React.createElement("h3", {}, "i a am h3 tag")
] )]
);



// const heading = React.createElement("h1", { id: "heading"}, "Hello Word");
console.log(parent);  
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);