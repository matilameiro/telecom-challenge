import { Citys } from "../../interfaces/city";
import { Position } from "../../interfaces/position";
import Card from "../shared/card/card";
import Styles from "./otherCitysWeather.module.scss";

type Props = {
  citys: Array<Citys>;
  onClick: (position: Position) => void;
};

const OtherCitysWeather = ({ citys, onClick }: Props) => {
  return (
    <>
      <h3>Ver otras ciudades</h3>
      <div className={Styles.otherCitys}>
        {citys.map((city) => (
          <Card key={city.name}>
            <div
              className={Styles.otherCitys__city}
              onClick={() => onClick(city.position)}
            >
              <h6>{city.name}</h6>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default OtherCitysWeather;
