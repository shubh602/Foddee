// const heading= React.createElement("h1",{id:"heading"},"hello world");
// const child=React.createElement("div",{id:"child"},[heading,heading])
// const parent=React.createElement("div",{id:"parent"},[child,child])


// Both are same

const parent=React.createElement("div",
  {id:"parent"},
[React.createElement("div",
  {id:"child1"},
  [React.createElement("h1",{id:"heading1"},"hello world"),React.createElement("h1",{id:"heading2"},"hello world")]),
  React.createElement("div",
    {id:"child2"},
  [React.createElement("h1",{id:"heading1"},"hello world"),React.createElement("h1",{id:"heading2"},"hello world")])])





const root= ReactDOM.createRoot(document.getElementById("root"));  
root.render(parent)






















