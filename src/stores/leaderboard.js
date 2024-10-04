import { writable } from "svelte/store";

export let leaderboard = writable([]);

const titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
export const rankify = () => {
  leaderboard.subscribe((lb) => {
    lb.forEach((p, i) => {
      let firstKey = Object.keys(p).find(key => key !== 'profile');

      let player = p[firstKey];

      player.name = titleCase(player.name);
    });

    lb.sort((a, b) => {
      let keyA = Object.keys(a).find(key => key !== 'profile');
      let keyB = Object.keys(b).find(key => key !== 'profile');

      return (b[keyB].name > a[keyA].name ? -1 : 1) ||
             (b[keyB].easy - a[keyA].easy) ||
             (b[keyB].medium - a[keyA].medium) ||
             (b[keyB].hard - a[keyA].hard) ||
             (b[keyB].score - a[keyA].score);
    });

    lb.forEach((p, i) => {
      let firstKey = Object.keys(p).find(key => key !== 'profile');
      p[firstKey].rank = i + 1;
    });
  });
};
export const searchQueryStore = writable("");

export const pstringify = () => {
  leaderboard.subscribe((lb) => {
    lb.forEach((p) => {
      p.str = p.name + " " + p.profile + " " + p.score + " " + p.rollNumber + " ";
    }); 
  });
};
export const search = () => {
  let q = "";
  searchQueryStore.subscribe((data) => (q = data.toLowerCase()));
  let keywords = q.split(" ");
  let results = [];
  let resultSet = new Set();
  leaderboard.subscribe((lb) => {
    keywords.forEach((keyword) => {
      if (q == "" || keyword !== "") {
        results = results.concat(
          lb.filter((p) => p.str.toLowerCase().includes(keyword))
        );
      }
    });

    results.forEach((r) => {
      resultSet.add(r);
    });
  });
  return Array.from(resultSet);
};
