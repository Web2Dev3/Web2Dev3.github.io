const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "images/coffee1.jpg",
    id: 1
  },
  {
    name: "Voluptatem",
    image: "images/coffee2.jpg",
    id: 2
  },
  {
    name: "Explicabo",
    image: "images/coffee3.jpg",
    id: 3
  },
  {
    name: "Rchitecto",
    image: "images/coffee4.jpg",
    id: 4
  },
  {
    name: " Beatae",
    image: "images/coffee5.jpg",
    id: 5
  },
  {
    name: " Vitae",
    image: "images/coffee6.jpg",
    id: 6
  },
  {
    name: "Inventore",
    image: "images/coffee7.jpg",
    id: 7
  },
  {
    name: "Veritatis",
    image: "images/coffee8.jpg",
    id: 8
  },
  {
    name: "Accusantium",
    image: "images/coffee9.jpg",
    id: 9
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, id }) =>
      (output += `
              <div class="card" style="padding-bottom: 20px;">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <button class="card--link" data-id=${id}>Like</button>
                <img class="img" id=${id} src="images/heart.png" width="20px" height="20px" />
              </div>
              `)
  );
  container.innerHTML = output;
};

$(document).ready(function(){
        // change the selector to use a class
        $(".card--link").click(function(){
            // this will query for the clicked toggle
            var $toggle = $(this); 

            // build the target form id
            var id = "#" + $toggle.data('id'); 

            $( id ).toggle();
        });
    });

document.addEventListener("DOMContentLoaded", showCoffees);

Notification.requestPermission(result => {
  if (result === 'granted') {
    showNotification('So nice to have you here!', 'Hey there!')
  }
});

function showNotification(title, message) {
  if ('Notification' in window) {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, {
        body: message,
        tag: 'vibration-sample'
      });
    });
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
