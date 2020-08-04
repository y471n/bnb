/**
 *
 * @param dateTime number
 * @returns string
 */
export const getReadableTime = (dateTime: number) => {
  const dateTimeObj = new Date(dateTime);
  const hour = dateTimeObj.getHours();
  const minutes = dateTimeObj.getMinutes();
  const seconds = dateTimeObj.getSeconds();
  return `${hour}:${minutes}:${seconds}`;
};
