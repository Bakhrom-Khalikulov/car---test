var elCarsList = document.querySelector(".js-cars__list");
var elCarTemplate = document.querySelector(".js-car__template").content;
var newCarsFragment = document.createDocumentFragment();

function getCars(_cars, _node){
    _cars.splice(0, 100).forEach(function(car){
        var newCloneTemplate = elCarTemplate.cloneNode(true);

        newCloneTemplate.querySelector(".js-car__img").src = car.image;
        newCloneTemplate.querySelector(".js-car__title").textContent = car.title;
        newCloneTemplate.querySelector(".js-car__class").textContent = car.class;
        newCloneTemplate.querySelector(".js-car__year").textContent = car.start_production;

        newCarsFragment.appendChild(newCloneTemplate);

    })

    _node.appendChild(newCarsFragment);
}

getCars(cars, elCarsList);