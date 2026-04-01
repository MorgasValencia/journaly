// Journaly - Shared Utilities

function getUser() {
  return JSON.parse(localStorage.getItem("journaly_user"));
}

function saveUser(userData) {
  localStorage.setItem("journaly_user", JSON.stringify(userData));
}

function getLevelInfo(streak) {
  const levels = [
    { name: "🌱 Seedling", days: 0, next: 3 },
    { name: "🌿 Grower", days: 3, next: 7 },
    { name: "🌳 Thriver", days: 7, next: 14 },
    { name: "⭐ Flourisher", days: 14, next: 30 },
    { name: "👑 Master", days: 30, next: 30 },
  ];
  let current = levels[0];
  for (let l of levels) {
    if (streak >= l.days) current = l;
  }
  return current;
}
