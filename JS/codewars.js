const username = "MrKikowski";

async function fetchUserData(username) {
  try {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${username}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.codeChallenges.totalCompleted;
  } catch (error) {
    console.error("Could not fetch user data:", error.message);
    return "Error fetching data";
  }
}

async function updateCodingTaskElement() {
  const codingTasks = document.getElementsByClassName("codingTask");
  if (codingTasks.length > 0) {
    const totalCompleted = await fetchUserData(username);
    codingTasks[0].innerText = totalCompleted.toString();
  }
}

updateCodingTaskElement();
