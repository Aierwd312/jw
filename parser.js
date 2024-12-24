function scheduleHtmlParser(html) {
    let result = [];
    const bbb = $('#table1 .timetable_con');
    
    bbb.each((_, element) => {
        let re = { sections: [], weeks: [] };
        const aaa = $(element).find('span');
        const week = $(element).parent('td')[0].attribs.id;
        if (week) {
            re.day = parseInt(week.split('-')[0]);
        }
        aaa.each((_, span) => {
            if (span.attribs.title === '上课地点') {
                re.position = $(span).next().text().trim().substring(0, 50);
            } else if (span.attribs.title === '节/周') {
                const lesson = $(span).next().text();
                const [sections, weeks] = lesson.split(')').map(s => s.trim());
                const [startSection, endSection] = sections.replace(/[^0-9\-]/g, '').split('-').map(Number);
                for (let i = startSection; i <= endSection; i++) {
                    if (i >= 1 && i <= 30) {
                        re.sections.push(i);
                    }
                }
                if (weeks) {
                    const weekParts = weeks.split(',').map(part => part.replace(/[^0-9\-]/g, ''));
                    weekParts.forEach(part => {
                        if (part.includes('-')) {
                            const [startWeek, endWeek] = part.split('-').map(Number);
                            for (let i = startWeek; i <= endWeek; i++) {
                                if (i >= 1 && i <= 30) {
                                    re.weeks.push(i);
                                }
                            }
                        } else {
                            const week = parseInt(part);
                            if (week >= 1 && week <= 30) {
                                re.weeks.push(week);
                            }
                        }
                    });
                }
            } else if (span.attribs.title === '教师') {
                re.teacher = $(span).next().text().trim().substring(0, 50);
            } else if (span.attribs.class === 'title' || span.attribs.title === '教学班名称') {
                if ($(span).children('u').length > 0) {
                    re.name = $(span).children('u').text().trim().substring(0, 50);
                } else {
                    re.name = $(span).text().trim().substring(0, 50);
                }
            }
        });
        if (!re.name) {
            const titleElement = $(element).children('.title');
            if (titleElement.length > 0) {
                re.name = titleElement.text().trim().substring(0, 50);
            }
        }
        result.push(re);
    });
    
    console.log(result);
    return result;
}