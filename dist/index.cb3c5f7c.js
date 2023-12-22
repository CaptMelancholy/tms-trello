class t{#t=void 0;constructor(t){this.#t=t}get getElement(){return this.#t}set setElement(t){this.#t=t}static hideElement(t){t.classList.add("hide")}static showElement(t){t.classList.remove("hide")}static setRedBorder(t){t.classList.add("red-border")}static removeRedBorder(t){t.classList.remove("red-border")}}class e extends t{constructor(t,e,s,i,a,r){super(void 0),this.id=t,this.listId=e,this.title=s,this.description=i,this.author=a,"string"==typeof r?this.time=r:this.time=r.toLocaleString("default",{month:"long"})+", "+this.checkTime(r.getDate())+" "+this.checkTime(r.getHours())+":"+this.checkTime(r.getMinutes())+":"+this.checkTime(r.getSeconds())}removeCard(){this.element.remove()}checkTime=t=>t<10?t="0"+t:t;get elementData(){return{entity:this,id:this.id,title:this.title,description:this.description,author:this.author,time:this.time,element:this.element}}updateInfo(t,e,s){this.element.querySelector(".field__list-cards__card-info-title").textContent=t,this.element.querySelector(".field__list-cards__card-info-description").textContent=e,this.element.querySelector(".field__list-cards__card-footer-user").textContent=s,this.title=t,this.description=e,this.author=s}showCard(t){t.insertAdjacentHTML("beforeend",`
                <div id="card_${this.id}" class="field__list-cards__card card">
                  <div class="field__list-cards__card-identificators">
                  </div>
                  <button class="field__list-cards-card-control">
                    ***
                  </button>
                  <div class="field__list-cards__card-info card">
                    <p class="field__list-cards__card-info-title card">
                      ${this.title}
                    </p>
                    <p class="field__list-cards__card-info-description card">
                      ${this.description}
                    </p>
                  </div>
                  <div class="field__list-cards__card-footer card">
                    <p class="field__list-cards__card-footer-user card">
                      ${this.author}
                    </p>
                    <p class="field__list-cards__card-footer-time card">
                      ${this.time}
                    </p>
                  </div>
                </div>
        `),this.element=t.querySelector("#card_"+this.id),e.removeShowingCard(document.querySelector(".body"))}static showAddingCard(e,s,i){this.removeShowingCard(e);let a=`<div class="field__list-cards__adding-card">
            <input type="text" placeholder="Title for this card" class="title-for-card"/>
            <input type="text" placeholder="Description for this card" class="description-for-card" />
            <select class="select-for-card"></select>
            <button class="field__list-cards__card__add">
                Add Card
            </button>
        </div>`;s.insertAdjacentHTML("beforeend",a),t.hideElement(i)}static removeShowingCard(e){let s=e.querySelectorAll(".field__list-cards__adding-card"),i=e.querySelectorAll(".field__list-add");Array.from(s).forEach(t=>t.remove()),Array.from(i).forEach(e=>t.showElement(e))}}class s{static checkNeedOfRemoving(t){return!(t.classList.contains("field__list-cards__card__add")||t.classList.contains("field__list-cards__adding-card")||t.classList.contains("title-for-card")||t.classList.contains("description-for-card")||t.classList.contains("select-for-card")||t.parentNode.classList.contains("select-for-card"))}static checkAddingCard(e,s){return""!==e.value&&""!==s.value||(""===e.value?t.setRedBorder(e):t.removeRedBorder(e),""===s.value?t.setRedBorder(s):t.removeRedBorder(s),!1)}}class i extends t{#e=new Map;get getCardsList(){return this.#e}constructor(t,e){super(void 0),this.name=t,this.id=e}set setName(t){this.name=t}addCardToList(t){this.#e.set(t.id,t)}getCard(t){return this.#e.get(t)}removeFromTheList(t){this.#e.get(t).entity.removeCard(),this.#e.delete(t)}removeList(){this.element.remove()}removeAllCardsFromTheList(){this.#e.forEach((t,e,s)=>{t.entity.removeCard(),s.delete(e)})}getListInfo(){return{entity:this,id:this.id,name:this.name,element:this.element,cards:this.#e}}addList(){let t=document.querySelector("#root");t.insertAdjacentHTML("beforeend",`
        <div id="list_${this.id}" class="field__list">
            <div class="field__list-nav">
                <input
                type="text"
                class="field__list-nav__title"
                value="${this.name}"
                />
                <button class="field__list-nav__control">
                ***
                </button>
            </div>
            <div class="field__list-cards"></div>
            <button class="field__list-add add-card-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="add-card-button"
                >
                    <mask
                    id="mask0_4_70"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    >
                    <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_4_70)">
                    <path
                        d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z"
                        fill="#49454E"
                    />
                    </g>
                </svg>
                <p class="field__add-button__button-title add-card-button">Add a card</p>
                </button>
        </div>
        `),this.element=t.querySelector("#list_"+this.id)}}class a{#s=new Map;pushList(t){this.#s.set(t.id,t)}popList(t){this.#s.delete(t)}getList(t){return this.#s.get(t).entity}get getCollection(){return this.#s}printCollection(){console.log(this.#s)}}class r{static saveToLocalStorage(t){t.forEach((t,e,s)=>{let{id:i,name:a,cards:r}=t,o=Array.from(r.values());localStorage.setItem(e,JSON.stringify({id:i,name:a,cards:o}))})}static removeItemFromLocalStrorage(t){localStorage.removeItem(t)}static getFromLocalStorage(t,s){if(0!==localStorage.length){let a=[];for(let t in localStorage)localStorage.hasOwnProperty(t)&&a.push(JSON.parse(localStorage.getItem(t)));a.reverse(),a.forEach(a=>{let{id:r,name:o,cards:d}=a,l=new i(o,s.idLists);l.addList(),t.pushList(l.getListInfo());let n=l.element.querySelector(".field__list-cards");d.forEach(t=>{let{title:i,description:a,author:r,time:o}=t,d=new e(s.idCards,l.id,i,a,r,o);d.showCard(n),l.addCardToList(d.elementData)})})}}}const o=document.querySelector(".body"),d=new class{#i=0;#a=0;constructor(){}get idLists(){return this.#i++,this.#i}get idCards(){return this.#a++,this.#a}get currentMaximumIdList(){return this.#i}},l=new a,n=new class{constructor(){this.flagList=!1,this.flagCard=!1,this.body=document.querySelector(".body"),this.overlay=document.querySelector(".overlay")}showCardModal(e,s,i,a){if(this.id=i,this.flagList||this.flagCard)return;this.flagCard=!0,this.entity=a;let r=`<section class="modal">
            <div class="modal-header">
                <h3 class="modal-header-title">CARD: ${e}</h3>
                <button class="modal-header-button">\u{2A09}</button>
            </div>
            <div class="modal-container">
                <input type="text" class="modal-input title" value="${e}" />
                <input type="text" class="modal-input description" value="${s}" />
                <select class="modal-input select">
                </select>
                <button class="modal-submit submit-card">SUBMIT</button>
                <button class="modal-submit delete-card">DELETE</button>
            </div>
        </section>`;this.body.insertAdjacentHTML("afterbegin",r),t.showElement(this.overlay)}closeModal(){this.flagList&&(this.flagList=!1),this.flagCard&&(this.flagCard=!1),document.querySelector(".modal").remove(),t.hideElement(this.overlay)}getCardInfo(){let t=document.querySelector(".modal");if(this.flagCard){let e=this.entity,s=this.id,i=t.querySelector(".modal-input.title").value.trim().toUpperCase(),a=t.querySelector(".modal-input.description").value.trim(),r=t.querySelector(".modal-input.select");return{entity:e,id:s,newTitle:i,newDescription:a,newAuthor:r.options[r.selectedIndex].text}}if(this.flagList)return this.id}showListModal(e,s){if(this.flagList||this.flagCard)return;this.flagList=!1,this.id=s;let i=`<section class="modal">
            <div class="modal-header">
                <h3 class="modal-header-title">LIST: ${e}</h3>
                <button class="modal-header-button">\u{2A09}</button>
            </div>
            <div class="modal-container">
                <button class="modal-submit delete-list">DELETE</button>
                <button class="modal-submit delete-all-cards">DELETE ALL CARDS</button>
            </div>
        </section>`;this.body.insertAdjacentHTML("afterbegin",i),t.showElement(this.overlay)}closeListModal(){document.querySelector(".modal").remove(),t.hideElement(this.overlay)}};!function t(){let e=t=>t<10?t="0"+t:t,s=new Date,i=s.getHours(),a=e(s.getMinutes()),r=e(s.getSeconds());document.getElementById("header__clocks__content").textContent=i+":"+a+":"+r,setTimeout(t,1e3)}();const c=new class{async getData(){try{this.todos=await fetch("https://jsonplaceholder.typicode.com/todos").then(t=>t.json()),this.users=await fetch("https://jsonplaceholder.typicode.com/users").then(t=>t.json())}catch(t){console.log(t)}}async getDataAuthors(){try{this.users=await fetch("https://jsonplaceholder.typicode.com/users").then(t=>t.json())}catch(t){console.log(t)}}getRandomList(t){return this.getRandomIntInclusive(1,t)}getRandomAuthor(){let t=this.getRandomIntInclusive(0,Array.from(this.users).length-1),{name:e}=Array.from(this.users).at(t);return e}getAuthors(){return Array.from(this.users)}setAuthors(t){Array.from(this.users).forEach((e,s)=>{let i=document.createElement("option");i.value=s.toString();let{name:a}=e;i.text=a,t.add(i,t.options[s])})}getTodos(t){return Array.from(this.todos)}getRandomIntInclusive(t,e){return t=Math.ceil(t),Math.floor(Math.random()*((e=Math.floor(e))-t+1)+t)}};0===localStorage.length?(await c.getData(),new class{constructor(t,e,s){this.handler=t,this.lists=e,this.apiController=s;let a=new i("TO-DO",this.handler.idLists),r=new i("IN PROGRESS",this.handler.idLists),o=new i("COMPLITED",this.handler.idLists);a.addList(),r.addList(),o.addList(),this.lists.pushList(a.getListInfo()),this.lists.pushList(r.getListInfo()),this.lists.pushList(o.getListInfo())}initializeLists(t){0===localStorage.length&&t.forEach(t=>{let{title:s}=t,i=this.apiController.getRandomList(this.handler.currentMaximumIdList),a=new e(this.handler.idCards,i,s,s,this.apiController.getRandomAuthor(),new Date),r=document.querySelector("#list_"+i).querySelector(".field__list-cards");a.showCard(r),this.lists.getList(i).addCardToList(a.elementData)})}}(d,l,c).initializeLists(c.getTodos(),c.getAuthors()),r.saveToLocalStorage(l.getCollection)):(await c.getDataAuthors(),r.getFromLocalStorage(l,d)),o.addEventListener("click",t=>{let i=t.target;if(console.log(i),i.classList.contains("add-card-button")){for(;!i.classList.contains("field__list-add");)i=i.parentNode;e.showAddingCard(o,i.parentNode,i),c.setAuthors(o.querySelector(".select-for-card"))}else s.checkNeedOfRemoving(i)&&e.removeShowingCard(o);if(i.classList.contains("field__list-cards__card__add")){let i=t.target.parentNode,a=i.querySelector(".title-for-card"),o=i.querySelector(".description-for-card"),n=i.querySelector(".select-for-card");if(s.checkAddingCard(a,o)){let t=i.parentNode.querySelector(".field__list-cards"),s=i.parentNode.getAttribute("id").substr(5),c=new e(d.idCards,parseInt(s),a.value,o.value,n.options[n.selectedIndex].text,new Date);c.showCard(t),l.getList(parseInt(s)).addCardToList(c.elementData),r.saveToLocalStorage(l.getCollection)}}if(i.classList.contains("field__list-nav__control")){let t=i.parentNode.parentNode.getAttribute("id").substr(5),e=l.getList(parseInt(t));n.showListModal(e.name,e.id)}if(i.classList.contains("field__list-cards-card-control")){let t=i.parentNode,e=t.getAttribute("id").substr(5),s=t.parentNode.parentNode.getAttribute("id").substr(5);console.log(s);let a=l.getList(parseInt(s)).getCard(parseInt(e)).entity;n.showCardModal(a.title,a.description,a.id,a),c.setAuthors(document.querySelector(".modal-input.select"))}if(i.classList.contains("submit-card")){let{entity:t,id:e,newTitle:s,newDescription:i,newAuthor:a}=n.getCardInfo(),o=l.getList(t.listId),d=o.getCard(e).entity;d.updateInfo(s,i,a),o.addCardToList(d.elementData),l.printCollection(),r.saveToLocalStorage(l.getCollection),n.closeModal()}if(i.classList.contains("delete-card")){let{entity:t}=n.getCardInfo();l.getList(t.listId).removeFromTheList(t.id),r.saveToLocalStorage(l.getCollection),n.closeModal()}if(i.classList.contains("modal-header-button")&&n.closeModal(),i.classList.contains("delete-all-cards")){let t=l.getList(parseInt(n.id));console.log(t),t.removeAllCardsFromTheList(),r.saveToLocalStorage(l.getCollection),n.closeModal()}if(i.classList.contains("delete-list")){let t=l.getList(parseInt(n.id));console.log(t),t.removeAllCardsFromTheList(),t.removeList(),l.popList(t.id),r.removeItemFromLocalStrorage(t.id),n.closeModal()}}),o.addEventListener("mousedown",t=>{let e=t.target;if(e.classList.contains("card")){for(;!e.classList.contains("field__list-cards__card");)e=e.parentNode;let a=e.parentNode,o=document.querySelectorAll(".field__list"),d=a.parentNode.getAttribute("id").substr(5),n=parseInt(e.getAttribute("id").substr(5));function s(t,s){e.style.left=t-e.offsetWidth/2+"px",e.style.top=s-e.offsetHeight/2+"px"}function i(t){s(t.pageX,t.pageY)}e.classList.add("card_move"),document.body.append(e),s(t.pageX,t.pageY),document.addEventListener("mousemove",i),e.onmouseup=function(){document.removeEventListener("mousemove",i);let t=Array.from(o).find(t=>{let s=t.getBoundingClientRect(),i=e.getBoundingClientRect();return s.left<=i.x&&s.right>=i.x});if(e.classList.remove("card_move"),e.onmouseup=null,t){let s=t.getAttribute("id").substr(5),i=l.getList(parseInt(s)),a=l.getList(parseInt(d));i.addCardToList(a.getCard(n)),a.removeFromTheList(n),t.querySelector(".field__list-cards").append(e),r.saveToLocalStorage(l.getCollection)}else a.append(e)},e.ondragstart=function(){return!1}}}),o.addEventListener("input",e=>{let s=e.target;if(s.classList.contains("field__list-nav__title")){if(""===s.value.trim().length)alert("You need to add title"),t.setRedBorder(s);else{t.removeRedBorder(s);let e=s.value.trim(),i=s.parentNode.parentNode.getAttribute("id").substr(5),a=l.getList(parseInt(i));a.setName=e,l.pushList(a.getListInfo()),r.saveToLocalStorage(l.getCollection)}}});