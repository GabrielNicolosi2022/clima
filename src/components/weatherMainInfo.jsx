import styles from './weatherMainInfo.module.css';

const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <img
          src={`http:${weather?.current.condition.icon}`}
          width='128'
          alt={weather?.current.condition.text}
        />
      <div className={styles.weatherConditions}>
        <div className={styles.condition}>{weather?.current.condition.text}</div>
        <div className={styles.current}>{weather?.current.temp_c}°C</div>
      </div>
      </div>
      <iframe
        title='mapa'
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25596424.265591823!2d${weather?.location.lon}6!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1ses-419!2sar!4v1703013178112!5m2!1ses-419!2sar`}
        width='100%'
        height='400'
        style={{ border: 0 }}
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default WeatherMainInfo;
