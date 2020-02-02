import moment from "moment";

export default (date) => moment.unix(date).format("dddd, DD MMM");