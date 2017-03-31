var Meal = (function () {
    function Meal(name, details, calories, day) {
        this.name = name;
        this.details = details;
        this.calories = calories;
        this.day = day;
    }
    return Meal;
}());
var meals = [];
meals.push(new Meal('lasagna', 'sausage, noodles, basil, marinara', 336, 'Thursday'));
meals.push(new Meal('ice cream', 'mint chocolate chip', 300, 'Thursday'));
meals.push(new Meal('salad', 'lettuce, beets, carrots, goat cheese, vinagrette', 275, 'Thursday'));
console.log(meals);
