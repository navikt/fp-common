import dayjs from 'dayjs';

const dateFormat = 'DD.MM.YYYY';
const dateFormatExtended = 'DD. MMM YYYY';

export const formatDate = (date: Date | string) => dayjs(date).format(dateFormat);
export const formatDateExtended = (date: Date | string) => dayjs(date).format(dateFormatExtended);
