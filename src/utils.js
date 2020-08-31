function timeDifference(elapsed) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + "s ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + "min ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + "hr ago";
  } else if (elapsed < msPerMonth) {
    return "approx " + Math.round(elapsed / msPerDay) + "d ago";
  } else if (elapsed < msPerYear) {
    return "approx " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approx " + Math.round(elapsed / msPerYear) + "y ago";
  }
}

export function conditionSwitcher(condition) {
  switch (condition) {
    case "nogo":
      return "No Go";
    case "caution":
      return "Caution";
    case "mostly":
      return "Mostly Good";
    case "gtg":
      return "GTG!!!";
    default:
      break;
  }
}

export function processDate(ms) {
  const timeDisplayOptions = {
    timeZoneName: "short",
  };
  const datetime = new Date(ms).toLocaleString("en-US", timeDisplayOptions);
  const now = new Date();
  const agoMillis = now - new Date(ms);

  const ago = timeDifference(agoMillis);

  return { datetime, ago };
}