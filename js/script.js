/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

console.log(data)

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   var start = (page * 9) - 9;
   var end = page * 9; 
   var studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   var html = '';
   if (list.length === 0) {
      html += `<span id="no-results">No results found</span>`;
   }
   for (let i=0; i < list.length; i++) {
      if (i >= start && i < end) {
         html +=
            `<li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">joined ${list[i].registered.date}</span>
               </div>
            </li>`
      }            
   }
   studentList.innerHTML = html;
};
showPage(list,1)

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
