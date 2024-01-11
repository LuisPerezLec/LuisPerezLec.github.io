import styles from "./styles.js";
import Luis from './assets/Luis.png'

export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <main>
        <div className={`flex md:flex-row flex-col md:${styles.paddingY+ ' ' +styles.flexCenter} hero-background py-16`}>
          <div className={`bg-white rounded-tl-lg rounded-br-lg w-[80%] xs:w-[440px] p-8`}>
            <div>
              <img src={Luis} className="rounded-full"/>
            </div>
            <div>Nombre</div>
          </div>
          <div>Lado derecho</div>
        </div>
      </main>
    </div>
  )
}