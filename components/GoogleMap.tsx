import styles from "../styles/GoogleMap.module.scss";

export default function GoogleMap() {
  return (
    <iframe
      className={styles.googlemap}
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.478909272192!2d139.32892968697686!3d35.61591848732572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191d05eb3fce79%3A0x7d5ec195446dcc4d!2z44CSMTkyLTA5MTUg5p2x5Lqs6YO95YWr546L5a2Q5biC5a6H5rSl6LKr55S677yR77yV77yV77yW!5e0!3m2!1sja!2sjp!4v1673592077470!5m2!1sja!2sjp'
      style={{ border: "none" }}
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  );
}
