class DateService {
  public getShortTime(date: Date | string): string {
    const compDate = new Date(date);

    // Создайте объект Intl.DateTimeFormat с желаемой локалью и опциями
    const formatter = new Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false, // Если нужен 24-часовой формат
    });

    // Получите строку с временем в нужном формате
    const timeString = formatter.format(compDate);

    return timeString;
  }

  public getShortDate(date: Date | string): string {
    const compDate = new Date(date);

    const monthDay = compDate.getDate();
    const monthNumber = compDate.getMonth();
    const weekDay = compDate.getDay();

    const textMonth = this.shortMonthNames[monthNumber];
    const textWeekDay = this.shortDayNames[weekDay];

    return `${monthDay} ${textMonth}. ${textWeekDay}`;
  }

  public getDurationTime(durationMins: number): string {
    const hours = Math.floor(durationMins / 60);
    const days = Math.floor(hours / 24);

    const remainingHours = hours % 24;
    const remainingMinutes = durationMins % 60;

    if (days > 0) {
      return `${days} дн ${remainingHours} ч ${remainingMinutes} мин`;
    } else if (hours > 0) {
      return `${remainingHours} ч ${remainingMinutes} мин`;
    } else if (durationMins > 0) {
      return `${remainingMinutes} мин`;
    } else return '0 мин';
  }

  private shortMonthNames = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  private shortDayNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
}

const dateService = new DateService();

export default dateService;
