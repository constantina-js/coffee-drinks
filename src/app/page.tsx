
"use client"

import Cup from './Components/Cup';
import css from './page.module.css';

export default function Home() {
  return (
    <main className={css.mainBody}>
      <header>
        <h1>Coffee Drinks</h1>
        <h3>Learn what's in your favorite coffee drinks</h3>
      </header>
      <Cup />
    </main>
  )
}
