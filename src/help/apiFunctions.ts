import axios from "axios";
const baseUrl = "https://www.breakingbadapi.com/api/";

export async function fetchAllEpisodes() {
  const res = await axios.get(baseUrl + "episodes");

  return res.data;
}

// export async function fetchSingleEpisode(episodeId: string) {
//     const res = await axios.get(baseUrl +)
// }

export function fetchCharacter(encodedName: string) {
  return async () => {
    const res = await axios.get(baseUrl + "characters", {
      params: { name: String(encodedName) },
    });
    console.log(res.config.params);

    return res.data;
  };
}
