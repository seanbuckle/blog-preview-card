"use strict";
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'short' });
const year = currentDate.getFullYear();
const date = document.getElementById('date');
if (date) {
    date.setAttribute("datetime", `${year}-${month}-${day}`);
    date.textContent = `${day} ${month} ${year}`;
}
