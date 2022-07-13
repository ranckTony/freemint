export const timeFrom = (created_at: string) => {
    let dateTime = Number( created_at ? new Date(created_at) : new Date());
    // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
    if (dateTime.toString().length === 10) dateTime *= 1000;
    let timestamp = +new Date(Number(dateTime));

    let timer = (Number(new Date()) - timestamp) / 1000;
    // 如果小于5分钟,则返回"刚刚",其他以此类推
    let tips = '';
    switch (true) {
        case timer < 300:
            tips = 'just now';
            break;
        case timer >= 300 && timer < 3600:
            tips = parseInt(timer / 60 + '') + ' min ago';
            break;
        case timer >= 3600 && timer < 86400:
            const hours = parseInt(timer / 3600 + '')
            tips = hours + ' ' + (hours === 1 ? 'hour' : 'hours') + ' ago';
            break;
        case timer >= 86400 && timer < 2592000:
            const days = parseInt(timer / 86400 + '')
            tips = days + ' ' + (days === 1 ? 'day' : 'days') + ' ago';
            break;
        default:
            if (timer >= 2592000 && timer < 365 * 86400) {
                const months = parseInt(timer / (86400 * 30) + '')
                tips = months + ' ' + (months === 1 ? 'months' : 'months') + ' ago';
            } else {
                const years = parseInt(timer / (86400 * 365) + '')
                tips = years + ' ' + (years === 1 ? 'year' : 'years') + 'year ago';
            }
    }
    return tips;
}