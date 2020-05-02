import moment from "moment";

export const format_to_date = (datetime: any) => {
  return moment(datetime).format("YYYY-MM-DD");
};

export const format_to_date_time = (datetime: any) => {
  return moment(datetime).format("DD/MM/YYYY, hh:mm A");
};

export const format_to_time = (datetime: any) => {
  return moment(datetime).format("hh:mm a");
};

export const format_duration = (millis: any) => {
  return moment.duration(millis).asHours() + "h";
};

export const getTimestamp = (time: any) => {
  return moment(time).valueOf();
};

export const getTime = (tiemstamp: any) => {
  return moment(tiemstamp).toDate();
};
export const format_to_custom_needs = (datetime: any) => {
  return moment(datetime).format("YYYY,MM,DD");
};
export const format_reverse_oder_date = (datetime: any) => {
  return moment(datetime).format("DD/MM/YYYY");
};
export const format_to_twelve = (datetime: any) => {
  return moment(datetime, "h:mm a").format("HH:mm");
};
