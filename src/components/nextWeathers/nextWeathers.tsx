import { weatherApi } from "../../interfaces/weather";
import CardList from "../shared/cardList/cardList";

type Props = {
  listWeather: Array<weatherApi>;
};

const NextWeathers = ({ listWeather }: Props) => {
  return <CardList list={listWeather}></CardList>;
};

export default NextWeathers;
