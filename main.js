function howLongToChristmas() {
  const currentDate = new Date();
  const christmasDate = new Date(`${currentDate.getFullYear()}-12-25`);
  const remainedDaysMilliseconds = christmasDate.getTime() - currentDate.getTime();
  const remainedDaysSeconds = remainedDaysMilliseconds / 1000;
  const remainedDaysMinutes = remainedDaysSeconds / 60;
  const remainedDaysHours = remainedDaysMinutes / 60;
  const remainedDays = remainedDaysHours / 24;

  return Math.ceil(remainedDays);
}

function run() {
  const header = document.querySelector('#header-how-long-to-christmas');
  const days = howLongToChristmas();
  const label = days > 1 ? "Days" : "Day";
  header.innerHTML = `${days} ${label} left for christmas`
}

run();
