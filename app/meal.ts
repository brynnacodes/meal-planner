class Meal {

  constructor(public name: string, public details: string, public calories: number, public day: string) { }
}

var meals: Meal[] = [];
meals.push(new Meal('lasagna', 'sausage, noodles, basil, marinara', 336, 'Thursday'));
meals.push(new Meal('ice cream', 'mint chocolate chip', 300, 'Thursday'));
meals.push(new Meal('salad', 'lettuce, beets, carrots, goat cheese, vinagrette', 275, 'Thursday'));
console.log(meals);
