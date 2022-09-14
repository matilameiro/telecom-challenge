import style from "./header.module.scss";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <h2 className={style.header__container__title}>Tu Tiempo</h2>
      </div>
    </div>
  );
};
