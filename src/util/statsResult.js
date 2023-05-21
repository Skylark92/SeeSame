import percent from "./percent";

function statsResult(stats) {
  // console.log(stats);
  const result = {
    total: {},
    man: {},
    woman: {},
    MBTI: []
  };

  /* */
  try {
    result.total.choiceA = percent(stats.choiceA.total, stats.total); // 총 A선택지
    result.total.choiceB = percent(stats.choiceB.total, stats.total); // 총 B선택지

    //
    result.man.청춘A = percent(stats.choiceA.남자.청춘, stats.choiceA.남자.청춘 + stats.choiceB.남자.청춘);
    result.man.청춘B = percent(stats.choiceB.남자.청춘, stats.choiceA.남자.청춘 + stats.choiceB.남자.청춘);
    result.man["40대A"] = percent(stats.choiceA.남자["40대"], stats.choiceA.남자["40대"] + stats.choiceB.남자["40대"]);
    result.man["40대B"] = percent(stats.choiceB.남자["40대"], stats.choiceA.남자["40대"] + stats.choiceB.남자["40대"]);
    result.man["30대A"] = percent(stats.choiceA.남자["30대"], stats.choiceA.남자["30대"] + stats.choiceB.남자["30대"]);
    result.man["30대B"] = percent(stats.choiceB.남자["30대"], stats.choiceA.남자["30대"] + stats.choiceB.남자["30대"]);
    result.man["20대A"] = percent(stats.choiceA.남자["20대"], stats.choiceA.남자["20대"] + stats.choiceB.남자["20대"]);
    result.man["20대B"] = percent(stats.choiceB.남자["20대"], stats.choiceA.남자["20대"] + stats.choiceB.남자["20대"]);
    result.man["10대A"] = percent(stats.choiceA.남자["10대"], stats.choiceA.남자["10대"] + stats.choiceB.남자["10대"]);
    result.man["10대B"] = percent(stats.choiceB.남자["10대"], stats.choiceA.남자["10대"] + stats.choiceB.남자["10대"]);

    //
    result.woman.청춘A = percent(stats.choiceA.여자.청춘, stats.choiceA.여자.청춘 + stats.choiceB.여자.청춘);
    result.woman.청춘B = percent(stats.choiceB.여자.청춘, stats.choiceA.여자.청춘 + stats.choiceB.여자.청춘);
    result.woman["40대A"] = percent(stats.choiceA.여자["40대"], stats.choiceA.여자["40대"] + stats.choiceB.여자["40대"]);
    result.woman["40대B"] = percent(stats.choiceB.여자["40대"], stats.choiceA.여자["40대"] + stats.choiceB.여자["40대"]);
    result.woman["30대A"] = percent(stats.choiceA.여자["30대"], stats.choiceA.여자["30대"] + stats.choiceB.여자["30대"]);
    result.woman["30대B"] = percent(stats.choiceB.여자["30대"], stats.choiceA.여자["30대"] + stats.choiceB.여자["30대"]);
    result.woman["20대A"] = percent(stats.choiceA.여자["20대"], stats.choiceA.여자["20대"] + stats.choiceB.여자["20대"]);
    result.woman["20대B"] = percent(stats.choiceB.여자["20대"], stats.choiceA.여자["20대"] + stats.choiceB.여자["20대"]);
    result.woman["10대A"] = percent(stats.choiceA.여자["10대"], stats.choiceA.여자["10대"] + stats.choiceB.여자["10대"]);
    result.woman["10대B"] = percent(stats.choiceB.여자["10대"], stats.choiceA.여자["10대"] + stats.choiceB.여자["10대"]);

    //
    const temp = new Map();
    const keys = Object.keys(stats.choiceA.MBTI);

    for (const key of keys) {
      temp.set(key, stats.choiceA.MBTI[key] + stats.choiceB.MBTI[key]);
    }

    const tempArr = [...temp].sort((a, b) => b[1] - a[1]).slice(0, 3);
    for (const data of tempArr) {
      result.MBTI.push({ MBTI: data[0], choiceA: percent(stats.choiceA.MBTI[data[0]], data[1]), choiceB: percent(stats.choiceB.MBTI[data[0]], data[1]) });
    }

    return result;

  } catch (err) {
    console.log(err);
    return null;
  }
}

export default statsResult