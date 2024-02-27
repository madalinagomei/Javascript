
const namee = "Madalina";
const surname = "Gomei";
const fullName = namee + " " + surname;

console.log("Length", fullName.length);
@@ -8,14 +8,14 @@ console.log("toLowerCase", fullName.toLowerCase());
console.log("toUpperCase", fullName.toUpperCase());

console.log("indexOf", fullName.indexOf("i"));
console.log("indexOf", fullName.indexOf("lin"));
console.log("indexOf", fullName.indexOf("ln"));

console.log("includes", fullName.includes("lin"));
console.log("includes", fullName.includes("ln"));

console.log("endsWith", fullName.endsWith("ome"));
console.log("endsWith", fullName.endsWith("oe"));

console.log("replace", fullName.replace("i", "a"));
console.log("replace", fullName.replaceAll("i", "a"));
