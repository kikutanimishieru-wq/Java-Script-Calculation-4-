// const cart=[
//     { name: "Үзэг", quantity: 1 },
//     { name: "Дэвтэр", quantity: 2 }
// ];
// if (cart[0].quantity > 1) {
//   console.log(cart[0].quantity -= 1);
// } else if (cart[0].quantity === 1) {
//   console.log(cart.splice(0, 1));
// } else {
//   console.log("Хасах бараа алга");
// }

// const settings = { sounds: true, notifications: false }
// const selectedKey = "notifications"
// if (selectedKey in settings) {
//     (settings[selectedKey] = !settings[selectedKey])
//         console.log(settings);
// } else {
//     console.log("Тохиргоо олдсонгүй")
// }

// const profile = {username: "nomi"};

// const takenNames = ["admin", "guest", "bat"]
// const newUsername = "saraa"

// if (newUsername.length < 4) {
//     console.log("Нэр хэт богино");
// } else if (newUsername === profile) {
//     console.log("Нэр өөрчлөгдөөгүй");
// } else if (newUsername === takenNames) {
//      console.log("Энэ нэр ашиглагдаж байна");
// } else {
//     console.log (profile.username=newUsername)
// }

// const file = { name: "lesson.pdf", extension: "pdf", sizeMB: 8 }
// const allowedExtensions= ["pdf", "txt"]
// if (!file.extension === allowedExtensions) {
//     console.log( "Файлын төрөл тохирохгүй");
// }else if (file.extension === allowedExtensions && file.sizeMB > 10) {
//         console.log( "Файл хэт том");
// } else {
//     console.log("Файлыг байршуулах боломжтой")
// }

// const existingMeeting = { start: 10, end: 12 };
// const newMeeting = { start: 11, end: 13 }
// if (newMeeting.start >= newMeeting.end) {
//     console.log("Цагийн мэдээлэл буруу");
// } else if (newMeeting.start < newMeeting.end && newMeeting.start < existingMeeting.end &&
// newMeeting.end > existingMeeting.start) {
//     console.log ("Уулзалтын цаг давхцаж байна")
// } else {
//     console.log ("Уулзалтын цаг давхцахгүй")
// }

// const character = { health: 70, maxHealth: 100, potions: 2 }
// if (character.health === 100) {
//     console.log("эм хэрэглэхгүй");
// } else if (!character.health === 100 && character.potions === 0) {
//     console.log ("Эм дууссан")
// } else  {
//     console.log (character.potions-=1, Math.min(character.health+=40, character.maxHealth))
// }

// const mobilePlan = { remainingGB: 5, extraUsedGB: 0, allowExtra: true };
// const requestedGB = 7;
// if (mobilePlan.remainingGB >= requestedGB) {
//     mobilePlan.remainingGB-=requestedGB ;
// } else if (
//   mobilePlan.allowExtra === true
// ) {

//             mobilePlan.extraUsedGB += requestedGB - mobilePlan.remainingGB,
//             mobilePlan.remainingGB = 0;
// } else   {
// }
// console.log(mobilePlan)

// const parking = { hours: 3, isMember: true }
// let fee = 0;
// if (parking.hours <= 0) {
//     console.log("Хугацаа буру");
// } else {
//     fee = 3000 + (parking.hours - 1) * 2000
//     if (parking.isMember === true) {
//         fee-=fee*0.2
//     }
//  console.log(fee)
// }

// const contact = { email: "", phone: "99112233" }

// if (contact.email !== "") {
//     console.log (contact.email)
// } else if (contact.email === "", contact.phone !== "") {
//     console.log (contact.phone)
// } else {
//     console.log ("Холбоо барих мэдээлэл алга")
// }

// const team = { members: ["Ану", "Бат", "Сараа"], captain: "Тэмүүлэн" };
// const result =
//   team.members.length !== 3
//     ? "Гишүүдийн тоо буруу"
//     : !team.members.includes(team.captain)
//       ? "Ахлагч багийн гишүүн биш"
//       : "Баг баталгаажлаа";
// console.log(result);
// const triangle = { sides: [5, 5, 8] };
// const sides = triangle.sides;

// // if (
// //   sides[0] > 0 &&
// //   sides[1] > 0 &&
// //   sides[2] > 0 &&
// //   sides[0] + sides[1] > sides[2] &&
// //   sides[1] + sides[2] > sides[0] &&
// //   sides[0] + sides[2] > sides[1]
// // ) {
// //   if (sides[0] === sides[1] && sides[1] === sides[2]) {
// //     console.log("Адил талт");
// //   } else if (
// //     sides[0] === sides[1] ||
// //     sides[1] === sides[2] ||
// //     sides[0] === sides[2]
// //   ) {
// //     console.log("Адил хажуут");
// //   } else {
// //     console.log("Элдэв талт");
// //   }
// // } else {
// //   console.log("Гурвалжин үүсэхгүй");
// }

// const account = { password: "old123", isLocked: false };
// const currentPassword = "old123";
// const newPassword = "newpass88";
// const confirmPassword = "newpass88";

// if (account.isLocked === true) {
//   console.log("Account is locked");
// } else if (account.password !== currentPassword) {
//   console.log("Incorrect password");
// } else if (newPassword.length < 8) {
//   console.log("Password too short");
// } else if (newPassword !== confirmPassword) {
//   console.log("Passwords do not match");
// } else {
//   account.password = newPassword;
//   console.log("Password changed successfully");
// }

// console.log(account.password);

// const account = { password: "secret123", failedAttempts: 2, isLocked: false };
// const enteredPassword = "wrong123";
// if (account.isLocked === true) {
//   console.log("Account is Locked");
// } else if (account.password === enteredPassword) {
//   account.failedAttempts = 0;
//   console.log("Login succesful");
// } else if (account.password !== enteredPassword) {
//   account.failedAttempts++;
//   if (account.failedAttempts >= 3) {
//     account.isLocked = true;
//     console.log("account locked");
//   } else {
//     console.log("incorrect Password");
//   }
// }
// console.log(account.failedAttempts);
// console.log(account.isLocked);
