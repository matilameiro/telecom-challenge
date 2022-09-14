import Card from "../card/card";

type Props<T> = {
  list: Array<T>;
  // keyExtractor: (item: T) => string;
};

const CardList = <T extends unknown>({ list }: Props<T>) => {
  return (
    <div>
      {list.map((item) => (
        <Card>
          <div>un item</div>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
