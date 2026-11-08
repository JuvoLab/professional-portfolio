const d=window.portfolio;
const add=(parent,tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;parent.append(e);return e;};
document.querySelector('#resume-bio').textContent=d.about;
for(const x of d.experience){const n=document.querySelector('#resume-experience');add(n,'h3',x.role+' | '+x.org);add(n,'p',x.dates);add(n,'p',x.text);}
for(const x of d.education){const n=document.querySelector('#resume-education');add(n,'h3',x.degree+' | '+x.school);add(n,'p',x.detail+' · '+x.note);}
for(const p of d.projects){
 const article=add(document.querySelector('#resume-research'),'article',null,'resume-study');
 add(article,'h3',p.title);
 const meta=add(article,'div',null,'resume-study-meta');
 add(meta,'p',p.role,'resume-study-role');add(meta,'p',p.dates,'resume-study-date');
 add(article,'p',p.short,'resume-study-summary');
 const list=add(article,'ul',null,'resume-study-contributions');
 p.resumeBullets.forEach(text=>add(list,'li',text));
 add(article,'p',p.context,'resume-study-context');
 const link=add(article,'a','Explore research & methods →','resume-study-link');link.href='index.html#research';
}
for(const x of d.skills)add(document.querySelector('#resume-skills'),'p',x.title+': '+x.items);
document.querySelector('#resume-credentials').textContent=d.credentials.join(' · ');
document.querySelector('#resume-development').textContent=d.professionalDevelopment+'. CPSS is exam candidacy, not certification.';
