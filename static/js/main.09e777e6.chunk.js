(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){},17:function(e,t,o){"use strict";o.r(t);var a=o(0),l=o.n(a),n=o(3),c=o.n(n),s=(o(14),o(15),o(1)),r=o(4),i=o(5),d=o(7),u=o(6),m=o(8),p=(o(16),function(e){function t(){var e,o;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={tempTitle:"",todo:[],sortedTodo:[],id:0,all:"selected",complete:"",active:""},o.handleSubmit=function(e){var t=o.state.tempTitle;e.preventDefault(),o.setState(function(e){return{todo:[].concat(Object(s.a)(e.todo),[{title:t,id:e.id,status:!1}]),tempTitle:"",id:e.id+1}}),o.copyTodoForOperate()},o.addTodo=function(e){o.setState({tempTitle:e.target.value})},o.statusChange=function(e){var t=Number(e.target.id);o.setState(function(e){return{todo:e.todo.map(function(e){return e.id===t?{title:e.title,id:e.id,status:!e.status}:e}),sortedTodo:e.sortedTodo.map(function(e){return e.id===t?{title:e.title,id:e.id,status:!e.status}:e})}}),"selected"===o.state.active&&o.activeTodo(),"selected"===o.state.complete&&o.completeTodo(),"selected"===o.state.all&&o.allTodo()},o.removeTodo=function(e){var t=Number(e.target.id);o.setState(function(e){return{sortedTodo:e.sortedTodo.filter(function(e){return e.id!==t}),todo:e.todo.filter(function(e){return e.id!==t})}})},o.copyTodoForOperate=function(){o.setState(function(e){return{sortedTodo:Object(s.a)(e.todo)}})},o.allTodo=function(){o.setState(function(e){return{sortedTodo:Object(s.a)(e.todo),all:"selected",complete:"",active:""}})},o.activeTodo=function(){o.setState(function(e){return{sortedTodo:Object(s.a)(e.todo).filter(function(e){return!1===e.status}),all:"",complete:"",active:"selected"}})},o.completedTodo=function(){o.setState(function(e){return{sortedTodo:Object(s.a)(e.todo).filter(function(e){return!0===e.status}),all:"",complete:"selected",active:""}})},o.removeCompleted=function(){o.setState(function(e){return{todo:e.todo.filter(function(e){return!1===e.status}),sortedTodo:e.sortedTodo.filter(function(e){return!1===e.status})}})},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.addTodo,value:this.state.tempTitle}))),l.a.createElement("section",{className:"main",style:{display:"block"}},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},this.state.sortedTodo.map(function(t){return l.a.createElement("li",{className:t.status?"completed":""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",checked:t.status,className:"toggle",id:t.id,onClick:e.statusChange}),l.a.createElement("label",{htmlFor:"",style:{display:"block"}},t.title),l.a.createElement("button",{type:"button",className:"destroy",id:t.id,onClick:e.removeTodo})))}))),l.a.createElement("footer",{className:"footer",style:{display:"block"}},l.a.createElement("span",{className:"todo-count"},this.state.sortedTodo.length," ","items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:this.state.all,onClick:this.allTodo},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",className:this.state.active,onClick:this.activeTodo},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",className:this.state.complete,onClick:this.completedTodo},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.removeCompleted},"Delete completed")))}}]),t}(l.a.Component));c.a.render(l.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,o){e.exports=o(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.09e777e6.chunk.js.map