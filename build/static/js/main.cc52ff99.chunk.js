(this["webpackJsonpquiz-demo"]=this["webpackJsonpquiz-demo"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),i=n.n(s),a=n(1),r=n(4),o=n(5),c=n(7),u=n(6),d=[{id:0,question:"What is the capital of Nigeria?",options:["New Delhi","Abuja","Owerri","Enugu"],answer:"Abuja"},{id:0,question:"What is the capital of India?",options:["New Delhi","Abuja","Mumbai","Ashgabat"],answer:"New Delhi"},{id:0,question:"What is the capital of Australia?",options:["Melbourne","Akokwa","Owerri","Sydney"],answer:"Sydney"},{id:0,question:"What is the capital of Turkey?",options:["Rijadh","Ankara","Istanbul","Abakaliki"],answer:"Ankara"},{id:0,question:"What is the capital of Syria?",options:["Syria","Damascus","Anambra","Enugu"],answer:"Damascus"}],l=(n(12),n(0)),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).loadQuiz=function(){var e=s.state.currentIndex;s.setState((function(){return{question:d[e].question,options:d[e].options,answer:d[e].answer}}))},s.nextQuestionHandler=function(){var e=s.state,t=e.userAnswer,n=e.answer,i=e.score;t===n&&s.setState({score:i+1}),s.setState({currentIndex:s.state.currentIndex+1,userAnswer:null})},s.checkAnswer=function(e){s.setState({userAnswer:e,disabled:!1})},s.finishHandler=function(){s.state.currentIndex===d.length-1&&s.setState({quizEnd:!0})},s.state={userAnswer:null,currentIndex:0,options:[],quizEnd:!1,score:0,disabled:!0},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentIndex;this.state.currentIndex!=t.currentIndex&&this.setState((function(){return{question:d[n].question,options:d[n].options,answer:d[n].answer}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.question,s=t.options,i=t.currentIndex,a=t.userAnswer;return t.quizEnd?Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Game Over. Final score is ",this.state.score," points"]}),Object(l.jsx)("p",{children:"The correct Answer for the quiz are"}),Object(l.jsx)("ul",{children:d.map((function(e,t){return Object(l.jsx)("li",{className:"options",children:e.answer},t)}))})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("span",{children:"Question ".concat(i+1," of ").concat(d.length)}),s.map((function(t){return Object(l.jsx)("p",{className:"options ".concat(a===t?"selected":null),onClick:function(){return e.checkAnswer(t)},children:t},t.id)})),i<d.length-1&&Object(l.jsx)("button",{disabled:this.state.disabled,onClick:this.nextQuestionHandler,children:"Next Question"}),i===d.length-1&&Object(l.jsx)("button",{onClick:this.finishHandler,disabled:this.state.disabled,children:"Finish"})]})}}]),n}(a.Component);function b(){return Object(l.jsx)("div",{children:Object(l.jsx)(h,{})})}t.default=b;var j=document.getElementById("root");i.a.render(Object(l.jsx)(b,{}),j)}},[[14,1,2]]]);
//# sourceMappingURL=main.cc52ff99.chunk.js.map