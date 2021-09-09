import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <header class={styles.showcase}>
      <div class={styles.container}>
        <nav>
          <h1 class={styles.logo}>My Website</h1>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
          </ul>
        </nav>

        <div class={styles.showcaseContent}>
          <div>
            <h1>Make Your Marketing Real</h1>
            <p class={styles.my1}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
              vitae dolore.
            </p>
            <a href='#' class={styles.btnPrimary}>
              Learn More
            </a>
            <a href='#' class={styles.btnSecondary}>
              Sign Up
            </a>
          </div>
          <img src='https://themesbrand.com/zooki/layouts/images/home-2-img.png' />
        </div>
      </div>
    </header>
  )
}
