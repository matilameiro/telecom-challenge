// TODO: buscar fecha default
export const getDayName = (
  date: string = "1990-10-17 00:00:00",
  locale = "es-AR"
) => {
  const currentDate = new Date(date);
  return currentDate.toLocaleDateString(locale, { weekday: "long" });
};
