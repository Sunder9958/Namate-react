/**
 * <div id="parent"
 * <div id="child">
 * <h1> I am h1 tag>
 * <h2>I am h1 tag<h2/>
 * </div>
 * 
 * ReavtEmlement(Object)=>HTML(Browser Understands)
 */
const parent=React.createElement=(
    "div",
    {id:"parent"},
    React.createElement(
        "div",

        React.createElement({id:"child"}),[

            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h1",{},"I am h1 tag"),

        ]     
    )
    
);
      console.log(parent); //object

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
 
