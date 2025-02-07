export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => num ** 2);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = "";
  words.forEach((element, index) => {
    index === 0
      ? (result += element)
      : (result +=
          element[0].toUpperCase() + element.substring(1, element.length));
  });
  return result;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  const totalSubjects = [];
  people.forEach((person) =>
    person.subjects.forEach((subject) => totalSubjects.push(subject))
  );
  return totalSubjects.length;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  const totalIngredients = [];
  menu.forEach((dish) =>
    dish.ingredients.forEach((thing) => totalIngredients.push(thing))
  );
  return totalIngredients.includes(ingredient);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return [...new Set(arr1.filter((num) => arr2.includes(num)))].sort();
}
