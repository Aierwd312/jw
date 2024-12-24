async function scheduleTimer({ providerRes, parserRes } = {}) {
    // 设置开学时间为2025年5月24日的时间戳
    const startSemester = new Date("2025-02-23").getTime();
  
    // 返回时间配置JSON
    return {
      totalWeek: 30, // 总周数
      startSemester: String(startSemester), // 开学时间
      startWithSunday: false, // 是否从周日开始
      showWeekend: true, // 显示周末
      forenoon: 5, // 上午课程节数
      afternoon: 4, // 下午课程节数
      night: 5, // 晚上课程节数应该为5节
      sections: [
        { section: 1, startTime: "08:10", endTime: "08:50" },
        { section: 2, startTime: "09:00", endTime: "09:40" },
        { section: 3, startTime: "09:50", endTime: "10:30" },
        { section: 4, startTime: "10:40", endTime: "11:20" },
        { section: 5, startTime: "11:30", endTime: "12:10" },
        { section: 6, startTime: "14:10", endTime: "14:50" }, // 下午第一节
        { section: 7, startTime: "15:00", endTime: "15:40" },
        { section: 8, startTime: "15:50", endTime: "16:30" },
        { section: 9, startTime: "16:40", endTime: "17:20" },
        { section: 10, startTime: "18:30", endTime: "19:10" }, // 晚上第一节
        { section: 11, startTime: "19:20", endTime: "20:00" },
        { section: 12, startTime: "20:10", endTime: "20:50" },
        { section: 13, startTime: "21:00", endTime: "21:40" },
        { section: 13, startTime: "21:50", endTime: "22:30" } // 晚上最后一节

      ]
    };
  }