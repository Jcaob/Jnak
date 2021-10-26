Da = document.getElementById("Description")

let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }



  function Hover1(){
    Da.innerHTML ="Click on me to learn more about me"
    TweenLite.from(Da,
      {duration: .9,  alpha: 0}
    );
  }
  function Hover2(){
    Da.innerHTML ="Click on me to find out more on the world i created"
    TweenLite.from(Da,
      {duration: .9,  alpha: 0}
    );
  }
  function Hover3(){
    Da.innerHTML ="Click on me to see my resume"
    TweenLite.from(Da,
      {duration: .9,  alpha: 0}
    );
  }
  function Hover4(){
    Da.innerHTML ="Click on me to see some of my old projects"
    TweenLite.from(Da,
      {duration: .9,  alpha: 0}
    );
  }

  function out(){
    Da.innerHTML=""
    TweenLite.from(Da,
      {duration: .9, alpha: 10}
    );
  }
  