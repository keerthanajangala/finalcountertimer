(this.webpackJsonppro1=this.webpackJsonppro1||[]).push([[0],{47:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(20),c=a.n(i),r=(a(47),a(37)),l=a(38),o=a(42),d=a(41),u=a(98),h=a(99),m=a(39),j=a.n(m),b=a(3),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={endDate:new Date,days:0,hours:0,minutes:0,seconds:0,errorMsg:""},e.onEndDateChange=function(t){e.setState({endDate:t})},e.getTwoDigitValue=function(e){return e<10?"0"+e:""+e},e.calculateCountdown=function(){var t=new Date,a=e.state.endDate,n="";if(a<t&&(n="Please select end date and time greater than current date and time."),e.setState({errorMsg:n}),a.getTime()-t.getTime()>0){var s=new Date(t),i=new Date(a),c=s.getTime(),r=i.getTime()/1e3-c/1e3,l=Math.floor(r/86400);r-=24*l*60*60;var o=Math.floor(r/3600);r-=60*o*60;var d=Math.floor(r/60);r-=60*d,l=Math.abs(l),o=Math.abs(o),d=Math.abs(d),r=Math.floor(Math.abs(r)),e.setState((function(){return{days:l,hours:o,minutes:d,seconds:r}}),(function(){e.timer=setTimeout(e.calculateCountdown,1e3)}))}else e.setState({errorMsg:"Times up!"}),clearTimeout(e.timer)},e}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.hours,n=e.minutes,s=e.seconds,i=e.errorMsg,c=this.getTwoDigitValue(t),r=this.getTwoDigitValue(a),l=this.getTwoDigitValue(n),o=this.getTwoDigitValue(s);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"date-time-form",children:[Object(b.jsx)("h1",{children:"Countdown Timer"}),i&&Object(b.jsx)("p",{className:"error-msg",children:i}),Object(b.jsxs)(u.a,{children:[Object(b.jsxs)(u.a.Group,{controlId:"end_date",children:[Object(b.jsx)(u.a.Label,{className:"heading",children:"End Date"}),Object(b.jsx)(j.a,{format:"dd/MM/y h:mm:ss a",onChange:this.onEndDateChange,value:this.state.endDate})]}),Object(b.jsx)(h.a,{variant:"danger",type:"button",onClick:this.calculateCountdown,children:"Begin Countdown"})]})]}),Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsxs)("div",{className:"time",children:[Object(b.jsx)("div",{className:"time-value",children:c}),Object(b.jsx)("div",{className:"time-label",children:"Days"})]}),Object(b.jsxs)("div",{className:"time",children:[Object(b.jsx)("div",{className:"time-value",children:r}),Object(b.jsx)("div",{className:"time-label",children:"Hours"})]}),Object(b.jsxs)("div",{className:"time",children:[Object(b.jsx)("div",{className:"time-value",children:l}),Object(b.jsx)("div",{className:"time-label",children:"Minutes"})]}),Object(b.jsxs)("div",{className:"time",children:[Object(b.jsx)("div",{className:"time-value",children:o}),Object(b.jsx)("div",{className:"time-label",children:"Seconds"})]})]})]})}}]),a}(s.a.Component),v=(a(94),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))});c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[95,1,2]]]);
//# sourceMappingURL=main.2a461c29.chunk.js.map