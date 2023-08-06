export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error(
      `Humidity level is too high. Expected 70% or lower, actual: ${humidityPercentage}%`
    );
  }
}

export function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError(
      'The sensor seems broken. Expected temperature, actual null.'
    );
  }
  if (temperature < 500) {
    return;
  }

  throw new OverheatingError(temperature);
}

export function monitorTheMachine({
  check,
  alertDeadSensor,
  alertOverheating,
  shutdown,
}) {
  try {
    check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature < 600) {
        alertOverheating();
      } else {
        shutdown();
      }
    } else {
      throw error;
    }
  }
}
