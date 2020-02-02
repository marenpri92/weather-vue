import moment from "moment";

export default (date) => moment.unix(date).format("HH:MM");